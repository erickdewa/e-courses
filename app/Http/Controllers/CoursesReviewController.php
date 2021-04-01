<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CoursesReview;
use App\Models\Courses;
use Validator, JWTAuth;

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

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'courses_id' => 'required|integer',
            'rate' => 'required|integer',
            'description' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->messages()->first()
            ], 500);
        }

        $reviewCount = CoursesReview::where('courses_id', $request->courses_id)
        ->get()->count();

        $data = CoursesReview::create([
            'courses_id' => $request->courses_id,
            'user_id' => JWTAuth::user()->id,
            'rate' => $request->rate,
            'description' => $request->description,
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil di simpan',
        ], 200);
    }
}
