<?php

namespace App\Http\Controllers;

use App\Models\Courses;
use App\Models\UserCourses;
use Illuminate\Http\Request;
use Validator, JWTAuth, AppHelper;

class CoursesController extends Controller
{   
    // Page user home
    public function getDataUser(Request $request)
    {
        $data = Courses::with('user')->paginate(9);
        $length = Courses::get()->count();

        return response()->json([
            'status' => true,
            'data' => $data,
            'length' => $length,
            'message' => 'Data berhasil diambil'
        ]);
    }

    // Page user courses
    public function getDataCourses($uuid)
    {
        $data = Courses::with(['materigroup' => function($query){
            $query->with(['materi' => function($query){
                $query->where('is_preview', 'Y');
            }])->whereHas('materi', function($query){
                $query->where('is_preview', 'Y');
            });
        }, 'user', 'coursestool.tool', 'courseslearn'])
        ->where('uuid', $uuid)->first();

        return response()->json([
            'status' => true,
            'data' => $data,
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
            $btnReview = '<button class="btn btn-clean btn-icon btn-icon-md review" title="Review" data-id="'.$a->id.'" data-uuid="'.$a->uuid.'"><i class="fa fa-star-o text-success"></i></button>';
            $btnBook = '<button class="btn btn-clean btn-icon btn-icon-md learn" title="Learn" data-id="'.$a->id.'" data-uuid="'.$a->uuid.'"><i class="fa fa-book text-success"></i></button>';
            $a->action = $btnEdit.$btnHapus.$btnTools.$btnReview.$btnBook;

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
            $nama_thumbnile = 'coursese_'.time().'.'.$request->thumbnile->getClientOriginalExtension();
            $request->thumbnile->move(public_path('img/coursese/thumbnile'), $nama_thumbnile);
            $thumbnile = '/img/coursese/thumbnile/'.$nama_thumbnile;
        }else{
            $thumbnile = '/img/coursese/thumbnile/default.png';
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
}
