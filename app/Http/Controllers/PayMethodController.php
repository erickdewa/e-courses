<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PayMethod;
use Validator;

class PayMethodController extends Controller
{
    public function index(Request $request)
    {
    	// Data per page
        $per = ( isset($request->per) ? $request->per : 10);

        // Data all paginate
        $data = PayMethod::where(function($query) use ($request){
            $query->where('nm_method', 'like', '%'.$request->search.'%');
        })->orderBy('id', 'desc')->paginate($per);

        $data->map(function($a){
            $btnEdit = '<button class="btn btn-clean btn-icon btn-icon-md edit" data-uuid="'.$a->uuid.'"><i class="fa fa-edit text-warning"></i></button>';
            $btnHapus = '<button class="btn btn-clean btn-icon btn-icon-md hapus" data-uuid="'.$a->uuid.'"><i class="fa fa-trash text-danger"></i></button>';
            $a->action = $btnEdit.$btnHapus;
            $a->active = '<label class="switch"><input class="form-active" type="checkbox" '.(($a->active=='Y')?'checked':'').' data-uuid="'.$a->uuid.'"><span class="slider round"></span></label>';

            return $a;
        });

        return response()->json($data);
    }

    public function getDatas()
    {
        $data = PayMethod::where('active', 'Y')->get();

        return response()->json([
            'status' => true,
            'data' => $data,
            'message' => 'Data berhasil di temukan',
        ], 200);
    }

    public function create(Request $request)
    {
    	$validator = Validator::make($request->all(), [
            'nm_method' => 'required|string',
            'kode' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
            	'status' => false,
            	'message' => $validator->messages()->first()
            ], 500);
        }

        $data = PayMethod::create([
        	'nm_method' => $request->nm_method,
            'kode' => $request->kode,
        ]);

        return response()->json([
        	'status' => true,
        	'message' => 'Data berhasil di simpan',
        ], 200);
    }

    public function getData($uuid)
    {
    	$data = PayMethod::findByUuid($uuid);

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
            'nm_method' => 'required|string',
            'kode' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
            	'status' => false,
            	'message' => $validator->messages()->first()
            ], 500);
        }

        $data = PayMethod::findByUuid($uuid);
        $data->update([
        	'nm_method' => $request->nm_method,
            'kode' => $request->kode,
        ]);

        return response()->json([
        	'status' => true,
        	'message' => 'Data berhasil di simpan',
        ], 200);
    }

    public function change($uuid)
    {
        $data = PayMethod::findByUuid($uuid);
        $data->update([
            'active' => (($data->active=='N')?'Y':'N'),
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil di simpan',
        ], 200);
    }

    public function delete($uuid)
    {
        $data = PayMethod::findByUuid($uuid);
    
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
