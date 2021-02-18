<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Validator;

class UserController extends Controller
{
    public function index(Request $request)
    {
        // Data per page
        $per = ( isset($request->per) ? $request->per : 10);

        // Data all paginate
        $data = User::where(function($query) use ($request){
            $query->where('name', 'like', '%'.$request->search.'%')
            ->orWhere('username', 'like', '%'.$request->search.'%')
            ->orWhere('email', 'like', '%'.$request->search.'%');
        })->orderBy('id', 'desc')->paginate($per);

        $data->map(function($a){
            $btnEdit = '<button class="btn btn-clean btn-icon btn-icon-md edit" data-uuid="'.$a->uuid.'"><i class="fa fa-edit text-warning"></i></button>';
            $btnHapus = '<button class="btn btn-clean btn-icon btn-icon-md hapus" data-uuid="'.$a->uuid.'"><i class="fa fa-trash text-danger"></i></button>';
            $a->action = $btnEdit.$btnHapus;

            return $a;
        });

        return response()->json($data);
    }

    public function create(Request $request)
    {
    	$validator = Validator::make($request->all(), [
    		'level_id' => 'required|integer',
            'name' => 'required|string',
            'email' => 'required|string',
            'username' => 'required|string',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json([
            	'status' => false,
            	'message' => $validator->messages()->first()
            ], 500);
        }

        $check = User::where('username', $request->username)->first();
        if(isset($check)){
            return response()->json([
                'status' => false,
                'message' => 'Username sudah digunakan',
            ], 404);
        }

        $data = User::create([
        	'level_id' => $request->level_id,
			'name' => $request->name,
			'email' => $request->email,
			'username' => $request->username,
			'password' => bcrypt($request->password),
        ]);

        return response()->json([
        	'status' => true,
        	'message' => 'Data berhasil di simpan',
        ], 200);
    }

    public function getData($uuid)
    {
    	$data = User::findByUuid($uuid);

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
            'level_id' => 'required|integer',
            'name' => 'required|string',
            'email' => 'required|string',
            'username' => 'required|string',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json([
            	'status' => false,
            	'message' => $validator->messages()->first()
            ], 500);
        }

        $data = User::findByUuid($uuid);
        $data->update([
        	'level_id' => $request->level_id,
			'name' => $request->name,
			'email' => $request->email,
			'username' => $request->username,
			'password' => bcrypt($request->password),
        ]);

        return response()->json([
        	'status' => true,
        	'message' => 'Data berhasil di simpan',
        ], 200);
    }

    public function delete($uuid)
    {
        $data = User::findByUuid($uuid);
    
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
