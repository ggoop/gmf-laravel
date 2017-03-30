<?php

namespace Ggoop\Gmf;

use Illuminate\Support\ServiceProvider;

class GmfServiceProvider extends ServiceProvider {
	/**
	 * Bootstrap the application services.
	 *
	 * @return void
	 */
	public function boot() {
		$this->loadViewsFrom(__DIR__ . '/../resources/views', 'gmf');
		if ($this->app->runningInConsole()) {
			$this->registerMigrations();

			$this->publishes([
				__DIR__ . '/../resources/assets/fonts' => base_path('resources/assets/fonts'),
			], 'gmf');

			$this->publishes([
				__DIR__ . '/../resources/views' => base_path('resources/views/vendor/gmf'),
			], 'gmf');

			$this->publishes([
				__DIR__ . '/../resources/assets/js' => base_path('resources/assets/js/vendor/gmf'),
			], 'gmf');

			$this->publishes([
				__DIR__ . '/../resources/assets/sass' => base_path('resources/assets/sass/vendor/gmf'),
			], 'gmf');

			$this->publishes([
				__DIR__ . '/../resources/assets/img' => base_path('public/img'),
			], 'gmf');

			$this->commands([
				Console\InstallCommand::class,
				Console\ClientCommand::class,
			]);
		}
	}

	/**
	 * Register the application services.
	 *
	 * @return void
	 */
	public function register() {

	}
	/**
	 * Register Passport's migration files.
	 *
	 * @return void
	 */
	protected function registerMigrations() {
		if (Gmf::$runsMigrations) {
			return $this->loadMigrationsFrom(__DIR__ . '/../database/migrations');
		}
		$this->publishes([
			__DIR__ . '/../database/migrations' => database_path('migrations'),
		], 'gmf-migrations');
	}
}
