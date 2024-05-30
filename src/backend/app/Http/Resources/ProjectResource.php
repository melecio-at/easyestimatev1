<?php

namespace App\Http\Resources;

use DB;
use App\Models\BusinessModel;
use App\Models\FrameworkDevLanguage;
use App\Services\API\ProjectService;
use App\Models\SupportedTestEnvironment;
use App\Models\ProjectAssumeRoleFunction;
// use App\Models\FrameworkDevLanguage;
use App\Models\ProjectRoleFrameworkLanguage;
use Illuminate\Http\Resources\Json\JsonResource;

// use App\Models\ProjectRoleFrameworkLanguage;

class ProjectResource extends JsonResource
{
    // /** @var App\Services\ProjectService */
    // protected $projectService;

    // /**
    //  * ProjectResource constructor.
    //  *
    //  * @param ProjectService $projectService
    //  */
    // public function __construct(ProjectService $projectService)
    // {
    //     $this->projectService = $projectService;
    //     // // Perform any setup here
    //     // parent::__construct($resource);
    // }

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

        $details = $this->getDetail($this);
        $projectCalculation = ProjectService::calculateMD($details);

        return [
            'id' => $this->id,
            'system_name' => $this->system_name,
            'icon' => $this->icon,
            'description' => $this->description,
            'technologies' => is_array($languages) ? implode(", ", $languages) : '',
            'mm' => $projectCalculation['totalMM'],
        ];
    }

    public static function getDetail($project): array
    {
        $frameworkLanguageIDs = ProjectRoleFrameworkLanguage::where('project_id', $project->id)->pluck('framework_language_id');
        $languages = FrameworkDevLanguage::join('development_languages', 'framework_languages.development_language_id', '=', 'development_languages.id')
            ->whereIn('framework_languages.id', $frameworkLanguageIDs)->pluck('name')->toArray();
        $projectBusinessModelIds = $project->businessModels()->pluck('business_model_id');
        $businessModels = implode(', ', BusinessModel::whereIn('id', $projectBusinessModelIds)->pluck('name')->toArray());
        $testEnvironmentIds = $project->browsers()->limit(3)->pluck('support_test_env_id');
        $testEnvironments = SupportedTestEnvironment::whereIn('id', $testEnvironmentIds)->pluck('name')->toArray();
        $developmentTypeId = $project->projectTypes()->first()->project_type_id;
        $projectUsers = $project->projectAssumedRoles()->limit(3)->get();
        $users = [];

        foreach ($projectUsers as $user) {
            $users[$user->id]['userName'] = $user->user_role;
            $frameWorkDevLanguage = ProjectRoleFrameworkLanguage::where('project_id', $project->id)
                ->where('assumed_role_id', $user->id)
                ->first();

            if (null !== $frameWorkDevLanguage) {
                $devLanguage = FrameworkDevLanguage::find($frameWorkDevLanguage->framework_language_id);
                $users[$user->id]['framework'] = $devLanguage->framework_id;
                $users[$user->id]['language'] = $devLanguage->development_language_id;
            }

            $subFunctions = ProjectAssumeRoleFunction::select(
                'project_id',
                'assumed_role_id',
                'group_number',
                'masterlist_function_id',
                'project_assume_role_functions.function_name as functionName',
                'masterlist_functions.function_name as detail_function_name',
                'masterlist_functions.masterlist_function_type_id as functionType',
                DB::raw("1 as numFields")
            )
                ->where('project_id', $project->id)
                ->leftJoin('masterlist_functions', 'project_assume_role_functions.masterlist_function_id', '=', 'masterlist_functions.id')
                ->where('assumed_role_id', $user->id)
                ->get()
                ->toArray();

            // dd($subFunctions);
            $groupNumbers = [];
            foreach ($subFunctions as $subFunction) {
                if (!in_array($subFunction['group_number'], $groupNumbers)) {
                    $mastFunctionTypeIds = ProjectAssumeRoleFunction::where('group_number', $subFunction['group_number'])
                        ->where('project_id', $project->id)
                        ->where('assumed_role_id', $user->id)
                        ->pluck('masterlist_function_id')
                        ->toArray();
                    $subFunction['details'] = $mastFunctionTypeIds;
                    $users[$user->id]['functions'][] = $subFunction;
                }

                $groupNumbers[] = $subFunction['group_number'];
            }
        }

        return [
            'id' => $project->id,
            'system_name' => $project->system_name,
            'business_model' => $businessModels,
            'num_roles' => $project->number_of_users > 3 ? 3 : $project->number_of_users,
            'ui_layout' => (1 === $developmentTypeId) ? (1 === $project->create_design ? 'create_design' : 'ui_layout_provided') : '',
            'spec_doc' => (1 === $developmentTypeId) ? (1 === $project->create_specs_doc ? 'create_spec_doc' : 'design_doc_provided') : '',
            'technologies' => is_array($languages) ? implode(", ", $languages) : '',
            'devices_and_browsers' => $testEnvironments,
            'development_type' => $developmentTypeId,
            'users' =>  $users,
        ];
    }
}
