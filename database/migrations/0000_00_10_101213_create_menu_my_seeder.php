<?php

use Ggoop\Gmf\Builder;
use Ggoop\Gmf\Models\Menu;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class CreateMenuMySeeder extends Migration {
	private $sequence = '70';
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		$exception = DB::transaction(function () {
			$id = "0c8c3a800a0611e7aa73e1286611a8c9";
			Menu::build(function (Builder $builder) use ($id) {
				$builder->id($id)->root_id($id)->code('my')->name('我的')
					->uri('my')->sequence($this->sequence . '0000');
			});
			$id = "0c8c3df00a0611e7ad60cf7a6157cafc";
			Menu::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('my.message')->name('个人消息')->parent('my')
					->uri('my.message')->sequence($this->sequence . '0100');
			});
			$id = "0c8c3f100a0611e798d41fe72238494a";
			Menu::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('my.infor')->name('系统消息')->parent('my')
					->uri('my.infor')->sequence($this->sequence . '0200');
			});
			$id = "0c8c3f800a0611e7a67eaf61406e106d";
			Menu::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('my.note')->name('公告')->parent('my')
					->uri('my.note')->sequence($this->sequence . '0300');
			});
			$id = "0c8c3ff00a0611e7bf8647aa3e02ce89";
			Menu::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('my.mail')->name('留言信息')->parent('my')
					->uri('my.mail')->sequence($this->sequence . '0400');
			});
			$id = "0c8c40500a0611e78dd099945ad9ec53";
			Menu::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('my.favot')->name('我的收藏')->parent('my')
					->uri('my.favot')->sequence($this->sequence . '0500');
			});
			$id = "0c8c40c00a0611e7b4d97beadce2e45f";
			Menu::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('my.subscribe')->name('我的订阅')->parent('my')
					->uri('my.subscribe')->sequence($this->sequence . '0600');
			});
			$id = "0c8c41100a0611e7a61cdd42d053b994";
			Menu::build(function (Builder $builder) use ($id) {
				$builder->id($id)->code('my.profile')->name('个人资料')->parent('my')
					->uri('my.profile')->sequence($this->sequence . '0700');
			});
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Menu::where('code', 'like', 'my%')->delete();
	}
}
