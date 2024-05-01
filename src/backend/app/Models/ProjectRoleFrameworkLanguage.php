<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectRoleFrameworkLanguage extends Model
{
    protected $table = 'project_role_frameworks_languages';

    /** @var array */
    protected $fillable = [
        'project_id',
        'framework_language_id',
        'assumed_role_id',
    ];
}
