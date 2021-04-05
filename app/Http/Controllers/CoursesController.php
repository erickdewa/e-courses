<?php

namespace App\Http\Controllers;

use App\Models\Courses;
use App\Models\CoursesReview;
use App\Models\MateriGroup;
use App\Models\Materi;
use App\Models\UserCourses;
use Illuminate\Http\Request;
use Validator, JWTAuth, AppHelper;

class CoursesController extends Controller
{   
    // Page user home
    public function getDataUser(Request $request)
    {   
        if($request->skill_id == ''){
            $data = Courses::with('user', 'coursesskill')
            ->where(function($q) use ($request){
                $q->where('name', 'like', '%'.$request->search.'%');
            })->has('materigroup')->paginate(9);
        }else{
            $data = Courses::with('user', 'coursesskill')
            ->whereHas('coursesskill', function($q) use ($request){
                $q->where('skill_id', $request->skill_id);
            })->where(function($q) use ($request){
                $q->where('name', 'like', '%'.$request->search.'%');
            })->has('materigroup')->paginate(9);
        }

        $length = Courses::get()->count();

        return response()->json([
            'status' => true,
            'data' => $data,
            'length' => $length,
            'message' => 'Data berhasil diambil'
        ]);
    }

    // Page user courses
    public function getDataCoursesAuth($uuid)
    {   
        $data = Courses::findByUuid($uuid);
        $payment = UserCourses::where('courses_id', $data->id)
        ->where('user_id', JWTAuth::user()->id)
        ->where('status', '!=', 'cancel')->first();

        if(isset($payment)){
            $data = Courses::with(['materigroup' => function($query){
                $query->with(['materi' => function($query){
                    $query->orderBy('id', 'asc');
                }])->has('materi')->orderBy('id', 'asc');
            }, 'user', 'coursestool.tool', 'courseslearn', 'coursesreview.user.profile'])
            ->has('materigroup')->where('uuid', $uuid)->first();
        }else{
            $data = Courses::with(['materigroup' => function($query){
                $query->with(['materi' => function($query){
                    $query->where('is_preview', 'Y')
                    ->orderBy('id', 'asc');
                }])->has('materi')->orderBy('id', 'asc');
            }, 'user', 'coursestool.tool', 'courseslearn', 'coursesreview.user.profile'])
            ->has('materigroup')->where('uuid', $uuid)->first();
        }

        // Hitung Rating
        $review = CoursesReview::where('courses_id', $data->id)->get();
        if(count($review) > 0){
            $sum = $review->sum('rate');
            $count = $review->count();
            $data->rating = $sum/$count;
        }else{
            $data->rating = 0;
        }

        $materiGroup = MateriGroup::where('courses_id', $data->id)
        ->pluck('id')->toArray();

        $data->count_materi = Materi::whereIn('materigroup_id', $materiGroup)
        ->where('is_preview', 'N')
        ->get()->count();

        // Tanggal
        $data->tanggal = $this->tanggal($data->created_at);
        $data->coursesreview->map(function($a){
            $a->tanggal = $this->tanggal($a->created_at);

            return $a;
        });

        return response()->json([
            'status' => true,
            'data' => $data,
            'payment' => ((isset($payment))?$payment->status:'none'),
            'message' => 'Data berhasil diambil'
        ]);
    }

    public function getDataCourses($uuid)
    {
        $data = Courses::with(['materigroup' => function($query){
            $query->with(['materi' => function($query){
                $query->where('is_preview', 'Y')
                ->orderBy('id', 'asc');
            }])->has('materi')->orderBy('id', 'asc');
        }, 'user', 'coursestool.tool', 'courseslearn', 'coursesreview.user.profile'])
        ->has('materigroup')->where('uuid', $uuid)->first();

        $materiGroup = MateriGroup::where('courses_id', $data->id)
        ->pluck('id')->toArray();

        $data->count_materi = Materi::whereIn('materigroup_id', $materiGroup)
        ->where('is_preview', 'N')
        ->get()->count();

        return response()->json([
            'status' => true,
            'data' => $data,
            'payment' => 'none',
            'message' => 'Data berhasil diambil'
        ]);
    }

    public function index(Request $request)
    {
    	// Data per page
        $per = ( isset($request->per) ? $request->per : 10);

        // Data all paginate
        $data = Courses::where(function($query) use ($request){
            $query->where('name', 'like', '%'.$request->search.'%');
        })->orderBy('id', 'desc')->paginate($per);

        $data->map(function($a){
            $btnEdit = '<button class="btn btn-clean btn-icon btn-icon-md edit" title="Edit" data-id="'.$a->id.'" data-uuid="'.$a->uuid.'"><i class="fa fa-edit text-warning"></i></button>';
            $btnHapus = '<button class="btn btn-clean btn-icon btn-icon-md hapus" title="Hapus" data-id="'.$a->id.'" data-uuid="'.$a->uuid.'"><i class="fa fa-trash text-danger"></i></button>';
            $btnTools = '<button class="btn btn-clean btn-icon btn-icon-md tools" title="Tools" data-id="'.$a->id.'" data-uuid="'.$a->uuid.'"><i class="fa fa-cogs text-info"></i></button>';
            $btnSkill = '<button class="btn btn-clean btn-icon btn-icon-md skill" title="Skill" data-id="'.$a->id.'" data-uuid="'.$a->uuid.'"><i class="fa fa-tasks text-info"></i></button>';
            $btnReview = '<button class="btn btn-clean btn-icon btn-icon-md review" title="Review" data-id="'.$a->id.'" data-uuid="'.$a->uuid.'"><i class="fa fa-star-o text-success"></i></button>';
            $btnBook = '<button class="btn btn-clean btn-icon btn-icon-md learn" title="Learn" data-id="'.$a->id.'" data-uuid="'.$a->uuid.'"><i class="fa fa-book text-success"></i></button>';
            $a->action = $btnEdit.$btnHapus.$btnTools.$btnSkill.$btnReview.$btnBook;

            return $a;
        });

        return response()->json($data);
    }

    public function create(Request $request)
    {
		$validator = Validator::make($request->all(), [
            'name' => 'required|string',
			'subname' => 'required|string',
			'thumbnile' => 'image',
			'color' => 'required|string',
			'description' => 'required|string',
			'price' => 'required|string',
			'access' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
            	'status' => false,
            	'message' => $validator->messages()->first()
            ], 500);
        }

        if(isset($request->thumbnile)) {
            $nama_thumbnile = 'courses_'.time().'.'.$request->thumbnile->getClientOriginalExtension();
            $request->thumbnile->move(public_path('img/courses/thumbnile'), $nama_thumbnile);
            $thumbnile = '/img/courses/thumbnile/'.$nama_thumbnile;
        }else{
            $thumbnile = '/img/courses/thumbnile/default.png';
        }

        $data = Courses::create([
        	'name' => $request->name,
			'subname' => $request->subname,
			'thumbnile' => $thumbnile,
			'color' => $request->color,
			'description' => $request->description,
			'price' => AppHelper::rupiah($request->price),
			'access' => $request->access,
			'status' => 'active',
			'user_id' => JWTAuth::user()->id,
        ]);

        return response()->json([
        	'status' => true,
            'data' => $data,
        	'message' => 'Data berhasil di simpan',
        ], 200);
    }

    public function getData($uuid)
    {
        $data = Courses::findByUuid($uuid);

        if(isset($data)){
            return response()->json([
                'status' => true,
                'data' => $data,
                'message' => 'Data berhasil di temukan',
            ], 200);
        }else{
            return response()->json([
                'status' => false,
                'message' => 'Data tidak di temukan',
            ], 404);
        }
    }

    public function update(Request $request, $uuid)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'subname' => 'required|string',
            'thumbnile' => 'image',
            'color' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|string',
            'access' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->messages()->first()
            ], 500);
        }

        $data = Courses::findByUuid($uuid);
        if(isset($request->thumbnile)) {
            $nama_thumbnile = 'courses_'.time().'.'.$request->thumbnile->getClientOriginalExtension();
            $request->thumbnile->move(public_path('img/courses/thumbnile'), $nama_thumbnile);
            if($data->thumbnile != '/img/courses/thumbnile/default.png'){
                $fwhite = public_path().$data->thumbnile;
                if (is_file($fwhite)) {
                    unlink($fwhite);
                }
            }
            $thumbnile = '/img/courses/thumbnile/'.$nama_thumbnile;
        }else{
            $thumbnile = $data->thumbnile;
        }

        $data->update([
            'name' => $request->name,
            'subname' => $request->subname,
            'thumbnile' => $thumbnile,
            'color' => $request->color,
            'description' => $request->description,
            'price' => AppHelper::rupiah($request->price),
            'access' => $request->access,
            'status' => 'active',
            'user_id' => JWTAuth::user()->id,
        ]);

        return response()->json([
            'status' => true,
            'data' => $data,
            'message' => 'Data berhasil di simpan',
        ], 200);
    }

    public function delete($uuid)
    {
        $data = Courses::findByUuid($uuid);
        if($data->thumbnile != '/img/courses/thumbnile/default.png'){
            $fwhite = public_path().$data->thumbnile;
            if (is_file($fwhite)) {
                unlink($fwhite);
            }
        }
        
        if($data->delete()){
            return response()->json([
                'status' => true,
                'message' => 'Data berhasil di hapus',
            ], 200);
        }else{
            return response()->json([
                'status' => false,
                'message' => 'Data gagal di hapus',
            ], 404);
        }
    }

    public function tanggal($date)
    {   
        $bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        return date('d', strtotime($date)).' '.$bulan[intval(date('m', strtotime($date)))].' '.date('Y', strtotime($date));
    }
}
