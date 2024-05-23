<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SupportedTestEnvironment extends Model
{
    protected $table = 'supported_test_envs';

    /** @var array */
    protected $fillable = [
        'name',
    ];
}
