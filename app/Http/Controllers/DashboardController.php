<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Courses;
use App\Models\User;
use App\Models\UserCourses;

class DashboardController extends Controller
{
    public function getData()
    {
    	$data = [
    		'user' => User::where('level_id', '2')->get()->count(),
    		'courses' => Courses::get()->count(),
    		'transaction' => UserCourses::whereIn('status', ['success', 'expired'])->get()->count(),
    	];

    	return response()->json([
    		'status' => true,
    		'data' => $data,
    		'message' => 'Data berhasil diambil'
    	]);
    }
}
