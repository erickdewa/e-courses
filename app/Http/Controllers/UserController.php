<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Validation;

class UserController extends Controller
{
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

    public function edit($uuid)
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
    
        if($data->delete(){
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
