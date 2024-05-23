<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectBusinessModel extends Model
{
    protected $table = 'project_business_models';

    /** @var array */
    protected $fillable = [
        'project_id',
        'business_model_id'
    ];
}
