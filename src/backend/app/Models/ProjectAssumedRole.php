<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectAssumedRole extends Model
{
    protected $table = 'project_assumed_roles';

    /** @var array */
    protected $fillable = [
        'user_role',
        'project_id'
    ];
}
