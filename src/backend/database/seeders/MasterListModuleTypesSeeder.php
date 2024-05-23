<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MasterListModuleType;

class MasterListModuleTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['name' => 'Accounts'],
            ['name' => 'Generic Function'],
            ['name' => 'Common'],
            ['name' => 'CMS'],
            ['name' => 'Shop'],
            ['name' => 'Static Pages'],
            ['name' => 'Messaging'],
            ['name' => 'Localization'],
            ['name' => 'Middleware'],
            ['name' => 'Browser Extension'],
            ['name' => 'WebRTC'],
        ];

        MasterListModuleType::insert($data);
    }
}
