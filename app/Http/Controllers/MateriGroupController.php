<?php

namespace App\Http\Controllers;

use App\Models\Courses;
use App\Models\MateriGroup;
use Illuminate\Http\Request;
use Validator, JWTAuth;

class MateriGroupController extends Controller
{
    public function index(Request $request, $uuid)
    {
    	// Data per page
        $per = ( isset($request->per) ? $request->per : 10);

        // Data all paginate
        $courses = Courses::findByUuid($uuid);
        if(!isset($courses)){
        	return response()->json([
            	'status' => false,
            	'message' => 'Data tidak di temukan',
            ], 404);
        }

        $data = MateriGroup::where('courses_id', $courses->id)
        ->where(function($query) use ($request){
            $query->where('nm_materi', 'like', '%'.$request->search.'%');
        })->orderBy('id', 'asc')->paginate($per);

        $data->map(function($a){
            $btnEdit = '<button class="btn btn-clean btn-icon btn-icon-md edit" data-tag="'.$a->nm_materi.'" data-uuid="'.$a->uuid.'"><i class="fa fa-edit text-warning"></i></button>';
            $btnHapus = '<button class="btn btn-clean btn-icon btn-icon-md hapus" data-tag="'.$a->nm_materi.'" data-uuid="'.$a->uuid.'"><i class="fa fa-trash text-danger"></i></button>';
            $btnDetail = '<button class="btn btn-clean btn-icon btn-icon-md detail" data-id="'.$a->id.'" data-tag="'.$a->nm_materi.'" data-uuid="'.$a->uuid.'"><i class="fa fa-eye text-info"></i></button>';
            $a->action = $btnEdit.$btnHapus.$btnDetail;

            return $a;
        });

        return response()->json($data);
    }

    public function getDatas()
    {
    	$data = MateriGroup::get();

    	return response()->json([
            'status' => true,
            'data' => $data,
            'message' => 'Data berhasil di temukan',
        ], 200);
    }

    public function create(Request $request)
    {
    	$validator = Validator::make($request->all(), [
            'nm_materi' => 'required|string',
            'courses_id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json([
            	'status' => false,
            	'message' => $validator->messages()->first()
            ], 500);
        }

        $data = MateriGroup::create([
        	'courses_id' => $request->courses_id,
        	'nm_materi' => $request->nm_materi,
        ]);

        return response()->json([
        	'status' => true,
        	'message' => 'Data berhasil di simpan',
        ], 200);
    }

    public function getData($uuid)
    {
    	$data = MateriGroup::findByUuid($uuid);

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
            'nm_materi' => 'required|string',
            'courses_id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json([
            	'status' => false,
            	'message' => $validator->messages()->first()
            ], 500);
        }

        $data = MateriGroup::findByUuid($uuid);
        $data->update([
        	'courses_id' => $request->courses_id,
        	'nm_materi' => $request->nm_materi,
        ]);

        return response()->json([
        	'status' => true,
        	'message' => 'Data berhasil di simpan',
        ], 200);
    }

    public function delete($uuid)
    {
        $data = MateriGroup::findByUuid($uuid);
    
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
