<?php

namespace App\Http\Resources;

use App\Models\BusinessModel;
use App\Models\FrameworkDevLanguage;
use App\Models\SupportedTestEnvironment;
use App\Models\ProjectRoleFrameworkLanguage;
use App\Models\ProjectAssumeRoleFunction;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResourceDetail extends JsonResource
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
        $projectBusinessModelIds = $this->businessModels()->pluck('business_model_id');
        $businessModels = implode(', ', BusinessModel::whereIn('id', $projectBusinessModelIds)->pluck('name')->toArray());
        $testEnvironmentIds = $this->browsers()->limit(3)->pluck('support_test_env_id');
        $testEnvironments = SupportedTestEnvironment::whereIn('id', $testEnvironmentIds)->pluck('name')->toArray();
        $developmentTypeId = $this->projectTypes()->first()->project_type_id;
        $projectUsers = $this->projectAssumedRoles()->limit(3)->get();
        $users = [];

        foreach ($projectUsers as $user) {
            $users[$user->id]['userName'] = $user->user_role;
            $frameWorkDevLanguage = ProjectRoleFrameworkLanguage::where('project_id', $this->id)
                ->where('assumed_role_id', $user->id)
                ->first();

            if ($frameWorkDevLanguage !== null) {
                $devLanguage = FrameworkDevLanguage::find($frameWorkDevLanguage->framework_language_id);
                $users[$user->id]['framework'] = $devLanguage->framework_id;
                $users[$user->id]['devLanguage'] = $devLanguage->development_language_id;
            }

            $subFunctions = ProjectAssumeRoleFunction::select(
                'project_id',
                'assumed_role_id',
                'group_number',
                'masterlist_function_id',
                'project_assume_role_functions.function_name',
                'masterlist_functions.function_name as detail_function_name',
                'masterlist_functions.masterlist_function_type_id as function_type_id',
            )
                ->where('project_id', $this->id)
                ->leftJoin('masterlist_functions', 'project_assume_role_functions.masterlist_function_id', '=', 'masterlist_functions.id')
                ->where('assumed_role_id', $user->id)
                ->get()
                ->toArray();

            // dd($subFunctions);

            foreach ($subFunctions as $subFunction) {
                $users[$user->id]['functions'][$subFunction['group_number']][] = $subFunction;
            }

            // dd($functions);
        }

        return [
            'id' => $this->id,
            'system_name' => $this->system_name,
            'business_model' => $businessModels,
            'numRoles' => $this->number_of_users > 3 ? 3 : $this->number_of_users,
            'create_design' => ($developmentTypeId === 1) ? ($this->create_design === 1 ? 'create_design' : 'ui_layout_provided') : '',
            'create_specs_docs' => ($developmentTypeId === 1) ? ($this->create_specs_doc === 1 ? 'create_spec_doc' : 'design_doc_provided') : '',
            'technologies' => is_array($languages) ? implode(", ", $languages) : '',
            'test_environments' => $testEnvironments,
            'development_type_id' => $developmentTypeId,
            // 'users' =>  $users,
        ];
    }
}
