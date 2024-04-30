<?php

namespace Database\Seeders;

use App\Models\Framework;
use Illuminate\Database\Seeder;

class FrameworksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['name' => 'Web App'],
            ['name' => 'Mobile App'],
            ['name' => 'Desktop'],
            ['name' => 'Browser Plug-in'],
            ['name' => 'SDK'],
            ['name' => 'API'],
            ['name' => 'Middleware'],
        ];

        Framework::insert($data);
    }
}
