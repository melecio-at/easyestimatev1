<?php

namespace App\Http\Requests\API\Projects;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

// use App\Rules\AuthEmail;
// use App\Rules\CheckDepartment;
// use App\Rules\CheckPosition;
// use App\Rules\ValidURLFormat;
// use App\Rules\ValidCellPhoneFormat;

class CalculateMDRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'system_name' => 'required|string|min:1|max:100',
            'business_model' => 'required|string|min:1|max:100',
            'development_type' => ['required', 'exists:project_types,id'],
            'num_roles' => ['required', Rule::in([1, 2, 3])],
            'devices_and_browsers' => ['required', 'array'],
            // 'devices_and_browsers.*' => ['sometimes', 'string'],
            // 'devices_and_browsers.0' => ['required', 'min:1', 'max:100'],
            'users' => ['required', 'array'],
            'users.*.userName' => ['required', 'string'],
            'users.*.framework' => ['required', 'exists:frameworks,id'],
            'users.*.language' => ['required', 'exists:development_languages,id'],
            'users.*.functions' => ['required', 'array'],
            'users.*.functions.*.functionType' => ['required', 'exists:masterlist_function_types,id'],
            'users.*.functions.*.functionName' => ['required', 'string'],
            'users.*.functions.*.numFields' => ['required', 'exists:assumed_number_of_fields,id'],
            'users.*.functions.*.details' => ['required', 'array'],
            'users.*.functions.*.details.*' => ['exists:masterlist_functions,id'],
            // 'get_intouched' => ['required', Rule::in([true])],
            // 'name' => 'required|string|min:1|max:100',
            // 'email_address' => 'required|string|email:rfc,dns',
            // 'business_license' => 'required_if:business_type,==,company',
            // 'company_name' => 'nullable|string|max:100',
            // 'business_type' => ['required', 'string', Rule::in(['company', 'individual'])],
            // 'department' => ['nullable', new CheckDepartment],
            // 'position' => ['nullable', new CheckPosition],
            // 'company_url' => ['nullable', 'string', new ValidURLFormat],
            // 'phone_number' => ['nullable', 'string', new ValidCellPhoneFormat]
        ];
    }
}
