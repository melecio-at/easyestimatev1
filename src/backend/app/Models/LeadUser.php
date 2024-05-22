<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class LeadUser extends Model
{
    protected $table = 'lead_users';

    /** @var array */
    protected $fillable = [
        'name',
        'email_address',
        'business_type',
        'company_name',
        'department_id',
        'position_id',
        'phone_number',
        'company_url',
        'business_license',
        'get_intouched'
    ];

    public function projects(): HasMany
    {
        return $this->hasMany(Project::class);
    }
}
