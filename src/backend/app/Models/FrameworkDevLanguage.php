<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FrameworkDevLanguage extends Model
{
    protected $table = 'framework_languages';

    /** @var array */
    protected $fillable = [
        'framework_id',
        'development_language_id',
    ];
}
