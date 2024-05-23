<?php

namespace App\Http\Requests\API\Projects;

use Illuminate\Foundation\Http\FormRequest;

class SearchProjectRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'keyword' => 'nullable',
            'frameworks' => ['nullable', 'array',],
            'frameworks.*' => ['exists:frameworks,id'],
            'page' => ['nullable', 'numeric'],
            'limit' => ['nullable', 'numeric'],
            'order' => 'nullable|in:asc,desc',
            'sort' => 'nullable|in:system_name'
        ];
    }

    public function getKeyword(): ?string
    {
        return $this->input('keyword', '');
    }

    public function getPage(): int
    {
        return (int) $this->input('page', 1); // page default to 1.
    }

    public function getLimit(): int
    {
        return (int) $this->input('limit', config('search.results_per_page')); // set via config
    }

    public function getOrder(): string
    {
        return $this->input('order', 'asc');
    }

    public function getSort(): string
    {
        return $this->input('sort', 'id');
    }

    public function getFrameworks(): ?array
    {
        return $this->input('frameworks', []);
    }
}
