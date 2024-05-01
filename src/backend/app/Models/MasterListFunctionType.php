<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MasterListFunctionType extends Model
{
    protected $table = 'masterlist_function_types';

    /** @var array */
    protected $fillable = [
        'name',
    ];
}
