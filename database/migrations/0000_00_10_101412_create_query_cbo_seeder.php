<?php

use Ggoop\Gmf\Builder;
use Ggoop\Gmf\Models;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class CreateQueryCboSeeder extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		$exception = DB::transaction(function () {
			$id = "49ed162010c411e7aab067b14b675389";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.area.list')->entity('gmf.cbo.area')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});
			$id = "49ed18b010c411e7802ad5c33a0e07ec";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.country.list')->entity('gmf.cbo.country')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "49ed198010c411e7aa78379df58b2a94";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.currency.list')->entity('gmf.cbo.currency')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "49ed1a1010c411e7a427658291639a26";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.division.list')->entity('gmf.cbo.division')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "49ed1a9010c411e786b2094bba03baef";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.item.list')->entity('gmf.cbo.item')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "49ed1b2010c411e7a45ae91875996f88";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.item.category.list')->entity('gmf.cbo.item.category')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "49ed1ba010c411e792d5d340836a0ef3";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.lot.list')->entity('gmf.cbo.lot')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "49ed1c1010c411e789b0276b81a5ee05";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.mfc.list')->entity('gmf.cbo.mfc')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "49ed1c9010c411e79723a9015d76d46a";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.mfc.category.list')->entity('gmf.cbo.mfc.category')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "49ed1d1010c411e7ad0fa5ef48262bdb";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.period.account.list')->entity('gmf.cbo.period.account')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "e5eb155010c411e78f31139c8eec59e9";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.period.calendar.list')->entity('gmf.cbo.period.calendar')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "e5eb17f010c411e788b469f07ebcd3da";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.person.list')->entity('gmf.cbo.person')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "e5eb185010c411e7a75a6113dbb6761b";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.project.list')->entity('gmf.cbo.project')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "e5eb1ae010c411e7adc4b375ce650618";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.project.category.list')->entity('gmf.cbo.project.category')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "e5eb1b5010c411e7bc2ce10b121394e3";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.trader.list')->entity('gmf.cbo.trader')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "e5eb1bb010c411e7bec1ddfe005e056a";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.trader.category.list')->entity('gmf.cbo.trader.category')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "e5eb1c0010c411e7960a0d21a655b54a";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.unit.list')->entity('gmf.cbo.unit')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "e5eb1cc010c411e7b6044f8e5c07aaba";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('gmf.cbo.wh.list')->entity('gmf.cbo.wh')
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
		Models\Query::where('code', 'like', 'gmf.cbo.%.list')->delete();
	}
}
