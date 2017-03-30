<?php

namespace Ggoop\Gmf\Models\Cbo;
use Ggoop\Gmf\Traits\HasGuard;
use Ggoop\Gmf\Traits\Snapshotable;
use Illuminate\Database\Eloquent\Model;

class PeriodAccount extends Model {
	use Snapshotable, HasGuard;
	protected $table = 'gmf_cbo_period_accounts';
	public $incrementing = false;
	protected $fillable = ['id', 'code', 'name', 'memo'];
}
