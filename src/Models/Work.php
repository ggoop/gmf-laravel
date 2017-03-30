<?php

namespace Ggoop\Gmf\Models;
use Ggoop\Gmf\Traits\HasGuard;
use Ggoop\Gmf\Traits\Snapshotable;
use Illuminate\Database\Eloquent\Model;

class Work extends Model {
	use Snapshotable, HasGuard;
	protected $table = 'gmf_org_works';
	public $incrementing = false;
	protected $fillable = ['id', 'code', 'name', 'memo', 'org_id', 'dept_id'];

	public function ent() {
		return $this->belongsTo('Ggoop\Gmf\Models\Ent');
	}

	public function org() {
		return $this->belongsTo('Ggoop\Gmf\Models\Org');
	}

	public function dept() {
		return $this->belongsTo('Ggoop\Gmf\Models\Dept');
	}
}
