<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectProjectType extends Model
{
    protected $table = 'project_project_types';

    /** @var array */
    protected $fillable = [
        'project_id',
        'project_type_id'
    ];
}
