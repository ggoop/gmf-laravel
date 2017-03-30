<?php
namespace Ggoop\Gmf\Models;
use Ggoop\Gmf\Traits\HasGuard;
use Ggoop\Gmf\Traits\Snapshotable;
use Illuminate\Database\Eloquent\Model;

class QueryCase extends Model {
	use Snapshotable, HasGuard;
	protected $table = 'gmf_sys_query_cases';
}
