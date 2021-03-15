<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserCourses;
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
}
