<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CoursesReview;
use App\Models\Courses;
use Validator;

class CoursesReviewController extends Controller
{
    public function getCoursesReview($uuid)
    {
    	$courses = Courses::findByUuid($uuid);
    	$data = CoursesReview::where('courses_id', $courses->id)
    	->where('is_preview', 'Y')->get();

    	return response()->json([
            'status' => true,
            'data' => $data,
            'message' => 'Data berhasil diambil',
        ]);
    }

    public function getReview(Request $request, $uuid)
    {
    	$courses = Courses::findByUuid($uuid);
    	$data = CoursesReview::with('courses', 'user')
    	->where('courses_id', $courses->id)
    	->where(function($query) use ($request){
    		$query->where('rate', 'like', '%'.$request->rate.'%');
    	})->orderBy('created_at', 'desc')->get();

    	return response()->json([
            'status' => true,
            'data' => $data,
            'message' => 'Data berhasil diambil',
        ]);
    }
}
