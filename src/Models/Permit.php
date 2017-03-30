<?php

namespace Ggoop\Gmf\Models;
use Ggoop\Gmf\Traits\HasGuard;
use Ggoop\Gmf\Traits\Snapshotable;
use Illuminate\Database\Eloquent\Model;

class Permit extends Model {
	use Snapshotable, HasGuard;
	protected $table = 'gmf_sys_permits';
	public $incrementing = false;
	protected $fillable = ['id', 'code', 'name', 'memo'];
}
