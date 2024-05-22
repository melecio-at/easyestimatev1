<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MasterListFunction extends Model
{
    protected $table = 'masterlist_functions';

    /** @var array */
    protected $fillable = [
        'masterlist_module_type_id',
        'masterlist_function_type_id',
        'function_name',
        'ox',
        'screen_count',
        'acceptance_criteria',
        'uiux_md',
        'design_creation_md',
        'development_md',
        'qa_testing_md',
        'qa_testing_responsive_md',
        'translation_md',
    ];
}
