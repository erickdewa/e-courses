<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CoursesSkill;
use App\Models\Courses;
use App\Models\Skill;
use Validator;

class CoursesSkillController extends Controller
{
    public function getDataSkill($uuid)
    {
        $courses = Courses::findByUuid($uuid);
        $coursesSkill = CoursesSkill::where('courses_id', $courses->id)
        ->pluck('skill_id')->toArray();

        $data = Skill::whereNotIn('id', $coursesSkill)->get();

        return response()->json([
            'status' => true,
            'data' => $data,
            'message' => 'Data berhasil diambil',
        ]);
    }
	public function getData($uuid)
	{
		$courses = Courses::findByUuid($uuid);
		$data = CoursesSkill::with('courses', 'skill')
        ->where('courses_id', $courses->id)
		->get();

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
            'skill_id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json([
            	'status' => false,
            	'message' => $validator->messages()->first()
            ], 500);
        }

        $data = CoursesSkill::create([
        	'courses_id' => $request->courses_id,
            'skill_id' => $request->skill_id,
        ]);

        return response()->json([
        	'status' => true,
        	'message' => 'Data berhasil di simpan',
        ], 200);
    }

    public function delete($uuid)
    {
    	$data = CoursesSkill::findByUuid($uuid);
    
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
