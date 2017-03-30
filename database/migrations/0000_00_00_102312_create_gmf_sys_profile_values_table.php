<?php

use Ggoop\Gmf\Database\Metadata;
use Illuminate\Database\Migrations\Migration;

class CreateGmfSysProfileValuesTable extends Migration {
	private $mdID = "61cdc96009cc11e7883c7b4b50dfcfd1";
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		$md = Metadata::create($this->mdID);
		$md->mdEntity('gmf.sys.profile.value')->comment('参数值')->tableName('gmf_sys_profile_values');

		$md->string('id', 100)->primary();
		$md->entity('profile', 'gmf.sys.profile')->comment('参数');
		$md->string('scope_id', 100)->comment('类型ID');
		$md->string('scope_type', 200)->comment('类型全名');
		$md->string('value', 100)->nullable()->comment('默认值');
		$md->timestamps();

		$md->foreign('profile_id')->references('id')->on('gmf_sys_profiles')->onDelete('cascade');

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
