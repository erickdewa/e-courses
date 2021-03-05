<?php

namespace App\Http\Controllers;

use App\Models\Materi;
use App\Models\MateriGroup;
use Illuminate\Http\Request;
use Validator;

class MateriController extends Controller
{
    public function index(Request $request, $uuid)
    {
    	// Data per page
        $per = ( isset($request->per) ? $request->per : 10);

        // Data all paginate
        $materigroup = MateriGroup::findByUuid($uuid);
        if(!isset($materigroup)){
        	return response()->json([
            	'status' => false,
            	'message' => 'Data tidak di temukan',
            ], 404);
        }

        $data = Materi::where('materigroup_id', $materigroup->id)
        ->where(function($query) use ($request){
            $query->where('nm_materi', 'like', '%'.$request->search.'%');
        })->orderBy('id', 'desc')->paginate($per);

        $data->map(function($a){
            $btnEdit = '<button class="btn btn-clean btn-icon btn-icon-md edit" data-uuid="'.$a->uuid.'"><i class="fa fa-edit text-warning"></i></button>';
            $btnHapus = '<button class="btn btn-clean btn-icon btn-icon-md hapus" data-uuid="'.$a->uuid.'"><i class="fa fa-trash text-danger"></i></button>';
            $a->action = $btnEdit.$btnHapus;

            return $a;
        });

        return response()->json($data);
    }

    public function getDatas()
    {
    	$data = Materi::get();

    	return response()->json([
            'status' => true,
            'data' => $data,
            'message' => 'Data berhasil di temukan',
        ], 200);
    }

    public function create(Request $request)
    {
    	$validator = Validator::make($request->all(), [
            'materigroup_id' => 'required|integer',
            'nm_materi' => 'required|string',
            'thumbnail' => 'required|image',
            'video' => 'required|string',
            'description' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
            	'status' => false,
            	'message' => $validator->messages()->first()
            ], 500);
        }

        if(isset($request->thumbnail)) {
            $nama_thumbnail = 'courses_'.time().'.'.$request->thumbnail->getClientOriginalExtension();
            $request->thumbnail->move(public_path('img/courses/thumbnail'), $nama_thumbnail);
            $thumbnail = '/img/courses/thumbnileMateri/'.$nama_thumbnail;
        }else{
            $thumbnail = '/img/courses/thumbnileMateri/default.png';
        }

        $data = Materi::create([
        	'materigroup_id' => $request->materigroup_id,
            'nm_materi' => $request->nm_materi,
            'video' => $request->video,
            'description' => $request->description,
            'thumbnail' => $thumbnail,
        ]);

        return response()->json([
        	'status' => true,
        	'message' => 'Data berhasil di simpan',
        ], 200);
    }

    public function getData($uuid)
    {
    	$data = Materi::findByUuid($uuid);

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
            'materigroup_id' => 'required|integer',
            'nm_materi' => 'required|string',
            'thumbnail' => 'required|image',
            'video' => 'required|string',
            'description' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
            	'status' => false,
            	'message' => $validator->messages()->first()
            ], 500);
        }

        $data = Materi::findByUuid($uuid);
        if(isset($request->thumbnail)) {
            $nama_thumbnail = 'courses_'.time().'.'.$request->thumbnail->getClientOriginalExtension();
            $request->thumbnail->move(public_path('img/courses/thumbnileMateri'), $nama_thumbnail);
            if($data->thumbnail != '/img/courses/thumbnileMateri/default.png'){
                $fwhite = public_path().$data->thumbnail;
                if (is_file($fwhite)) {
                    unlink($fwhite);
                }
            }
            $thumbnail = '/img/courses/thumbnail/'.$nama_thumbnail;
        }

        $data->update([
        	'materigroup_id' => $request->materigroup_id,
            'nm_materi' => $request->nm_materi,
            'video' => $request->video,
            'description' => (($request->description!='')?$request->description:'-'),
            'thumbnail' => $thumbnail,
        ]);

        return response()->json([
        	'status' => true,
        	'message' => 'Data berhasil di simpan',
        ], 200);
    }

    public function delete($uuid)
    {
        $data = Materi::findByUuid($uuid);
        if($data->thumbnile != '/img/courses/thumbnileMateri/default.png'){
            $fwhite = public_path().$data->thumbnile;
            if (is_file($fwhite)) {
                unlink($fwhite);
            }
        }
    
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
