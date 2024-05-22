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
            ['name' => 'PHP - Native', 'is_advanced' => 1],
            ['name' => 'PHP - Laravel', 'is_advanced' => 1],
            ['name' => 'PHP - CodeIgniter', 'is_advanced' => 1],
            ['name' => 'C#', 'is_advanced' => 1],
            ['name' => 'ReactNative', 'is_advanced' => 1],
            ['name' => 'PHP - Other', 'is_advanced' => 0],
            ['name' => 'RoR', 'is_advanced' => 0],
            ['name' => 'Python', 'is_advanced' => 0],
            ['name' => 'C# ASP.NET', 'is_advanced' => 0],
            ['name' => 'NodeJS ExpressJS', 'is_advanced' => 0],
            ['name' => 'iOS Swift', 'is_advanced' => 0],
            ['name' => 'Android Kotlin', 'is_advanced' => 0],
            ['name' => 'Xamarin (CrossPlatform)', 'is_advanced' => 0],
            ['name' => 'Xamarin (Native iOS)', 'is_advanced' => 0],
            ['name' => 'Xamarin (Native Android)', 'is_advanced' => 0],
            ['name' => 'Flutter', 'is_advanced' => 0],
            ['name' => 'Java', 'is_advanced' => 0],
            ['name' => 'HTML / JavaScript / CSS', 'is_advanced' => 0],
            ['name' => 'NodeJS', 'is_advanced' => 0],
            ['name' => 'ExpressJS', 'is_advanced' => 0],
            ['name' => 'typescript / Next JS', 'is_advanced' => 0],
            ['name' => 'Swift', 'is_advanced' => 0],
            ['name' => 'ReactJS', 'is_advanced' => 0],
        ];

        DevelopmentLanguage::insert($data);
    }
}
