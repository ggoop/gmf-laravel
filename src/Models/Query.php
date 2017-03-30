<?php
namespace Ggoop\Gmf\Models;
use Closure;
use Ggoop\Gmf\Builder;
use Ggoop\Gmf\Traits\HasGuard;
use Ggoop\Gmf\Traits\Snapshotable;
use Illuminate\Database\Eloquent\Model;

class Query extends Model {
	use Snapshotable, HasGuard;
	protected $table = 'gmf_sys_queries';
	public $incrementing = false;
	protected $keyType = 'string';
	protected $fillable = ['id', 'entity_id', 'code', 'name', 'memo'];
	protected $hidden = ['created_at', 'updated_at'];
	public function fields() {
		return $this->hasMany('Ggoop\Gmf\Models\QueryField');
	}
	public function entity() {
		return $this->belongsTo('Ggoop\Gmf\Models\Entity');
	}
	/**
	 * add new model data
	 *  id(string),entity(string),fields([]),orders([])
	 * @param  Closure $callback [description]
	 * @return [type]            [description]
	 */
	public static function build(Closure $callback) {
		//id,root,parent,code,name,memo,uri,sequence
		tap(new Builder, function ($builder) use ($callback) {
			$callback($builder);
			$entity = false;
			if (!empty($builder->entity_id)) {
				$entity = Entity::where('id', $builder->entity_id)->first();
			} else if (!empty($builder->entity)) {
				$entity = Entity::where('name', $builder->entity)->first();
			}
			if ($entity) {
				$builder->entity_id = $entity->id;
			}
			if (empty($builder->name) && $entity) {
				$builder->name = $entity->comment;
			}
			$data = $builder->toArray();
			static::create($data);
			if (!empty($builder->fields) && is_array($builder->fields)) {
				foreach ($builder->fields as $key => $value) {
					$field = ['query_id' => $builder->id];
					if (is_string($key)) {
						$field['path'] = $key;
						$field['name'] = $value;
					} else {
						$field['path'] = $value;
						$field['name'] = $value;
					}
					QueryField::create($field);
				}
			}
		});
	}
}
