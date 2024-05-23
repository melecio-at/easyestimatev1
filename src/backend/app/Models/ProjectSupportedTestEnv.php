<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectSupportedTestEnv extends Model
{
    protected $table = 'project_supported_test_envs';

    /** @var array */
    protected $fillable = [
        'project_id',
        'support_test_env_id'
    ];
}
