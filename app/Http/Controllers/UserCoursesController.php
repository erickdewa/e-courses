<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserCourses;
use App\Models\Courses;
use Validator, JWTAuth;

class UserCoursesController extends Controller
{
    // Page user courses player
    public function getDataCoursesPlayer($uuid)
    {   
        // check active courses
        $this->cekStatus();

        $data = UserCourses::with('user')
        ->where('uuid', $uuid)->first();

        return response()->json([
            'status' => true,
            'data' => $data,
            'message' => 'Data berhasil diambil'
        ]);
    }

    // Page user courses player all
    public function getDataCoursesAll()
    {   
        // check active courses
        $this->cekStatus();

        $myCourses = UserCourses::with('user')
        ->whereIn('status', ['success', 'procces'])
        ->where('user_id', JWTAuth::user()->id)
        ->pluck('courses_id')->toArray();

        $data = Courses::with(['coursesreview' => function($q){
            $q->where('user_id', JWTAuth::user()->id);
        }, 'usercourses'])->whereIn('id', $myCourses)->get();

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
        $data = UserCourses::with('user', 'courses', 'method')
        ->where(function($query) use ($request){
            $query->whereHas('user', function($query) use ($request){
                $query->where('name', 'like', '%'.$request->search.'%');
            })->orWhere('status', 'like', '%'.$request->search.'%');
        })->orderBy('id', 'desc')->paginate($per);

        $data->map(function($a){
            $btnDetail = '<button class="btn btn-clean btn-icon btn-icon-md detail" data-uuid="'.$a->uuid.'"><i class="fa fa-eye text-info"></i></button>';
            $a->action = $btnDetail;

            if($a->status == 'success'){
                $a->status = '<span class="aro-label aro-success">Success</span>';
            }else if($a->status == 'pending'){
                $a->status = '<span class="aro-label aro-info">Pending</span>';
            }else if($a->status == 'procces'){
                $a->status = '<span class="aro-label aro-info">Proses</span>';
            }else if($a->status == 'cancel'){
                $a->status = '<span class="aro-label aro-warning">Batal</span>';
            }

            // rupiah
            $a->total = number_format($a->total, 0, ",", ".");

            return $a;
        });

        return response()->json($data);
    }

    public function getData($uuid)
    {
        $data = UserCourses::with('user', 'courses', 'method')
        ->where('uuid', $uuid)->first();

        return response()->json([
            'status' => true,
            'data' => $data,
            'message' => 'Data berhasil diambil'
        ]);
    }

    public function changeStatus(Request $request, $uuid)
    {   
        $data = UserCourses::findByUuid($uuid);
        $courses = Courses::find($data->courses_id);
        if($request->status == 'success'){
            if($courses->access == 'annual'){
                $request->time_ended = date('Y-m-d', strtotime('+365 days'));
            }else if($courses->access == 'month'){
                $request->time_ended = date('Y-m-d', strtotime('+30 days'));
            }else if($courses->access == 'weekly'){
                $request->time_ended = date('Y-m-d', strtotime('+7 days'));
            }else{
                $request->time_ended = null;
            }
        }else if($request->status == 'ended'){
            $request->time_ended = date('Y-m-d');
        }else{
            $request->time_ended = null;
        }

        $data->update([
            'status' => $request->status,
            'time_ended' => $request->time_ended,
        ]);
    }

    public function cekStatus()
    {
        $date = date('Y-m-d');
        $data = UserCourses::where('status', 'success')->get();
        foreach ($data as $key => $value) {
            if(str_replace('-', '', $date) >= str_replace('-', '', $value->time_ended)){
                $datas = UserCourses::findByUuid($value->uuid);
                $datas->update([
                    'status' => 'ended',
                ]);
            }
        }
    }
}
