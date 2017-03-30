<?php

namespace Ggoop\Gmf\Models;
use Ggoop\Gmf\Traits\HasGuard;
use Ggoop\Gmf\Traits\Snapshotable;
use Illuminate\Database\Eloquent\Model;

class Entity extends Model {
	use Snapshotable, HasGuard;
	protected $table = 'gmf_sys_entities';
	public $incrementing = false;
	protected $keyType = 'string';
	protected $fillable = ['id', 'name', 'comment', 'tableName', 'type'];
	protected $hidden = ['created_at', 'updated_at'];
	public function fields() {
		return $this->hasMany('Ggoop\Gmf\Models\EntityField');
	}
}
