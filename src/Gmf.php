<?php

namespace Ggoop\Gmf;
use Illuminate\Support\Facades\Route;

class Gmf {
	public static $runsMigrations = true;
	/**
	 * Get a Passport route registrar.
	 *
	 * @param  array  $options
	 * @return RouteRegistrar
	 */
	public static function webRoutes($callback = null, array $options = []) {
		$callback = $callback ?: function ($router) {
			$router->all();
		};

		$defaultOptions = [
			'prefix' => 'gapp',
			'middleware' => 'web',
			'namespace' => '\Ggoop\Gmf\Http\Controllers\Web',
		];
		Route::get('/{page?}', function () {
			return view('gmf::app');
		})->where('page', '^(?!js\/|gapi\/|css\/|dist\/).*$');

		$options = array_merge($defaultOptions, $options);

		Route::group($options, function ($router) use ($callback) {
			$callback(new WebRouteRegistrar($router));
		});
	}
	public static function authRoutes($callback = null, array $options = []) {
		$callback = $callback ?: function ($router) {
			$router->all();
		};

		$defaultOptions = [
			'prefix' => 'gauth',
			'middleware' => 'web',
			'namespace' => '\Ggoop\Gmf\Http\Controllers\Auth',
		];

		$options = array_merge($defaultOptions, $options);

		Route::group($options, function ($router) use ($callback) {
			$callback(new AuthRouteRegistrar($router));
		});
	}
	/**
	 * Get a Passport route registrar.
	 *
	 * @param  array  $options
	 * @return RouteRegistrar
	 */
	public static function apiRoutes($callback = null, array $options = []) {
		$callback = $callback ?: function ($router) {
			$router->all();
		};

		$defaultOptions = [
			'prefix' => 'api',
			'middleware' => 'api',
			'namespace' => '\Ggoop\Gmf\Http\Controllers\Api',
		];

		$options = array_merge($defaultOptions, $options);

		Route::group($options, function ($router) use ($callback) {
			$callback(new ApiRouteRegistrar($router));
		});
	}
	/**
	 * Get a Passport route registrar.
	 *
	 * @param  array  $options
	 * @return RouteRegistrar
	 */
	public static function routes() {
		static::webRoutes();
		static::authRoutes();
		static::apiRoutes();
	}
	/**
	 * Configure Passport to not register its migrations.
	 *
	 * @return static
	 */
	public static function ignoreMigrations() {
		static::$runsMigrations = false;
		return new static;
	}
}