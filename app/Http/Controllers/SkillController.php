<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Skill;
use Validator;

class SkillController extends Controller
{
    public function index(Request $request)
    {
    	// Data per page
        $per = ( isset($request->per) ? $request->per : 10);

        // Data all paginate
        $data = Skill::where(function($query) use ($request){
            $query->where('nm_skill', 'like', '%'.$request->search.'%');
        })->orderBy('id', 'desc')->paginate($per);

        $data->map(function($a){
            $btnEdit = '<button class="btn btn-clean btn-icon btn-icon-md edit" data-uuid="'.$a->uuid.'"><i class="fa fa-edit text-warning"></i></button>';
            $btnHapus = '<button class="btn btn-clean btn-icon btn-icon-md hapus" data-uuid="'.$a->uuid.'"><i class="fa fa-trash text-danger"></i></button>';
            $btnDetail = '<button class="btn btn-clean btn-icon btn-icon-md detail" data-uuid="'.$a->uuid.'"><i class="fa fa-eye text-info"></i></button>';
            $a->action = $btnEdit.$btnHapus.$btnDetail;

            return $a;
        });

        return response()->json($data);
    }

    public function getDatas()
    {
        $data = Skill::get();

        return response()->json([
            'status' => true,
            'data' => $data,
            'message' => 'Data berhasil di temukan',
        ], 200);
    }

    public function create(Request $request)
    {
    	$validator = Validator::make($request->all(), [
            'nm_skill' => 'required|string',
            'description' => 'required|string',
            'link' => 'required|string',
            'image' => 'required|image',
        ]);

        if ($validator->fails()) {
            return response()->json([
            	'status' => false,
            	'message' => $validator->messages()->first()
            ], 500);
        }

        if(isset($request->image)) {
            $nama_image = 'skill_'.time().'.'.$request->image->getClientOriginalExtension();
            $request->image->move(public_path('img/skill'), $nama_image);
            $image = '/img/skill/'.$nama_image;
        }else{
            $image = '/img/skill/default.png';
        }

        $data = Skill::create([
        	'nm_skill' => $request->nm_skill,
			'description' => $request->description,
			'link' => $request->link,
			'image' => $image,
        ]);

        return response()->json([
        	'status' => true,
        	'message' => 'Data berhasil di simpan',
        ], 200);
    }

    public function getData($uuid)
    {
    	$data = Skill::findByUuid($uuid);

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
            'nm_skill' => 'required|string',
            'description' => 'required|string',
            'link' => 'required|string',
            'image' => 'image',
        ]);

        if ($validator->fails()) {
            return response()->json([
            	'status' => false,
            	'message' => $validator->messages()->first()
            ], 500);
        }

        $data = Skill::findByUuid($uuid);
        if(isset($request->image)) {
            $nama_image = 'skill_'.time().'.'.$request->image->getClientOriginalExtension();
            $request->image->move(public_path('img/skill'), $nama_image);
            if($data->image != '/img/skill/default.png'){
                $fwhite = public_path().$data->image;
                if (is_file($fwhite)) {
                    unlink($fwhite);
                }
            }
            $image = '/img/skill/'.$nama_image;
        }else{
            $image = $data->image;
        }

        $data->update([
        	'nm_skill' => $request->nm_skill,
			'description' => $request->description,
			'link' => $request->link,
			'image' => $image,
        ]);

        return response()->json([
        	'status' => true,
        	'message' => 'Data berhasil di simpan',
        ], 200);
    }

    public function delete($uuid)
    {
        $data = Skill::findByUuid($uuid);
        if($data->image != '/img/skill/default.png'){
            $fwhite = public_path().$data->image;
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
