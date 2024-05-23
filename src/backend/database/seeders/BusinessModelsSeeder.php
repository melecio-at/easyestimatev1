<?php

namespace Database\Seeders;

use App\Models\BusinessModel;
use Illuminate\Database\Seeder;

class BusinessModelsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [['name' => 'B2B'], ['name' => 'B2C'], ['name' => 'P2P']];

        BusinessModel::insert($data);
    }
}
