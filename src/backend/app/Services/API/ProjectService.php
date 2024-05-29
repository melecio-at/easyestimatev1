<?php

namespace App\Services\API;

use DB;
// use Hash;
use Mail;
use Exception;
// use Carbon\Carbon;
use App\Models\Project;
use App\Models\LeadUser;
use App\Models\Position;
use App\Models\Framework;
use App\Models\Department;
use App\Mail\QuotationMail;
use App\Models\ProjectType;
use App\Models\MasterListFunction;
use App\Models\ProjectAssumedRole;
use App\Models\ProjectProjectType;
use App\Models\DevelopmentLanguage;
use App\Models\AssumedNumberOfField;
use App\Models\FrameworkDevLanguage;
use App\Models\MasterListFunctionType;
use App\Http\Resources\ProjectResource;
// use App\Mail\InviteUser;
// use App\Mail\UserSignUp;
use App\Models\ProjectSupportedTestEnv;
// use App\Models\UserStatus;
// use App\Models\ActivationToken;
// use Illuminate\Http\UploadedFile;
use App\Models\SupportedTestEnvironment;
use App\Models\ProjectAssumeRoleFunction;
use App\Exceptions\ProjectNotFoundException;
use App\Models\ProjectRoleFrameworkLanguage;

// use App\Exceptions\UserNotCreatedException;
// use App\Exceptions\UserStatusNotFoundException;
// use App\Exceptions\ActivationTokenNotFoundException;

class ProjectService
{
    /**
     * @var App\Models\Project
     */
    protected $project;

    /**
     * ProjectService constructor.
     *
     * @param App\Models\Project $project
     */
    public function __construct(Project $project)
    {
        $this->project = $project;
    }

    /**
     * List projects by conditions
     */
    public function search(array $conditions): array
    {
        logger("conditions", $conditions);
        // default to 1 if page not provided
        $page = 1;
        $limit = config('search.results_per_page');

        if (array_key_exists('page', $conditions) === true) {
            $page = $conditions['page'];
        }

        if (array_key_exists('limit', $conditions) === true) {
            $limit = $conditions['limit'];
        }

        $skip = ($page > 1) ? ($page * $limit - $limit) : 0;

        // initialize query
        $query = $this->project->where('is_template', 1);

        // if keyword is provided
        if (array_key_exists('keyword', $conditions) && null !== $conditions['keyword']) {
            $languageIds = DevelopmentLanguage::where('name', 'LIKE', "%{$conditions['keyword']}%")->pluck('id')->toArray();
            $frameworkDevLangIds = FrameworkDevLanguage::whereIn('development_language_id', $languageIds)->pluck('id')->toArray();
            $projectsFrameworkDevLangIds = ProjectRoleFrameworkLanguage::select('project_id')
                ->distinct()
                ->whereIn('framework_language_id', $frameworkDevLangIds)
                ->pluck('project_id')
                ->toArray();

            $query = $query->where(function ($q) use ($conditions, $projectsFrameworkDevLangIds) {
                $q = $q->where('system_name', 'LIKE', "%{$conditions['keyword']}%")
                    ->orWhere('description', 'LIKE', "%{$conditions['keyword']}%")
                    ->orWhereIn('id', $projectsFrameworkDevLangIds);

                return $q;
            });
        }

        // if framework is provided and count is greater than 1
        if (array_key_exists('frameworks', $conditions) && is_array($conditions['frameworks']) && count($conditions['frameworks']) > 0) {
            $frameworkDevLangIds = FrameworkDevLanguage::whereIn('framework_id', $conditions['frameworks'])->pluck('id')->toArray();
            $projectsFrameworkDevLangIds = ProjectRoleFrameworkLanguage::select('project_id')
                ->distinct()
                ->whereIn('framework_language_id', $frameworkDevLangIds)
                ->pluck('project_id')
                ->toArray();
            logger("frameworks", $conditions['frameworks']);
            logger("frameworkDevLangIds", $frameworkDevLangIds);
            logger("projectsFrameworkDevLangIds", $projectsFrameworkDevLangIds);
            $query = $query->whereIn('id', $projectsFrameworkDevLangIds);
        }

        logger("project ids", $query->pluck('id')->toArray());

        // perform project search
        $results = $query->skip($skip)
            ->orderBy($conditions['sort'], $conditions['order'])
            ->paginate($limit);

        $urlParams = ['keyword' => $conditions['keyword'], 'limit' => $limit];

        return paginated($results, ProjectResource::class, $page, $urlParams);
    }

    /**
     * Get project filters
     */
    public function getFilters(array $params): array
    {
        $filters = [];

        if (isset($params['framework_only'])) {
            $projectIds = Project::where('is_template', 1)->pluck('id')->toArray();
            $frameworkLangIds = ProjectRoleFrameworkLanguage::select('framework_language_id')
                ->distinct()
                ->whereIn('project_id', $projectIds)
                ->pluck('framework_language_id')
                ->toArray();
            $frameworkIds = FrameworkDevLanguage::select('framework_id')
                ->distinct()
                ->whereIn('id', $frameworkLangIds)
                ->pluck('framework_id')
                ->toArray();
            $filters['frameworks'] = Framework::selectRaw('id, name as label, id as value')->whereIn('id', $frameworkIds)->get()->toArray();
        } else {
            $filters['frameworks'] = Framework::selectRaw('id, name as label, id as value')->get()->toArray();
            $filters['developmentTypes'] = ProjectType::selectRaw('id, name as label, id as value')->get()->toArray();
            $filters['functionTypes'] = MasterListFunctionType::selectRaw('id, name as label, id as value')->get()->toArray();
            $filters['departments'] = Department::selectRaw('id, name as label, id as value')->get()->toArray();
            $filters['positions'] = Position::selectRaw('id, name as label, id as value')->get()->toArray();
            $filters['assumedNumOfFields'] = AssumedNumberOfField::selectRaw('id, name as label, id as value')->get()->toArray();
            $filters['frameworkLanguages'] = FrameworkDevLanguage::selectRaw('framework_languages.framework_id as framework_id, name as label, development_languages.id as value')
                ->leftJoin('development_languages', 'framework_languages.development_language_id', '=', 'development_languages.id')->get()->toArray();
            $filters['masterListFunctions'] = MasterListFunction::selectRaw('masterlist_function_type_id, id, function_name')->get()->toArray();
        }

        return $filters;
    }

    public function getDeviceAndBrowsers(string $browser): string
    {
        return trim($browser) !== '';
    }

    /**
     * Calculate MD
     */
    public static function calculateMD(array $details): array
    {
        $projectType = ProjectType::find($details['development_type']);
        $userFunctions = [];
        $criteria = [];
        $learningMD = 0;
        $development = 0;
        $designDocTotal = 0;

        foreach ($details['users'] as $index => $user) {
            $framework = Framework::find($user['framework']);
            $devLang = DevelopmentLanguage::find($user['language']);

            $userFunctions[$index]['username'] = $user['userName'];
            $userFunctions[$index]['frameworkId'] = $user['framework'];
            $userFunctions[$index]['framework'] = null !== $framework ? $framework->name : '';
            $userFunctions[$index]['languageId'] = $user['language'];
            $userFunctions[$index]['language'] = null !== $devLang ? $devLang->name : '';

            $advanceTechnologies = DevelopmentLanguage::where('is_advanced', 1)->pluck('id')->toArray();
            if (!in_array($user['language'], $advanceTechnologies)) {
                $learningMD += 1;
            }

            $functions = [];
            foreach ($user['functions'] as $key => $function) {
                $functionType = MasterListFunctionType::find($function['functionType']);
                $numField = AssumedNumberOfField::find($function['numFields']);
                // $subFunctionsIds = array_keys($function['details'], true);
                $subFunctionsIds = $function['details'];
                // dd($subFunctionsIds);
                $subFunctions = MasterListFunction::selectRaw('*, function_name as subFunctionName')->whereIn('id', $subFunctionsIds)->get()->toArray();
                // dd($subFunctions);
                $functions[$key]['functionName'] = $function['functionName'];
                $functions[$key]['functionTypeId'] = $function['functionType'];
                $functions[$key]['functionType'] = null !== $functionType ? $functionType->name : '';
                $functions[$key]['numFieldsId'] = $function['numFields'];
                $functions[$key]['numFields'] = null !== $numField ? $numField->name : '';
                $functions[$key]['subFunctions'] = $subFunctions;

                foreach ($subFunctions as $subFunction) {
                    $ui = 0;
                    $specDoc = 0;

                    if ('create_design' === $details['ui_layout']) {
                        $ui = $subFunction['uiux_md'];
                    }

                    if ('create_spec_doc' === $details['spec_doc']) {
                        $specDoc = $subFunction['design_creation_md'];
                    }
                    $ui_spec = ($ui + $specDoc) * $subFunction['screen_count'];
                    $designDocTotal += $ui_spec;

                    $functiondevelopment = $subFunction['development_md'] * $function['numFields'];
                    logger("dev_md (" . $subFunction['development_md'] . "), numFields(" . $function['numFields'] . ") => $functiondevelopment");
                    $development += $functiondevelopment;
                }
            }

            $userFunctions[$index]['functions'] = $functions;
        }

        $projectDetails = [
            'systemName' => $details['system_name'],
            'businessModel' => $details['business_model'],
            'developmentType' => null !== $projectType ? $projectType->name : '',
            'developmentTypeId' => $details['development_type'],
            'uiLayout' => isset($details['ui_layout']) ? ('create_design' === $details['ui_layout'] ? 'デザイン作成を依頼する' : 'UIレイアウト/モックアップを貴社でご用意いただく') : '',
            'specRequiement' => isset($details['spec_doc']) ? ('create_spec_doc' === $details['spec_doc'] ? '仕様書の作成を依頼する' : '設計書を貴社でご用意いただく') : '',
            'expectedNumUsers' => $details['num_roles'],
            'devicesAndBrowsers' => array_filter($details['devices_and_browsers'], function ($item) {
                return trim($item) !== '';
            }),
            'users' => $userFunctions
        ];

        $uiSpec = [];
        if ('' !== $projectDetails['uiLayout']) {
            $uiSpec[] = $projectDetails['uiLayout'];
        }

        if ('' !== $projectDetails['specRequiement']) {
            $uiSpec[] = $projectDetails['specRequiement'];
        }

        $projectDetails['uiSpec'] = count($uiSpec) > 0 ? implode(', ', $uiSpec) : '';
        $criteria['learningMDFamiliarization'] = (null !== $projectType && (2 === $projectType->id || 3 === $projectType->id)) ? 1 : 0;
        $criteria['designDocTotal'] = $designDocTotal;
        $criteria['developmentBeforeLearningMdNoResource'] = $development;
        $criteria['learningMD'] = $learningMD;
        $criteria['learningMDNoResrc'] = $learningMD;
        $criteria['development'] = $development + $criteria['learningMDNoResrc'];
        $criteria['qaTesting'] = ($criteria['development'] * (config('calculation.qa_testing_percentage') / 100)) * count($projectDetails['devicesAndBrowsers']);
        $criteria['designDevQASubTotal'] = $criteria['designDocTotal'] + $criteria['development'] + $criteria['qaTesting'];
        $criteria['projectManagement'] = $criteria['designDevQASubTotal'] * (config('calculation.project_mngt_percentage') / 100);
        $criteria['businessCommunicator'] = $criteria['designDevQASubTotal'] * (config('calculation.business_communicator_percentage') / 100);
        $criteria['subTotalMD'] = $criteria['designDevQASubTotal'] + $criteria['projectManagement'] + $criteria['businessCommunicator'];
        $criteria['totalMD'] = $criteria['subTotalMD'];
        $criteria['totalBuffer'] = ($criteria['totalMD'] * (config('calculation.total_buffer_percentage') / 100));
        $criteria['subTotalMMBeforeBuffer'] = $criteria['totalMD'] / config('calculation.number_of_mds_per_month');
        $criteria['subTotalMM'] = $criteria['subTotalMMBeforeBuffer'] + $criteria['totalBuffer'];
        $criteria['totalMM'] = ceil($criteria['subTotalMM'] * 2) / 2; //round up to nearest .5
        $criteria['totalMMFormatted'] = number_format((float)$criteria['totalMM'], 2, '.', '');
        $projectDetails['criteria'] = $criteria;
        $projectDetails['totalMM'] = $criteria['totalMM'];
        $projectDetails['totalAmount'] = config('calculation.total_yen_conversion_per_mm') * $criteria['totalMM'];
        $projectDetails['termsLink'] = env('REACT_APP_TERMS_LINK', 'https://sprobe.com');

        return $projectDetails;
    }

    /**
     * Save Project
     *
     *
     * @param array $details
     * @return array project
     */
    public function saveProject(array $details): Project
    {
        DB::beginTransaction();

        try {
            $leadUser = LeadUser::create([
                'name' => $details['name'],
                'email_address' => $details['email_address'],
                'business_type' => $details['business_type'],
                'company_name' => $details['company_name'],
                'department_id' => (isset($details['department']) && 0 !== $details['department']) ? $details['department'] : null,
                'position_id' => (isset($details['position']) && 0 !== $details['position']) ? $details['position'] : null,
                'company_url' => $details['company_url'],
                'business_license' => $details['business_license'],
                'get_intouched' => $details['get_intouched'] ? 1 : 0,
                'phone_number' => $details['phone_number'],
            ]);

            $projectDetails = $details['projectDetail'];

            $project = Project::create([
                'system_name' => $projectDetails['systemName'],
                'is_template' => 0,
                'number_of_users' => $projectDetails['expectedNumUsers'],
                'create_design' => (null === $projectDetails['uiLayout'] || '' === $projectDetails['uiLayout']) ? null : (('create_design' === $projectDetails['uiLayout']) ? 1 : 0),
                'create_specs_doc' => (null === $projectDetails['specRequiement'] || '' === $projectDetails['specRequiement']) ? null : (('create_spec_doc' === $projectDetails['specRequiement']) ? 1 : 0),
                'lead_user_id' => $leadUser->id,
                'business_model_text' => $projectDetails['businessModel'],
            ]);

            foreach ($details['projectDetail']['devicesAndBrowsers'] as $browser) {
                $environment = SupportedTestEnvironment::create(['name' => $browser]);
                ProjectSupportedTestEnv::create([
                    'project_id' => $project->id,
                    'support_test_env_id' => $environment->id,
                ]);
            }

            ProjectProjectType::create([
                'project_id' => $project->id,
                'project_type_id' => $projectDetails['developmentTypeId'],
            ]);

            foreach ($projectDetails['users'] as $user) {
                $userRole = ProjectAssumedRole::create([
                    'project_id' => $project->id,
                    'user_role' => $user['username'],
                ]);


                $frameworkLang = FrameworkDevLanguage::where('framework_id', $user['frameworkId'])
                    ->where('development_language_id', $user['languageId'])->first();
                // dd('projectId 1 = ' . $project->id);
                // dd('frameworkLang = ' . $frameworkLang->id);
                // dd("userRole =" . $userRole->id);
                ProjectRoleFrameworkLanguage::create([
                    'project_id' => $project->id,
                    'assumed_role_id' => $userRole->id,
                    'framework_language_id' => $frameworkLang->id,
                ]);

                $functions = $user['functions'];
                foreach ($functions as $functionKey => $function) {
                    foreach ($function['subFunctions'] as $subFunction) {
                        ProjectAssumeRoleFunction::create([
                            'project_id' => $project->id,
                            'assumed_role_id' => $userRole->id,
                            'group_number' => $functionKey + 1,
                            'masterlist_function_id' => $subFunction['id'],
                            'function_name' => $function['functionName'],
                        ]);
                    }
                }
            }

            // send email
            Mail::send(new QuotationMail($details));

            DB::commit();
        } catch (Exception $e) { // @codeCoverageIgnoreStart
            DB::rollback();

            throw $e;
        } // @codeCoverageIgnoreEnd

        return $project;
    }

    public function findById(int $id): Project
    {
        // retrieve the project
        $project = $this->project->where('id', $id)->where('is_template', 1)->first();

        if (!($project instanceof Project)) {
            throw new ProjectNotFoundException();
        }

        return $project;
    }
}
