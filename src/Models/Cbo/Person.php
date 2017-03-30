<?php

namespace Ggoop\Gmf\Models\Cbo;
use Ggoop\Gmf\Traits\HasGuard;
use Ggoop\Gmf\Traits\Snapshotable;
use Illuminate\Database\Eloquent\Model;

class Person extends Model {
	use Snapshotable, HasGuard;
	protected $table = 'gmf_cbo_persons';
	public $incrementing = false;
	protected $fillable = ['id', 'code', 'name', 'memo'];
}
