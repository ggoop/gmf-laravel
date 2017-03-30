<?php

namespace Ggoop\Gmf\Models;
use Ggoop\Gmf\Traits\HasGuard;
use Ggoop\Gmf\Traits\Snapshotable;
use Illuminate\Database\Eloquent\Model;

class Org extends Model {
	use Snapshotable, HasGuard;
	protected $table = 'gmf_org_orgs';
	public $incrementing = false;
	protected $fillable = ['id', 'code', 'name', 'memo'];
	public function ent() {
		return $this->belongsTo('Ggoop\Gmf\Models\Ent');
	}
}
