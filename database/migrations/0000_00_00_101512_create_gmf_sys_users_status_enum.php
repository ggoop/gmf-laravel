<?php

use Ggoop\Gmf\Database\Metadata;
use Illuminate\Database\Migrations\Migration;

class CreateGmfSysUsersStatusEnum extends Migration {
	private $mdID = "7008122009cd11e7a7fc810e66b5fb3c";
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		$md = Metadata::create($this->mdID);
		$md->mdEnum('gmf.sys.user.statusEnum')->comment('用户状态');
		$md->string('normal')->comment('正常')->default(0);
		$md->string('locked')->comment('锁定')->default(1);
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
