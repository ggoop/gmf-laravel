<?php

use Ggoop\Gmf\Database\Metadata;
use Illuminate\Database\Migrations\Migration;

class CreateGmfCboPeriodAccountsTable extends Migration {
	private $mdID = "1a944fa010bf11e7bba123b2639a9ea5";
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		$md = Metadata::create($this->mdID);
		$md->mdEntity('gmf.cbo.period.account')->comment('会计期间')->tableName('gmf_cbo_period_accounts');

		$md->string('id', 100)->primary();
		$md->entity('ent', 'gmf.sys.ent')->nullable()->comment('企业');
		$md->entity('calendar', 'gmf.cbo.period.calendar')->nullable()->comment('会计日历');
		$md->string('code')->nullable()->comment('编码');
		$md->string('name')->comment('名称');
		$md->text('memo')->nullable()->comment('备注');
		$md->dateTime('fromDate')->nullable()->comment('开始日期');
		$md->dateTime('endDate')->nullable()->comment('结束日期');
		$md->timestamps();

		$md->foreign('ent_id')->references('id')->on('gmf_sys_ents')->onDelete('cascade');

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
