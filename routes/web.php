<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::prefix('laporan')->group(function(){
	Route::prefix('struk')->group(function(){
		Route::get('/{uuid}/cetak', 'ExportPdfController@cetakStruk');
	});
});


Route::get('/{any}', function() {
	return view('Index');
})->where('any', '^(?!api\/)[\/\w\.-]*');