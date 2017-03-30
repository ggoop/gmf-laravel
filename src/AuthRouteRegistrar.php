<?php

namespace Ggoop\Gmf;

use Illuminate\Contracts\Routing\Registrar as Router;

class AuthRouteRegistrar {
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
		$this->router->get('/{module}', [
			'uses' => 'AuthController@index',
		]);
	}
}
