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
	Route::prefix('courses')->group(function(){
		Route::post('/getdata', 'CoursesController@getDataUser');
		Route::get('/{uuid}/getdata', 'CoursesController@getDataCourses');

		Route::prefix('learn')->group(function(){
			Route::get('/{uuid}/getDatas', 'CoursesToolController@getDatas');
		});
	});

	Route::prefix('webconfig')->group(function(){
		Route::get('/getdata', 'WebConfigController@getData');
	});

	Route::prefix('auth')->group(function(){
		Route::post('/register', 'AuthController@register');
		Route::post('/login', 'AuthController@login');
		Route::group(['middleware' => ['jwt.verify']], function() {
		    Route::post('/logout', 'AuthController@logout');
		    Route::get('/refresh', 'AuthController@refresh');
	    	Route::get('/user', 'AuthController@user');

			Route::group(['middleware' => ['user']], function() {
				Route::prefix('profile')->group(function(){
		    		Route::get('/getdata', 'ProfileController@getData');
		    		Route::post('/create', 'ProfileController@create');
		    		Route::post('/{uuid}/update', 'ProfileController@update');
		    		Route::post('/{uuid}/verifed', 'ProfileController@verifed');
		    	});

		    	Route::prefix('payment')->group(function(){
		    		Route::get('/getdatas', 'PayMethodController@getDatas');
		    		Route::get('/{courses}/cek', 'PaymentController@cekOrder');
		    		Route::post('/order', 'PaymentController@createOrder');
		    		Route::post('/{uuid}/method', 'PaymentController@changeMethod');
		    		Route::post('/{uuid}/bukti', 'PaymentController@buktiOrder');
		    	});

		    	Route::prefix('pekerjaan')->group(function(){
		    		Route::get('/getdatas', 'PekerjaanController@getDatas');
		    	});

				Route::prefix('courses')->group(function(){
					Route::get('/{uuid}/auth', 'CoursesController@getDataCoursesAuth');
					
			    	Route::prefix('my')->group(function(){
		    			Route::get('/getcourses', 'UserCoursesController@getDataCoursesAll');
			    		Route::post('/{uuid}/getplayer', 'UserCoursesController@getDataCoursesPlayer');
		    		});

		    		Route::prefix('review')->group(function(){
		    			Route::post('/create', 'CoursesReviewController@create');
		    		});
			    });
			});

			Route::group(['middleware' => ['admin']], function() {
				Route::prefix('payment')->group(function(){
					Route::post('/{uuid}/status', 'UserCoursesController@changeStatus');
		    	});

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
		    		Route::get('/getdatas', 'ToolController@getDatas');
		    		Route::post('/create', 'ToolController@create');
		    		Route::post('/{uuid}/update', 'ToolController@update');
		    		Route::delete('/{uuid}/delete', 'ToolController@delete');
		    	});

		    	Route::prefix('skill')->group(function(){
		    		Route::post('/index', 'SkillController@index');
		    		Route::get('/getdatas', 'SkillController@getDatas');
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

		    	Route::prefix('pekerjaan')->group(function(){
		    		Route::post('/index', 'PekerjaanController@index');
		    		Route::get('/{uuid}/getdata', 'PekerjaanController@getData');
		    		Route::post('/create', 'PekerjaanController@create');
		    		Route::post('/{uuid}/update', 'PekerjaanController@update');
		    		Route::delete('/{uuid}/delete', 'PekerjaanController@delete');
		    	});

		    	Route::prefix('payment')->group(function(){
		    		Route::post('/index', 'PayMethodController@index');
		    		Route::get('/{uuid}/getdata', 'PayMethodController@getData');
		    		Route::post('/create', 'PayMethodController@create');
		    		Route::post('/{uuid}/update', 'PayMethodController@update');
		    		Route::post('/{uuid}/change', 'PayMethodController@change');
		    		Route::delete('/{uuid}/delete', 'PayMethodController@delete');
		    	});

		    	Route::prefix('usercourses')->group(function(){
		    		Route::post('/index', 'UserCoursesController@index');
		    		Route::get('/getdatas', 'UserCoursesController@getDatas');
		    		Route::get('/{uuid}/getdata', 'UserCoursesController@getData');
		    		Route::post('/create', 'UserCoursesController@create');
		    		Route::post('/{uuid}/update', 'UserCoursesController@update');
		    		Route::post('/{uuid}/change', 'UserCoursesController@change');
		    		Route::delete('/{uuid}/delete', 'UserCoursesController@delete');
		    	});

		    	Route::prefix('courses')->group(function(){
		    		Route::post('/index', 'CoursesController@index');
		    		Route::get('/getdatas', 'CoursesController@getDatas');
		    		Route::get('/{uuid}/getdata', 'CoursesController@getData');
		    		Route::post('/create', 'CoursesController@create');
		    		Route::post('/{uuid}/update', 'CoursesController@update');
		    		Route::delete('/{uuid}/delete', 'CoursesController@delete');

		    		Route::prefix('tool')->group(function(){
		    			Route::get('/{uuid}/gettool', 'CoursesToolController@getDataTool');
			    		Route::get('/{uuid}/getdata', 'CoursesToolController@getData');
			    		Route::post('/create', 'CoursesToolController@create');
			    		Route::delete('/{uuid}/delete', 'CoursesToolController@delete');
			    	});

			    	Route::prefix('learn')->group(function(){
		    			Route::post('/{uuid}/index', 'CoursesLearnController@index');
			    		Route::get('/{uuid}/getdata', 'CoursesLearnController@getData');
			    		Route::post('/create', 'CoursesLearnController@create');
			    		Route::post('/{uuid}/update', 'CoursesLearnController@update');
			    		Route::delete('/{uuid}/delete', 'CoursesLearnController@delete');
			    	});

			    	Route::prefix('review')->group(function(){
			    		Route::post('/{uuid}/getdata', 'CoursesReviewController@getReview');
			    		Route::delete('/{uuid}/delete', 'CoursesReviewController@delete');
			    	});
		    	});

		    	Route::prefix('materigroup')->group(function(){
		    		Route::post('/{uuid}/index', 'MateriGroupController@index');
		    		Route::get('/getdatas', 'MateriGroupController@getDatas');
		    		Route::get('/{uuid}/getdata', 'MateriGroupController@getData');
		    		Route::post('/create', 'MateriGroupController@create');
		    		Route::post('/{uuid}/update', 'MateriGroupController@update');
		    		Route::delete('/{uuid}/delete', 'MateriGroupController@delete');
		    	});

		    	Route::prefix('materi')->group(function(){
		    		Route::post('/{uuid}/index', 'MateriController@index');
		    		Route::get('/getdatas', 'MateriController@getDatas');
		    		Route::get('/{uuid}/getdata', 'MateriController@getData');
		    		Route::post('/create', 'MateriController@create');
		    		Route::post('/{uuid}/update', 'MateriController@update');
		    		Route::post('/{uuid}/status', 'MateriController@changeStatus');
		    		Route::delete('/{uuid}/delete', 'MateriController@delete');
		    	});

		    	Route::prefix('webconfig')->group(function(){
		    		Route::get('/getdata', 'WebConfigController@getData');
		    		Route::post('/{uuid}/update', 'WebConfigController@update');
		    	});
			});
		});
	});
});