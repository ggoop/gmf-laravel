<?php

namespace Ggoop\Gmf\Models\Cbo;
use Ggoop\Gmf\Traits\HasGuard;
use Ggoop\Gmf\Traits\Snapshotable;
use Illuminate\Database\Eloquent\Model;

class Area extends Model {
	use Snapshotable, HasGuard;
	protected $table = 'gmf_cbo_areas';
	public $incrementing = false;
	protected $fillable = ['id', 'code', 'name', 'memo'];
}
