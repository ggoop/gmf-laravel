<?php

namespace App\Http\Controllers;
use Gmf\Sys\Builder;
use Illuminate\Http\Request;

class HomeController extends Controller {
	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct() {
		$this->middleware('visitor');
	}
	public function home(Request $request) {
		$config = new Builder;
		return view('gmf::app');
	}
}
