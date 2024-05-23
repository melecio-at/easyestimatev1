<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MasterListModuleType extends Model
{
    protected $table = 'masterlist_module_types';

    /** @var array */
    protected $fillable = [
        'name',
    ];
}
