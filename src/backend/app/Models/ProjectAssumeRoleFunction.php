<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectAssumeRoleFunction extends Model
{
    protected $table = 'project_assume_role_functions';

    /** @var array */
    protected $fillable = [
        'project_id',
        'assumed_role_id',
        'masterlist_function_id',
        'function_name',
        'other_func_type',
        'other_func_type_desc',
    ];
}
