<?php

namespace Ggoop\Gmf\Models;
use Ggoop\Gmf\Traits\HasGuard;
use Illuminate\Database\Eloquent\Model;

class DbHis extends Model {
	use HasGuard;
	protected $table = 'gmf_sys_dbhis';
}
