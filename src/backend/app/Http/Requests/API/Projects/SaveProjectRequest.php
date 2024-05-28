<?php

namespace App\Http\Requests\API\Projects;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Rules\AuthEmail;
use App\Rules\CheckDepartment;
use App\Rules\CheckPosition;
use App\Rules\ValidURLFormat;
use App\Rules\ValidCellPhoneFormat;

class SaveProjectRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'accept_terms' => ['required', Rule::in([true])],
            'get_intouched' => ['required', Rule::in([true])],
            'name' => 'required|string|min:1|max:100',
            'email_address' => 'required|string|email:rfc,dns',
            'business_license' => 'required_if:business_type,==,company',
            'company_name' => 'nullable|string|min:3|max:100',
            'business_type' => ['required', 'string', Rule::in(['company', 'individual'])],
            'department' => ['nullable', new CheckDepartment],
            'position' => ['nullable', new CheckPosition],
            'company_url' => ['nullable', 'string', 'min:3', 'max:200'],
            'phone_number' => ['nullable', 'string', 'min:3', 'max:20'],
            // 'company_url' => ['nullable', 'string', new ValidURLFormat],
            // 'phone_number' => ['nullable', 'string', new ValidCellPhoneFormat]
        ];
    }
}
