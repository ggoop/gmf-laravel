<?php

namespace Ggoop\Gmf;

use Illuminate\Contracts\Routing\Registrar as Router;

class ApiRouteRegistrar {
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
		$this->router->group(['prefix' => 'sys', 'middleware' => ['api']], function ($router) {

			$router->resource('datas', 'DataController', ['only' => ['index', 'show']]);

			$router->get('/enums/{enum}', ['uses' => 'EntityController@getEnum']);
			$router->resource('entities', 'EntityController', ['only' => ['index', 'show']]);

			$router->get('/queries/query/{query}', ['uses' => 'QueryController@queryData']);
			$router->resource('queries', 'QueryController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);

			$router->get('/menus/all', ['uses' => 'MenuController@all']);
			$router->resource('menus', 'MenuController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);

			$router->resource('languages', 'LanguageController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);
			$router->resource('profiles', 'ProfileController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);
		});

		$this->router->group(['prefix' => 'org', 'middleware' => ['api']], function ($router) {

			$router->resource('orgs', 'OrgOrgController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);
			$router->resource('depts', 'OrgDeptController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);
			$router->resource('works', 'OrgWorkController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);
			$router->resource('teams', 'OrgTeamController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);
		});

		$this->router->group(['prefix' => 'cbo', 'middleware' => ['api']], function ($router) {

			$router->resource('areas', 'Cbo\AreaController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);
			$router->resource('countries', 'Cbo\CountryController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);
			$router->resource('currencies', 'Cbo\CurrencyController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);
			$router->resource('divisions', 'Cbo\DivisionController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);
			$router->resource('item-categories', 'Cbo\ItemCategoryController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);
			$router->resource('items', 'Cbo\ItemController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);
			$router->resource('lots', 'Cbo\LotController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);
			$router->resource('mfc-categories', 'Cbo\MfcCategoryController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);
			$router->resource('mfcs', 'Cbo\MfcController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);
			$router->resource('period-accounts', 'Cbo\PeriodAccountController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);
			$router->resource('period-calendars', 'Cbo\PeriodCalendarController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);

			$router->resource('persons', 'Cbo\PersonController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);
			$router->resource('project-categories', 'Cbo\ProjectCategoryController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);
			$router->resource('projects', 'Cbo\ProjectController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);

			$router->resource('trader-categories', 'Cbo\TraderCategoryController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);
			$router->resource('traders', 'Cbo\TraderController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);

			$router->resource('units', 'Cbo\UnitController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);
			$router->resource('whs', 'Cbo\WhController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);

		});
	}
}
