<?php

namespace App\Http\Controllers;
use Auth;
use Gmf\Sys\Builder;
use Illuminate\Http\Request;

class HomeController extends Controller {
	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct() {
		$this->middleware('auth');
	}

	/**
	 * Show the application dashboard.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index(Request $request) {
		$user = Auth::user();
		$config = $this->getConfig($request, $user);
		$request->session()->put(config('gmf.ent_session_name'), '');
		return view('gmf::app', ['config' => $config]);
	}
	private function getConfig(Request $request, $user) {
		$config = new Builder();
		$config->date(date('Y-m-d'));
		return $config;
	}
	public function home(Request $request) {
		return redirect('app');
	}
}
