<?php

namespace Ggoop\Gmf\Http\Controllers\Api;
use Ggoop\Gmf\Builder;
use Ggoop\Gmf\Uuid;
use Illuminate\Http\Request;

class DataController extends Controller {
	public function index(Request $request) {
		$d = new Builder(['adfd' => true, 'aaccdd']);
		//var_dump($d);
		$datas = [];
		for ($i = 0; $i < 10; $i++) {
			$datas[] = Uuid::generate(1, 'gmf', Uuid::NS_DNS, "");
		}
		return $this->toJson($datas);
	}
	public function show(Request $request) {
		$datas = Uuid::generate(1, 'gmf', Uuid::NS_DNS, "");
		return $this->toJson($datas);
	}
}
