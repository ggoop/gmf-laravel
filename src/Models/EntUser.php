<?php

namespace Ggoop\Gmf\Models;
use Ggoop\Gmf\Traits\HasGuard;
use Ggoop\Gmf\Traits\Snapshotable;
use Illuminate\Database\Eloquent\Model;

class EntUser extends Model {
	use Snapshotable, HasGuard;
	protected $table = 'gmf_sys_ent_users';
	public $incrementing = false;
}
