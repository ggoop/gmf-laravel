<?php

use Ggoop\Gmf\Database\Metadata;
use Illuminate\Database\Migrations\Migration;

class CreateGmfSysQueryCasesTable extends Migration {
	private $mdID = "61cdcbe009cc11e79ad38540a1ea5455";
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		$md = Metadata::create($this->mdID);
		$md->mdEntity('gmf.sys.query.case')->comment('查询方案')->tableName('gmf_sys_query_cases');

		$md->bigIncrements('id');
		$md->string('name')->comment('名称');
		$md->entity('query', 'gmf.sys.query');
		$md->entity('user', 'gmf.sys.user');
		$md->json('data')->comment('数据');
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
