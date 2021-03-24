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
        ->where('user_id', JWTAuth::user()->id)
        ->pluck('courses_id')->toArray();

        $data = Courses::whereIn('id', $myCourses)->get();

        return response()->json([
            'status' => true,
            'data' => $data,
            'message' => 'Data berhasil diambil'
        ]);
    }
}
