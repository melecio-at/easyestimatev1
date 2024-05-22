<?php

namespace Database\Seeders;

use App\Models\Position;
use Illuminate\Database\Seeder;

class PositionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['name' => '経営者'],
            ['name' => '役員（取締役）'],
            ['name' => '事業部長・工場長クラス'],
            ['name' => '部長・課長クラス'],
            ['name' => '係長・主任クラス'],
            ['name' => '一般社員・職員'],
            ['name' => '契約・派遣・委託'],
        ];

        Position::insert($data);
    }
}
