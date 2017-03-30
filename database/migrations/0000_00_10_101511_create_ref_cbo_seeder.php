<?php

use Ggoop\Gmf\Builder;
use Ggoop\Gmf\Models;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class CreateRefCboSeeder extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		$exception = DB::transaction(function () {
			$id = "83f7dac010c511e7baff739d7d7a427c";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.area.ref')->entity('gmf.cbo.area')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});
			$id = "83f7dcb010c511e7a8806b26565c82ef";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.country.ref')->entity('gmf.cbo.country')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "83f7dd4010c511e79a6f9727300bee17";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.currency.ref')->entity('gmf.cbo.currency')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "83f7dda010c511e78a621158d7a3609b";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.division.ref')->entity('gmf.cbo.division')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "83f7de0010c511e7a5d707849e76036d";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.item.ref')->entity('gmf.cbo.item')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "83f7de6010c511e7b7941320171dc191";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.item.category.ref')->entity('gmf.cbo.item.category')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "83f7dea010c511e7b0281528d78d091c";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.lot.ref')->entity('gmf.cbo.lot')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "83f7df0010c511e7841865d7b359cca5";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.mfc.ref')->entity('gmf.cbo.mfc')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "83f7df6010c511e79a94438963cbff7f";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.mfc.category.ref')->entity('gmf.cbo.mfc.category')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "83f7dfc010c511e789d2973826f91ccf";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.period.account.ref')->entity('gmf.cbo.period.account')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "a3596c8010c511e7806a81eb32dceda5";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.period.calendar.ref')->entity('gmf.cbo.period.calendar')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "a3596ea010c511e781ef417dd4dce90b";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.person.ref')->entity('gmf.cbo.person')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "a3596f3010c511e7806ca93c2a3e47d2";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.project.ref')->entity('gmf.cbo.project')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "a3596fa010c511e7977d1d4aa459d412";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.project.category.ref')->entity('gmf.cbo.project.category')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "a359700010c511e78386b9e9e2bfb069";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.trader.ref')->entity('gmf.cbo.trader')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "a359706010c511e7be2e19143af25fa0";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.trader.category.ref')->entity('gmf.cbo.trader.category')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "a35970b010c511e7b24ae7ef3763aa62";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.unit.ref')->entity('gmf.cbo.unit')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "a359711010c511e7b851538b8fcdd5d3";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.wh.ref')->entity('gmf.cbo.wh')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Models\Query::where('code', 'like', 'gmf.cbo.%.ref')->delete();
	}
}
