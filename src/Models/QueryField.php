<?php
namespace Ggoop\Gmf\Models;
use Ggoop\Gmf\Traits\HasGuard;
use Ggoop\Gmf\Traits\Snapshotable;
use Illuminate\Database\Eloquent\Model;

class QueryField extends Model {
	use Snapshotable, HasGuard;
	protected $table = 'gmf_sys_query_fields';
	protected $fillable = ['query_id', 'path', 'name', 'sequence'];
	protected $hidden = ['created_at', 'updated_at'];
}
