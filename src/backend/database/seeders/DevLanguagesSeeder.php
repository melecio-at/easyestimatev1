<?php

namespace Database\Seeders;

use App\Models\DevelopmentLanguage;
use Illuminate\Database\Seeder;

class DevLanguagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['name' => 'Swif'],
            ['name' => 'Typescript'],
            ['name' => 'Next JS'],
            ['name' => 'PHP Laravel'],
            ['name' => 'React JS'],
            ['name' => 'React Native'],
            ['name' => 'c#'],
            ['name' => 'asp.net'],
        ];

        DevelopmentLanguage::insert($data);
    }
}
