<?php

namespace Ggoop\Gmf\Http\Controllers\Web;

use Illuminate\Http\Request;

class AppController extends Controller {
	public function index(Request $request, string $module) {
		return view('gmf::app');
	}
}
