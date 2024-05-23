<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProjectRoleFrameworkLanguage extends Model
{
    protected $table = 'project_role_frameworks_languages';

    /** @var array */
    protected $fillable = [
        'project_id',
        'framework_language_id',
        'assumed_role_id',
    ];

    public function project()
    {
        return $this->belongsTo(Project::class, 'project_id');
    }

    public function frameworkDevLanguage(): BelongsTo
    {
        return $this->belongsTo(FrameworkDevLanguage::class, 'framework_language_id');
    }
}
