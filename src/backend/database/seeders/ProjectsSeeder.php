<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'cols' => [
                    'system_type' => '',
                    'description' => '',
                    'number_of_users' => '',
                    'create_design' => '',
                    'create_specs_doc' => '',
                ],
                'roles' => [
                    'name' => '',
                    'framework_languages' => [
                        'framework_language_id' => '',
                    ],
                    'functions' => [
                        'masterlist_function_id' => '',
                        'function_name' => '',
                    ],
                ],
                'project_business_models' => [''],
                'project_project_types' => [''],
                'supported_test_envs' => ['', '', ''],
                'project_supported_test_envs' => ['', '', ''],
            ],
        ];

        Project::insert($data);
    }
}
