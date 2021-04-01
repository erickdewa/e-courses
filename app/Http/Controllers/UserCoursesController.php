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
        $myCourses = UserCourses::with('user')
        ->where('status', 'success')
        ->where('user_id', JWTAuth::user()->id)
        ->pluck('courses_id')->toArray();

        $data = Courses::whereIn('id', $myCourses)->get();

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
            }

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
        $request->payment_expired = (($request->status == 'expired')?date('Y-m-d H:i:s'):null);
        $data = UserCourses::findByUuid($uuid);
        $data->update([
            'status' => $request->status,
            'payment_expired' => $request->payment_expired,
        ]);
    }
}
