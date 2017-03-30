<?php

namespace Ggoop\Gmf;

use Illuminate\Contracts\Routing\Registrar as Router;

class WebRouteRegistrar {
	/**
	 * The router implementation.
	 *
	 * @var Router
	 */
	protected $router;

	/**
	 * Create a new route registrar instance.
	 *
	 * @param  Router  $router
	 * @return void
	 */
	public function __construct(Router $router) {
		$this->router = $router;
	}

	/**
	 * Register routes for transient tokens, clients, and personal access tokens.
	 *
	 * @return void
	 */
	public function all() {
		//默认应用
		$this->router->get('/{module}', ['uses' => 'AppController@index']);
	}
}
