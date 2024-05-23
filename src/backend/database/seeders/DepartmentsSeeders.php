<?php

namespace Database\Seeders;

use App\Models\Department;
use Illuminate\Database\Seeder;

class DepartmentsSeeders extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['name' => '情報システム部門'],
            ['name' => 'マーケティング部門'],
            ['name' => '営業・販売部門'],
            ['name' => '経営企画部門'],
            ['name' => '広報・PR部門'],
            ['name' => '人事部門'],
            ['name' => '総務・法務部門'],
            ['name' => '経理・財務部門'],
        ];

        Department::insert($data);
    }
}
