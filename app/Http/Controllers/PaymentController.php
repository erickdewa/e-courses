<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Courses;
use App\Models\UserCourses;
use Validator, JWTAuth;

class PaymentController extends Controller
{
	public function cekOrder($courses)
	{
		$courses = Courses::findByUuid($courses);
		$data = UserCourses::with('courses', 'method', 'user')
		->where('courses_id', $courses->id)
		->where('status', 'pending')
		->where('user_id', JWTAuth::user()->id)->first();

		if(!isset($data)){
			return response()->json([
				'status' => false,
				'message' => 'Order tidak ditemukan.',
			]);
		}

		return response()->json([
			'status' => true,
			'data' => $data,
			'message' => 'Order telah tersedia.',
		]);
	}

	public function createOrder(Request $request)
	{
		$validator = Validator::make($request->all(), [
            'courses_id' => 'required|integer',
			'method_id' => 'required|integer',
			'discount' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
            	'status' => false,
            	'message' => $validator->messages()->first()
            ], 500);
        }

		$courses = Courses::find($request->courses_id);
		$data = UserCourses::create([
            'courses_id' => $request->courses_id,
            'user_id' => JWTAuth::user()->id,
            'method_id' => $request->method_id,
            'discount' => $request->discount,
            'status' => 'pending',
            'total' => $courses->price,
        ]);

        $data = UserCourses::with('courses', 'method', 'user')
        ->where('uuid', $data->uuid)->first();

		return response()->json([
			'status' => true,
			'data' => $data,
			'message' => 'Pembayaran berhasil dibuat.',
		]);
	}

	public function changeMethod(Request $request, $uuid)
	{
		$validator = Validator::make($request->all(), [
			'method_id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json([
            	'status' => false,
            	'message' => $validator->messages()->first()
            ], 500);
        }

		$data = UserCourses::findByUuid($uuid);
		$data->update([
            'method_id' => $request->method_id,
        ]);

        $data = UserCourses::with('courses', 'method', 'user')
        ->where('uuid', $data->uuid)->first();

		return response()->json([
			'status' => true,
			'data' => $data,
			'message' => 'Metode pembayaran berhasil diubah.',
		]);
	}

	public function buktiOrder(Request $request, $uuid)
	{	
		$validator = Validator::make($request->all(), [
            'bukti' => 'required|image',
			'note' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
            	'status' => false,
            	'message' => $validator->messages()->first()
            ], 500);
        }

		$data = UserCourses::findByUuid($uuid);
		if(isset($data)){
			if(isset($request->bukti)) {
	            $nama_bukti = 'bukti_'.time().'.'.$request->bukti->getClientOriginalExtension();
	            $request->bukti->move(public_path('img/bukti'), $nama_bukti);
	            $bukti = '/img/bukti/'.$nama_bukti;
	        }else{
	            $bukti = '/img/bukti/default.png';
	        }

			$data->update([
				'bukti' => $bukti,
				'note' => $request->note,
				'status' => 'procces'
			]);
		}else{
			return response()->json([
				'status' => false,
				'message' => 'Order tidak ditemukan.',
			], 404);
		}

		return response()->json([
			'status' => true,
			'message' => 'Pembayaran berhasil upload.',
		]);
	}
}
