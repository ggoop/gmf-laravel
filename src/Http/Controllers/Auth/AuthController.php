<?php

namespace Ggoop\Gmf\Http\Controllers\Auth;

use Illuminate\Http\Request;

class AuthController extends Controller {
	public function index(Request $request, string $module) {
		return view('gmf::auth');
	}
}
