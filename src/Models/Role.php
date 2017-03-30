<?php

namespace Ggoop\Gmf\Models;
use Ggoop\Gmf\Traits\HasGuard;
use Ggoop\Gmf\Traits\Snapshotable;
use Illuminate\Database\Eloquent\Model;

class Role extends Model {
	use Snapshotable, HasGuard;
	protected $table = 'gmf_sys_roles';
	public $incrementing = false;
	protected $fillable = ['id', 'code', 'name', 'memo'];
}
