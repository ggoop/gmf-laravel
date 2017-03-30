<?php

namespace Ggoop\Gmf\Models\Cbo;
use Ggoop\Gmf\Traits\HasGuard;
use Ggoop\Gmf\Traits\Snapshotable;
use Illuminate\Database\Eloquent\Model;

class Mfc extends Model {
	use Snapshotable, HasGuard;
	protected $table = 'gmf_cbo_mfcs';
	public $incrementing = false;
	protected $fillable = ['id', 'code', 'name', 'memo'];
}
