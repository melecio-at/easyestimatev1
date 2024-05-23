<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(RolesPermissionsTableSeeder::class);
        $this->call(UserStatusesTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(FrameworksSeeder::class);
        $this->call(BusinessModelsSeeder::class);
        $this->call(ProjectTypesSeeder::class);
        $this->call(DevLanguagesSeeder::class);
        $this->call(FrameworkDevLanguagesTableSeeder::class);
        $this->call(MasterListModuleTypesSeeder::class);
        $this->call(MasterListFunctionTypesSeeder::class);
        $this->call(MasterListFunctionsSeeder::class);
        $this->call(DepartmentsSeeders::class);
        $this->call(PositionsSeeder::class);
        $this->call(AssumedNumberOfFieldsSeeder::class);
        $this->call(ProjectsSeeder::class);
    }
}
