<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    /** @var array */
    protected $fillable = [
        'is_template',
        'system_type',
        'description',
        'number_of_users',
        'create_design',
        'create_specs_doc'
    ];
}
