<?php

namespace Database\Seeders;

use App\Models\ProjectType;
use Illuminate\Database\Seeder;

class ProjectTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['name' => 'Zero-Base(From Scratch)'],
            ['name' => 'Refurbishment'],
            ['name' => 'Maintenance'],
            ['name' => 'Data Entry'],
            ['name' => 'QA Testing'],
            ['name' => 'Others (please specify)'],
        ];

        ProjectType::insert($data);
    }
}
