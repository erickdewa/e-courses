<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Validator, JWTAuth;

class AuthController extends Controller
{
    public function login(Request $request)
    {  
        $validator = Validator::make($request->all(), [
			'email' => 'required|string',
			'password' => 'required|string',
        ]);

        if($validator->fails()) {
            return response()->json([
            	'status'=> false,
            	'message'=> $validator->messages()->first(),
            ], 400);
        }

        if(!$request->password){
            return response()->json([
                'status' => false, 
                'message' => 'Maaf, Password Tidak Boleh Kosong!',
            ], 500);
        }

        $user = User::where([
        	'email' => $request->email,
        	'confirm' => 'Yes',
        ])->first();

        if($user) {
            $token = JWTAuth::attempt($request->only('email', 'password'));
        }else{
            return response()->json([
                'status' => false, 
                'message' => 'Maaf, Email tidak terdaftar!',
            ], 500);
        }

        try{
            if(!$token) {
                return response()->json([
                	'status' => false,
                	'message' => 'Email/Password salah!'
                ], 500);
            }
        }catch (JWTException $e) {
            return response()->json([
            	'status' => false,
            	'message' => 'Sesuatu error terjadi.'
            ], 500);
        }

        return response()->json([
        	'status' => true,
        	'message' => 'Anda berhasil login!',
        ], 200)->header('Authorization', $token);
    }

    public function register(Request $request)
    {
    	$validator = Validator::make($request->all(), [
    		'name' => 'required|string',
    		'username' => 'required|string',
			'email' => 'required|string',
			'password' => 'required|string|min:8',
        ]);

        if($validator->fails()) {
            return response()->json([
            	'status'=> false,
            	'message'=> $validator->messages()->first(),
            ], 400);
        }

        $data = User::create([
	        'name' => $request->name,
			'username' => $request->username,
			'email' => $request->email,
			'password' => bcrypt($request->password),
			'confirm' => 'Yes',
			'level_id' => '1',
		]);

		return response()->json([
			'status' => true,
			'message' => 'Data berhasil disimpan.',
		]);
    }

    public function logout(Request $request)
    {
        try {
            JWTAuth::invalidate($request->bearerToken());
            return response()->json([
            	'status' => true,
            	'message'=> "Berhasil logout."
            ]);
        } catch (JWTException $e) {
            return response()->json([
            	'status' => false,
            	'message' => 'Sesuatu error terjadi.'
            ], 500);
        }
    }

    public function user(Request $request)
    {
        $user = User::find(JWTAuth::user()->id);
        return response()->json([
            'status' => true,
            'data' => $user
        ]);
    }

    public function refresh()
    {
        if($token = JWTAuth::refresh(JWTAuth::getToken())) {
            return response()
                ->json(['status' => true], 200)
                ->header('Authorization', $token);
        }

        return response()->json([
        	'status' => false,
        	'message' => 'Suatu error terjadi.',
        ], 401);
    }
}
