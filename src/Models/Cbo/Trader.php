<?php

namespace Ggoop\Gmf\Models\Cbo;
use Ggoop\Gmf\Traits\HasGuard;
use Ggoop\Gmf\Traits\Snapshotable;
use Illuminate\Database\Eloquent\Model;

class Trader extends Model {
	use Snapshotable, HasGuard;
	protected $table = 'gmf_cbo_traders';
	public $incrementing = false;
	protected $fillable = ['id', 'code', 'name', 'memo'];
}
