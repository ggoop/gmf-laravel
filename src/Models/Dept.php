<?php

namespace Ggoop\Gmf\Models;
use Ggoop\Gmf\Traits\HasGuard;
use Ggoop\Gmf\Traits\Snapshotable;
use Illuminate\Database\Eloquent\Model;

class Dept extends Model {
	use Snapshotable, HasGuard;
	protected $table = 'gmf_org_depts';
	public $incrementing = false;
	protected $keyType = 'string';
	protected $fillable = ['id', 'code', 'name', 'memo', 'ent_id', 'org_id'];

	public function ent() {
		return $this->belongsTo('Ggoop\Gmf\Models\Ent');
	}
	public function org() {
		return $this->belongsTo('Ggoop\Gmf\Models\Org');
	}
}
