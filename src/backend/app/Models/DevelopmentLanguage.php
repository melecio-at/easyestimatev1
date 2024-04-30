<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DevelopmentLanguage extends Model
{
    protected $table = 'development_languages';

    /** @var array */
    protected $fillable = [
        'name',
    ];
}
