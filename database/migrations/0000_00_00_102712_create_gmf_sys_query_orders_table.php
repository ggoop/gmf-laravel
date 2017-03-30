<?php

use Ggoop\Gmf\Database\Metadata;
use Illuminate\Database\Migrations\Migration;

class CreateGmfSysQueryOrdersTable extends Migration {
	private $mdID = "b06aaae00a6511e78303b13e3a4e9988";
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		$md = Metadata::create($this->mdID);
		$md->mdEntity('gmf.sys.query.order')->comment('查询字段')->tableName('gmf_sys_query_orders');

		$md->bigIncrements('id');
		$md->entity('query', 'gmf.sys.query')->comment('查询');
		$md->string('path')->nullable()->comment('字段');
		$md->string('name')->nullable()->comment('名称');
		$md->boolean('isDesc')->default(0)->comment('降序');
		$md->integer('sequence')->default(0)->comment('顺序');
		$md->timestamps();

		$md->foreign('query_id')->references('id')->on('gmf_sys_queries')->onDelete('cascade');
		$md->build();

	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Metadata::dropIfExists($this->mdID);
	}
}
