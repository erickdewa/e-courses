<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Http\Request;
use Validator, JWTAuth;

class ProfileController extends Controller
{
    public function getProfile()
    {
    	$data = Profile::with('user')
    	->where('user_id', JWTAuth::user()->id)->first();

    	if(isset($data)){
    		return response()->json([
	    		'status' => false,
	    		'message' => 'Data tidak ditemukan',
	    	]);
    	}

    	return response()->json([
    		'status' => true,
    		'data' => $data,
    		'message' => 'Data berhasil diambil',
    	]);
    }

    public function create(Request $request)
    {
    	$validator = Validator::make($request->all(), [
            'user_id' => 'required|integer',
            'nm_full' => 'required|string',
            'date_bird' => 'required|string',
            'profession' => 'required|string',
            'bio' => 'required|string',
            'address' => 'required|string',
            'image' => 'required|image',
            'description' => 'required|string',
            'instagram' => 'required|string',
            'facebook' => 'required|string',
            'twitter' => 'required|string',
            'github' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
            	'status' => false,
            	'message' => $validator->messages()->first()
            ], 500);
        }

        if(isset($request->image)) {
            $nama_profile = 'profile_'.time().'.'.$request->image->getClientOriginalExtension();
            $request->image->move(public_path('img/profile'), $nama_profile);
            $profile = '/img/profile/'.$nama_profile;
        }else{
            $profile = '/img/profile/default.png';
        }

        $data = Profile::create([
        	'user_id' => $request->user_id,
            'nm_full' => $request->nm_full,
            'date_bird' => $request->date_bird,
            'profession' => $request->profession,
            'bio' => $request->bio,
            'address' => $request->address,
            'image' => $profile,
            'description' => $request->description,
            'instagram' => $request->instagram,
            'facebook' => $request->facebook,
            'twitter' => $request->twitter,
            'github' => $request->github
        ]);

        return response()->json([
        	'status' => true,
        	'message' => 'Data berhasil di simpan',
        ], 200);
    }

    public function update(Request $request, $uuid)
    {
    	$validator = Validator::make($request->all(), [
            'user_id' => 'required|integer',
            'nm_full' => 'required|string',
            'date_bird' => 'required|string',
            'profession' => 'required|string',
            'bio' => 'required|string',
            'address' => 'required|string',
            'image' => 'required|image',
            'description' => 'required|string',
            'instagram' => 'required|string',
            'facebook' => 'required|string',
            'twitter' => 'required|string',
            'github' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
            	'status' => false,
            	'message' => $validator->messages()->first()
            ], 500);
        }

        $data = Profile::findByUuid($uuid);
        if(isset($request->image)) {
            $nama_profile = 'image_'.time().'.'.$request->image->getClientOriginalExtension();
            $request->image->move(public_path('img/profile'), $nama_profile);
            if($data->image != '/img/profile/default.png'){
                $fwhite = public_path().$data->image;
                if (is_file($fwhite)) {
                    unlink($fwhite);
                }
            }
            $profile = '/img/profile/'.$nama_profile;
        }else{
            $profile = $data->image;
        }

        $data->update([
        	'user_id' => $request->user_id,
            'nm_full' => $request->nm_full,
            'date_bird' => $request->date_bird,
            'profession' => $request->profession,
            'bio' => $request->bio,
            'address' => $request->address,
            'image' => $profile,
            'description' => $request->description,
            'instagram' => $request->instagram,
            'facebook' => $request->facebook,
            'twitter' => $request->twitter,
            'github' => $request->github
        ]);

        return response()->json([
        	'status' => true,
        	'message' => 'Data berhasil di simpan',
        ], 200);
    }

    public function verifed(Request $request, $uuid)
    {
    	$validator = Validator::make($request->all(), [
            'verifed' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
            	'status' => false,
            	'message' => $validator->messages()->first()
            ], 500);
        }

        $data = Profile::findByUuid($uuid);
        $data->update([
        	'verifed' => $request->verifed,
        ]);

        return response()->json([
        	'status' => true,
        	'message' => 'Data berhasil di simpan',
        ], 200);
    }
}
