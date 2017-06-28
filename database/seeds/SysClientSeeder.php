<?php

use Gmf\Sys\Builder;
use Gmf\Sys\Models\Ent;
use Gmf\Sys\Models\User;
use Gmf\Sys\Passport\Client;
use Gmf\Sys\Passport\PersonalAccessClient;
use Illuminate\Database\Seeder;

class SysClientSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {

		$b = new Builder;
		$id = config('gmf.oauth_client_id');
		$name = config('gmf.oauth_client_name');
		$secret = config('gmf.oauth_client_secret');
		$userId = config('gmf.oauth_client_user');
		if (!$id) {
			return;
		}
		//用户
		$b = new Builder;
		$b->user_id($userId);
		User::registerByAccount('sys', $b->toArray());

		//客户端
		$b = new Builder;
		$b->name($name)->secret($secret)->user_id($userId);
		$b->personal_access_client(1)->password_client(1)->revoked(0);
		Client::updateOrCreate(['id' => $id], $b->toArray());

		//私有登录
		$b = new Builder;
		PersonalAccessClient::updateOrCreate(['client_id' => $id], $b->toArray());

		//企业
		$b = new Builder;
		$b->name($name)->code($name);
		$ent = Ent::updateOrCreate(['id' => $id], $b->toArray());

		Ent::addUser($ent->id, $userId, 'create');
	}
}
