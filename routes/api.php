<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::prefix('v1')->group(function(){
	Route::prefix('auth')->group(function(){
		Route::post('/register', 'AuthController@register');
		Route::post('/login', 'AuthController@login');
		Route::group(['middleware' => ['jwt.verify']], function() {
		    Route::post('/logout', 'AuthController@logout');
		    Route::get('/refresh', 'AuthController@refresh');
	    	Route::get('/user', 'AuthController@user');

	    	Route::prefix('user')->group(function(){
	    		Route::post('/index', 'UserController@index');
	    		Route::get('/{uuid}/getdata', 'UserController@getData');
	    		Route::post('/create', 'UserController@create');
	    		Route::post('/{uuid}/update', 'UserController@update');
	    		Route::delete('/{uuid}/delete', 'UserController@delete');
	    	});

	    	Route::prefix('category')->group(function(){
	    		Route::post('/index', 'CategoryController@index');
	    		Route::get('/{uuid}/getdata', 'CategoryController@getData');
	    		Route::post('/create', 'CategoryController@create');
	    		Route::post('/{uuid}/update', 'CategoryController@update');
	    		Route::delete('/{uuid}/delete', 'CategoryController@delete');
	    	});

	    	Route::prefix('tool')->group(function(){
	    		Route::post('/index', 'ToolController@index');
	    		Route::get('/{uuid}/getdata', 'ToolController@getData');
	    		Route::post('/create', 'ToolController@create');
	    		Route::post('/{uuid}/update', 'ToolController@update');
	    		Route::delete('/{uuid}/delete', 'ToolController@delete');
	    	});

	    	Route::prefix('skill')->group(function(){
	    		Route::post('/index', 'SkillController@index');
	    		Route::get('/{uuid}/getdata', 'SkillController@getData');
	    		Route::post('/create', 'SkillController@create');
	    		Route::post('/{uuid}/update', 'SkillController@update');
	    		Route::delete('/{uuid}/delete', 'SkillController@delete');
	    	});

	    	Route::prefix('level')->group(function(){
	    		Route::post('/index', 'LevelController@index');
	    		Route::get('/getdatas', 'LevelController@getDatas');
	    		Route::get('/{uuid}/getdata', 'LevelController@getData');
	    		Route::post('/create', 'LevelController@create');
	    		Route::post('/{uuid}/update', 'LevelController@update');
	    		Route::delete('/{uuid}/delete', 'LevelController@delete');
	    	});

	    	Route::prefix('courses')->group(function(){
	    		Route::post('/index', 'CoursesController@index');
	    		Route::get('/getdatas', 'CoursesController@getDatas');
	    		Route::get('/{uuid}/getdata', 'CoursesController@getData');
	    		Route::post('/create', 'CoursesController@create');
	    		Route::post('/{uuid}/update', 'CoursesController@update');
	    		Route::delete('/{uuid}/delete', 'CoursesController@delete');
	    	});
		});
	});
});