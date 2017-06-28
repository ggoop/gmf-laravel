<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {
	protected $seeders = [
		'SysUserSeeder',
		'SysClientSeeder',
	];

	public function run() {
		foreach ($this->seeders as $seedClass) {
			$this->call($seedClass);
		}
	}
}
