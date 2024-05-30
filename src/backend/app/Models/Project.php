<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Project extends Model
{
    /** @var array */
    protected $fillable = [
        'is_template',
        'system_name',
        'description',
        'number_of_users',
        'create_design',
        'create_specs_doc',
        'lead_user_id',
        'business_model_text',
        'icon'
    ];

    public function projectRoleFrameworkLanguages(): HasMany
    {
        return $this->hasMany(ProjectRoleFrameworkLanguage::class);
    }

    public function businessModels()
    {
        return $this->hasMany(ProjectBusinessModel::class);
    }

    public function browsers()
    {
        return $this->hasMany(ProjectSupportedTestEnv::class);
    }

    public function projectTypes()
    {
        return $this->hasMany(ProjectProjectType::class);
    }

    public function projectAssumedRoles()
    {
        return $this->hasMany(ProjectAssumedRole::class);
    }

    /**
     * Get the parent user type
     *
     * @return void
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
