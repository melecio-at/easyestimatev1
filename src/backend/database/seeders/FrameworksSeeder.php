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
            ['name' => 'Webアプリ'],
            ['name' => 'モバイルアプリ'],
            ['name' => 'デスクトップ'],
            ['name' => 'ブラウザプラグイン'],
            ['name' => 'SDK'],
            ['name' => 'API'],
            ['name' => 'ミドルウェア'],
            ['name' => 'その他'],
        ];

        Framework::insert($data);
    }
}
