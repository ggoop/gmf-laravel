<?php

namespace Ggoop\Gmf\Traits;
use Ggoop\Gmf\Events\ModelObserver;

trait HasGuard {
	protected static function bootHasGuard() {
		static::observe(ModelObserver::class);
	}
}
