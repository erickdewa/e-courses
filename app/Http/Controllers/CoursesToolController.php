<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CoursesTool;
use App\Models\Courses;
use App\Models\Tool;
use Validator;

class CoursesToolController extends Controller
{
    public function getDataTool($uuid)
    {
        $courses = Courses::findByUuid($uuid);
        $coursesTool = CoursesTool::where('courses_id', $courses->id)
        ->pluck('tool_id')->toArray();

        $data = Tool::whereNotIn('id', $coursesTool)->get();

        return response()->json([
            'status' => true,
            'data' => $data,
            'message' => 'Data berhasil diambil',
        ]);
    }
	public function getData($uuid)
	{
		$courses = Courses::findByUuid($uuid);
		$data = CoursesTool::with('courses', 'tool')
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
            'tool_id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json([
            	'status' => false,
            	'message' => $validator->messages()->first()
            ], 500);
        }

        $data = CoursesTool::create([
        	'courses_id' => $request->courses_id,
            'tool_id' => $request->tool_id,
        ]);

        return response()->json([
        	'status' => true,
        	'message' => 'Data berhasil di simpan',
        ], 200);
    }

    public function delete($uuid)
    {
    	$data = CoursesTool::findByUuid($uuid);
    
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
