<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AssumedNumberOfField extends Model
{
    protected $table = 'assumed_number_of_fields';

    /** @var array */
    protected $fillable = [
        'name',
    ];
}
