<?php

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

Route::get('/{page?}', function () {
	return 'gmf';
	//return view('gmf::app');
})->where('page', '^(?!js\/|gapi\/|css\/|dist\/).*$');

/*
->where('page', '^(?!js\/|gapi\/|css\/|dist\/).*$')
 */