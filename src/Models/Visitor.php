<?php

namespace Ggoop\Gmf\Models;
use Ggoop\Gmf\Traits\HasGuard;
use Illuminate\Database\Eloquent\Model;

class Visitor extends Model {
	use HasGuard;
	protected $table = 'gmf_sys_visitors';
	public $timestamps = false;
	public $dates = ['created_at'];

	protected $fillable = ['created_at', 'ip', 'path', 'url', 'method', 'params', 'agent', 'referer', 'times', 'actimes'];
}
