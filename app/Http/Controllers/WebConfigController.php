<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WebConfig;
use Validator;

class WebConfigController extends Controller
{
    public function getData()
    {
    	$data = WebConfig::find(1);

    	return response()->json([
    		'status' => true,
    		'data' => $data,
    		'message' => 'Data berhasil diambil'
    	]);
    }

    public function update(Request $request, $uuid)
    {
    	$validator = Validator::make($request->all(), [
    		'name' => 'required|string',
    		'description' => 'required|string',
    		'facebook' => 'required|string',
    		'twitter' => 'required|string',
    		'instagram' => 'required|string',
    		'telegram' => 'required|string',
    		'github' => 'required|string',
    		'youtube' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
            	'status' => false,
            	'message' => $validator->messages()->first()
            ], 500);
        }

    	$data = WebConfig::findByUuid($uuid);
    	if(isset($request->ilustration)) {
            $nama_ilustration = 'ilustration_'.time().'.'.$request->ilustration->getClientOriginalExtension();
            $request->ilustration->move(public_path('img/ilustration'), $nama_ilustration);
            if($data->ilustration != '/img/ilustration/default.png'){
                $fwhite = public_path().$data->ilustration;
                if (is_file($fwhite)) {
                    unlink($fwhite);
                }
            }
            $ilustration = '/img/ilustration/'.$nama_ilustration;
        }else{
        	$ilustration = $data->ilustration;
        }

    	$data->update([
    		'name' => $request->name,
    		'description' => $request->description,
    		'ilustration' => $ilustration,
    		'facebook' => $request->facebook,
    		'twitter' => $request->twitter,
    		'instagram' => $request->instagram,
    		'telegram' => $request->telegram,
    		'github' => $request->github,
    		'youtube' => $request->youtube
    	]);

    	return response()->json([
    		'status' => true,
    		'data' => $data,
    		'message' => 'Data berhasil diambil'
    	]);
    }
}
