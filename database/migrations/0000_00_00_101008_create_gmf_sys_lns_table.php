<?php

use Ggoop\Gmf\Database\Metadata;
use Illuminate\Database\Migrations\Migration;

class CreateGmfSysLnsTable extends Migration {
	private $mdID = "8118fdb00a9d11e7959eebbed0dc7db2";
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		$md = Metadata::create($this->mdID);
		$md->mdEntity('gmf.sys.lns')->comment('许可')->tableName('gmf_sys_lns');

		$md->string('id')->primary();
		$md->string('owner_id', 100)->comment('拥有者ID');
		$md->string('owner_type')->comment('拥有者类型');
		$md->string('serialNumber')->nullable()->comment('序列号');
		$md->string('requestCode')->nullable()->comment('申请码');
		$md->string('answerCode')->nullable()->comment('答应码');
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
