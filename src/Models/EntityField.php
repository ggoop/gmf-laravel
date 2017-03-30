<?php

namespace Ggoop\Gmf\Models;
use Ggoop\Gmf\Traits\HasGuard;
use Ggoop\Gmf\Traits\Snapshotable;
use Illuminate\Database\Eloquent\Model;

class EntityField extends Model {
	use Snapshotable, HasGuard;
	protected $table = 'gmf_sys_entity_fields';
	public $incrementing = false;
	protected $keyType = 'string';
	protected $fillable = ['id', 'name', 'comment', 'entity_id', 'type_id', 'type_type', 'collection', 'sequence', 'dValue'];
	protected $hidden = ['created_at', 'updated_at'];
	public function type() {
		return $this->belongsTo('Ggoop\Gmf\Models\Entity');
	}
	public function entity() {
		return $this->belongsTo('Ggoop\Gmf\Models\Entity');
	}
}
