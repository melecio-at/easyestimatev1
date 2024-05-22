<?php

namespace App\Http\Resources;

use App\Models\FrameworkDevLanguage;
use App\Models\ProjectRoleFrameworkLanguage;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function toArray($request): array
    {
        $frameworkLanguageIDs = ProjectRoleFrameworkLanguage::where('project_id', $this->id)->pluck('framework_language_id');
        $languages = FrameworkDevLanguage::join('development_languages', 'framework_languages.development_language_id', '=', 'development_languages.id')
            ->whereIn('framework_languages.id', $frameworkLanguageIDs)->pluck('name')->toArray();

        return [
            'id' => $this->id,
            'system_name' => $this->system_name,
            'description' => $this->description,
            'technologies' => is_array($languages) ? implode(", ", $languages) : '',
        ];
    }
}
