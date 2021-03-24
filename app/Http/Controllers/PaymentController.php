<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserCourses;
use Validator, JWTAuth;

class PaymentController extends Controller
{
    public function callback()
	{
		$data = json_decode(file_get_contents("php://input"), TRUE);

		// Paid
		if($data['transaction_status'] == 'settlement'){
			$status = 'settlement';
		}else if($data['transaction_status'] == 'pending'){
			$status = 'pending';
		}else if($data['transaction_status'] == 'cancel'){
			$status = 'cancel';
		}else if($data['transaction_status'] == 'refund'){
			$status = 'refund';
		}else if($data['transaction_status'] == 'expire'){
			$status = 'expire';
		}

		return response()->json($data);
	}

	public function createOrder(Request $request, $type)
	{
		$endpoin = '/charge';
		if($type == 'ewallet'){
			$validator = Validator::make($request->all(), [
	            'payment_type' => 'required|string',
	        ]);

	        if ($validator->fails()) {
	            return response()->json([
	            	'status' => false,
	            	'message' => $validator->messages()->first()
	            ], 500);
	        }

	        $payment = UserCourses::create([
	            'courses_id' => $request->courses_id,
	            'user_id' => JWTAuth::user()->id,
	            'method_id' => $request->method_id,
	            'discount' => $request->discount,
	            'total' => $this->grossAmount($request->item_details),
	        ]);

			$data = $this->request($endpoin, [
				'payment_type' => $request->payment_type,
				'transaction_details' => [
					'order_id' => $payment->uuid,
					'gross_amount' => $this->grossAmount($request->item_details),
				],
				'item_details' => $request->item_details,
				'qris' => [
				    'acquirer' => 'gopay',
				],
				'gopay' => [
				    'enable_callback' => true,
				    'callback_url' => 'someapps://callback',
				],
				'shopeepay' => [
				    'callback_url' => 'https://midtrans.com/',
				]
			]);
		}else if($type == 'banktransfer'){
			$validator = Validator::make($request->all(), [
	            'bank' => 'required|string',
	        ]);

	        if ($validator->fails()) {
	            return response()->json([
	            	'status' => false,
	            	'message' => $validator->messages()->first()
	            ], 500);
	        }

			$bank = ['permata', 'bni', 'bri', 'bca', 'echannel'];
	        if(!in_array($request->bank, $bank)){
	        	return response()->json([
	        		'status' => false,
	        		'message' => 'Payment type tidak tersedia',
	        	], 404);
	        }

			$data = $this->request($endpoin, [
				'payment_type' => (($request->bank!='echannel')?'bank_transfer':'echannel'),
				'bank_transfer' => [
				    'bank' => $request->bank,
				],
				'transaction_details' => [
					'order_id' => $payment->uuid,
					'gross_amount' => $this->grossAmount($request->item_details),
				],
				'item_details' => $request->item_details,

				// echannel only
				'echannel' => [
				    'bill_info1' => 'Payment For:',
				    'bill_info2' => 'Tuition fee',
				]
			]);
		}else if($type == 'internetbanking'){
			$validator = Validator::make($request->all(), [
				'payment_type' => 'required|string',
	            'user_id' => (($request->payment_type!='bca_klikbca')?'nullable':'required|string'),
	            'description' => 'required|string',
	        ]);

	        if ($validator->fails()) {
	            return response()->json([
	            	'status' => false,
	            	'message' => $validator->messages()->first()
	            ], 500);
	        }

	        $paymentType = ['bca_klikpay', 'bca_klikbca', 'bri_epay', 'cimb_clicks', 'danamon_online'];
	        if(!in_array($request->payment_type, $paymentType)){
	        	return response()->json([
	        		'status' => false,
	        		'message' => 'Payment type tidak tersedia',
	        	], 404);
	        }

			$data = $this->request($endpoin, [
				'payment_type' => $request->payment_type,
				'transaction_details' => [
					'order_id' => $payment->uuid,
					'gross_amount' => $this->grossAmount($request->item_details),
				],
				'item_details' => $request->item_details,
				'bca_klikpay' => [
				    'description' => $request->description
				],
				'bca_klikbca' => [
				   'user_id' => $request->user_id,
				   'description' => $request->description,
				],
				'cimb_clicks' => [
				    'description' => $request->description,
				],
			]);
		}else if($type == 'creditcard'){
			$validator = Validator::make($request->all(), [
				'token_id' => 'required|string',
	        ]);

	        if ($validator->fails()) {
	            return response()->json([
	            	'status' => false,
	            	'message' => $validator->messages()->first()
	            ], 500);
	        }

			$data = $this->request($endpoin, [
				'payment_type' => 'credit_card',
				'transaction_details' => [
					'order_id' => $payment->uuid,
					'gross_amount' => $this->grossAmount($request->item_details),
				],
				'item_details' => $request->item_details,
				'credit_card' => [
				    'token_id' => $request->token_id,
				],
			]);
		}else if($type == 'cardless'){
				$data = $this->request($endpoin, [
				'payment_type' => 'akulaku',
				'transaction_details' => [
					'order_id' => $payment->uuid,
					'gross_amount' => $this->grossAmount($request->item_details),
				],
				'item_details' => $request->item_details,
			]);
		}else{
			return response()->json([
				'status' => false,
				'message' => 'Type pembayaran tidak ditemukan.',
			], 404);
		}

		return response()->json([
			'status' => true,
			'message' => 'Pembayaran berhasil dibuat.',
		]);
	}

	public function grossAmount($item)
	{
		$sumData = 0;
		if(is_array($item)){
			foreach ($item as $key => $value) {
				$validator = Validator::make($value, [
		            'price' => 'required|integer',
		            'quantity' => 'required|integer',
		            'name' => 'required|string',
		        ]);

		        if ($validator->fails()) {
		            return response()->json([
		            	'status' => false,
		            	'message' => $validator->messages()->first()
		            ], 500);
		        }

				$sumData = $sumData+($value['price']*$value['quantity']);
			}
			return $sumData;
		}else{
			return response()->json([
				'status' => false,
				'message' => 'Item detail must be array',
			], 404);
		}
	}

	public function request($endpoin, $data)
	{
		$url = 'https://api.sandbox.midtrans.com/v2'.$endpoin;
		$serverKey = 'SB-Mid-server-DwbERZubhTpDlvwKyKzJAXq0';
		$options = array(
			'Content-Type: application/json',
			'Accept: application/json',
			'Authorization: Basic '.base64_encode($serverKey.':'),
			'X-Append-Notification: https://cc57bc33a41f.ngrok.io/api/v1/payment/callback',
		);

		$curl = curl_init();
		curl_setopt($curl, CURLOPT_URL, $url);
		curl_setopt($curl, CURLOPT_HTTPHEADER, $options);
		curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
		$result = curl_exec($curl);
		curl_close($curl);
	}
}
