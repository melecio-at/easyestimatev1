<?php

namespace Database\Seeders;

use App\Models\AssumedNumberOfField;
use Illuminate\Database\Seeder;

class AssumedNumberOfFieldsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['name' => 'Less than 10 Fields'],
            ['name' => '10 >= 20 Fields'],
            ['name' => 'More than 20, Less than 50'],
        ];

        AssumedNumberOfField::insert($data);
    }
}
