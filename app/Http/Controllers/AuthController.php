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
        $credentials = $request->only('username', 'password');
        $validator = Validator::make($request->all(), [
			'username' => 'required|string',
			'password' => 'required|string|min:8',
        ]);

        if($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->messages()->first()
            ], 400);
        }

        try{
            if(!$token = JWTAuth::attempt($credentials)) {
                return response()->json([
                    'status' => false,
                    'message' => 'Username/Password salah!',
                ], 404);
            }
        }catch (JWTException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Sesuatu error terjadi.'
            ], 500);
        }

        return response()->json([
            'status' => true,
            'message' => 'Berhasil login'
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
