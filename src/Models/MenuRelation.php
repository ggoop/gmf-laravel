<?php

namespace Ggoop\Gmf\Models;
use Ggoop\Gmf\Traits\HasGuard;
use Ggoop\Gmf\Traits\Snapshotable;
use Illuminate\Database\Eloquent\Model;

class MenuRelation extends Model {
	use Snapshotable, HasGuard;
	protected $table = 'gmf_sys_menu_relations';
	protected $fillable = ['root_id', 'parent_id', 'menu_id', 'sequence', 'path'];

}
