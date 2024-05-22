<?php

namespace Database\Seeders;

use App\Models\FrameworkDevLanguage;
use Illuminate\Database\Seeder;

class FrameworkDevLanguagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['framework_id' => 1, 'development_language_id' => 1],
            ['framework_id' => 1, 'development_language_id' => 2],
            ['framework_id' => 1, 'development_language_id' => 3],
            ['framework_id' => 1, 'development_language_id' => 6],
            ['framework_id' => 1, 'development_language_id' => 7],
            ['framework_id' => 1, 'development_language_id' => 8],
            ['framework_id' => 1, 'development_language_id' => 9],
            ['framework_id' => 1, 'development_language_id' => 10],
            ['framework_id' => 1, 'development_language_id' => 21],
            ['framework_id' => 1, 'development_language_id' => 23],
            ['framework_id' => 2, 'development_language_id' => 11],
            ['framework_id' => 2, 'development_language_id' => 12],
            ['framework_id' => 2, 'development_language_id' => 5],
            ['framework_id' => 2, 'development_language_id' => 13],
            ['framework_id' => 2, 'development_language_id' => 14],
            ['framework_id' => 2, 'development_language_id' => 15],
            ['framework_id' => 2, 'development_language_id' => 16],
            ['framework_id' => 2, 'development_language_id' => 22],
            ['framework_id' => 3, 'development_language_id' => 17],
            ['framework_id' => 3, 'development_language_id' => 4],
            ['framework_id' => 4, 'development_language_id' => 18],
            ['framework_id' => 5, 'development_language_id' => 17],
            ['framework_id' => 5, 'development_language_id' => 4],
            ['framework_id' => 6, 'development_language_id' => 1],
            ['framework_id' => 6, 'development_language_id' => 2],
            ['framework_id' => 6, 'development_language_id' => 3],
            ['framework_id' => 6, 'development_language_id' => 6],
            ['framework_id' => 6, 'development_language_id' => 7],
            ['framework_id' => 6, 'development_language_id' => 8],
            ['framework_id' => 6, 'development_language_id' => 9],
            ['framework_id' => 6, 'development_language_id' => 19],
            ['framework_id' => 6, 'development_language_id' => 20],
            ['framework_id' => 7, 'development_language_id' => 1],
            ['framework_id' => 7, 'development_language_id' => 2],
            ['framework_id' => 7, 'development_language_id' => 3],
            ['framework_id' => 7, 'development_language_id' => 6],
            ['framework_id' => 7, 'development_language_id' => 7],
            ['framework_id' => 7, 'development_language_id' => 8],
            ['framework_id' => 7, 'development_language_id' => 9],
            ['framework_id' => 7, 'development_language_id' => 10],
            ['framework_id' => 7, 'development_language_id' => 4],
            ['framework_id' => 7, 'development_language_id' => 17],
        ];

        FrameworkDevLanguage::insert($data);
    }
}
