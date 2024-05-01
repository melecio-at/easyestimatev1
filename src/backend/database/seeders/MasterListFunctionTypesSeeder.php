<?php

namespace Database\Seeders;

use App\Models\MasterListFunctionType;
use Illuminate\Database\Seeder;

class MasterListFunctionTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['name' => 'Login'],
            ['name' => 'Logout'],
            ['name' => 'Forgot Password'],
            ['name' => 'User Registration / Sign-Up'],
            ['name' => 'App Settings: Profile'],
            ['name' => 'App Settings: Change Password'],
            ['name' => 'App Settings: Change Email'],
            ['name' => 'App Settings: Notification'],
            ['name' => 'Generic Function: BE only'],
            ['name' => 'Generic Function: FE only'],
            ['name' => 'Generic Function: FE+BE'],
            ['name' => 'Account Management'],
            ['name' => 'Dashboard'],
            ['name' => 'Page Management'],
            ['name' => 'Import CSV'],
            ['name' => 'Export CSV'],
            ['name' => 'File Attachment'],
            ['name' => 'Content Comments'],
            ['name' => 'Shop Management'],
            ['name' => 'Static Page'],
            ['name' => 'Landing Page'],
            ['name' => 'Messaging'],
            ['name' => 'Localization'],
            ['name' => 'ETL(Extract, Transform, Load)'],
            ['name' => 'Browser Extension'],
            ['name' => 'WebRTC'],
        ];

        MasterListFunctionType::insert($data);
    }
}
