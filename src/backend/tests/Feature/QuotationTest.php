<?php

namespace Tests\Feature;

use Carbon\Carbon;
use Tests\TestCase;
// use App\Models\User;
// use App\Models\Company;
// use App\Models\Offering;
// use App\Models\CompanyUser;
// use App\Models\PageSettings;
// use App\Models\CompanyMetric;
use App\Http\Resources\ProjectResourceDetail;
use App\Models\Project;
use Illuminate\Support\Facades\DB;
use App\Services\API\ProjectService;
// use App\Models\OfferingOtherDetail;
// use App\Models\OfferingOtherDetailMap;
// use App\Models\CompanyMetricCollection;

class QuotationTest extends TestCase
{
    /** @var string */
    private static $protocol;

    public function setUp(): void
    {
        parent::setUp();
    }

    public function teardown(): void
    {
        parent::tearDown();
    }

    /**
     * QuotationTest constructor.
     */
    public function __construct($name = 'QuotationTest')
    {
        parent::__construct($name);
        $this->createApplication();
    }



    public function testRetrieveProjectsSuccess()
    {
        // $search = http_build_query([]);
        // $ids = Offering::pluck('id')->take(4)->toArray();
        // $query = [
        //     'offer_ids' => Offering::pluck('id')->take(4)->toArray()
        // ];

        // $response = $this->get('/projects/');
        $response = $this->json('GET', '/v1/projects');

        $response->assertStatus(200);
    }

    public function testFiltersSuccess()
    {
        $response = $this->json('GET', '/v1/projects/filters');

        $response->assertStatus(200);
    }

    public function testGetFiltersFrameworOnlySuccess()
    {
        $query = [
            'framework_only' => true,
        ];
        $response = $this->json('GET', '/v1/projects/filters?' . http_build_query($query));

        $response->assertStatus(200);
    }

    public function testGetProjectSuccess()
    {
        $project = Project::first();
        $response = $this->json('GET', "/v1/projects/{$project->id}");

        $response->assertStatus(200);
    }

    public function testGetProjectFail()
    {
        $nonExistentProjectID = -99;
        $response = $this->json('GET', "/v1/projects/{$nonExistentProjectID}");

        $response->assertStatus(500);
    }

    public function testCalculateMDsSuccess()
    {
        // $project = new ProjectResourceDetail(Project::first());
        $project = [
            'system_name' => 'test',
            'business_model' => 'B2B',
            'development_type' => 1,
            'num_roles' => 1,
            'devices_and_browsers' => ['mobile'],
            'ui_layout' => 'create_design',
            'spec_doc' => 'create_spec_doc',
            'users' => [[
                'userName' => 'Admin',
                'framework' => 1,
                'language' => 1,
                'functions' => [
                    [
                        'functionType' => 1,
                        'functionName' => 'TestFunctionName',
                        'numFields' => 1,
                        'details' => [1, 2, 3]
                    ]
                ],
            ]]
        ];
        $response = $this->json('POST', '/v1/projects/calculate-project-mds?' . http_build_query($project));
        $response->assertStatus(200);
    }

    public function testSaveProjectSuccess()
    {
        $project = [
            'totalMM' => '2MM',
            'formattedTotalAmount' => '1000',
            'systemName' => 'test',
            'businessModel' => 'B2B',
            'developmentTypeId' => 1,
            'developmentType' => 'Zero-Base(From Scratch)',
            'expectedNumUsers' => 1,
            'devicesAndBrowsers' => ['mobile'],
            'uiLayout' => 'create_design',
            'specRequiement' => 'create_spec_doc',
            'users' => [[
                'username' => 'Admin',
                'frameworkId' => 1,
                'framework' => 'laravel',
                'languageId' => 1,
                'language' => 'php',
                'functions' => [
                    [
                        'functionType' => 1,
                        'functionName' => 'TestFunctionName',
                        'numFields' => 1,
                        'subFunctions' => [['id' => 1, 'subFunctionName' => 'test'], ['id' => 2, 'subFunctionName' => 'test'], ['id' => 3, 'subFunctionName' => 'test']]
                    ]
                ],
            ]]
        ];

        $userDetails = [
            'accept_terms' => true,
            'get_intouched' => true,
            'name' => 'testName',
            'email_address' => 'testemail@gmail.com',
            'business_type' => 'individual',
            'company_name' => null,
            'department' => null,
            'position' => null,
            'company_url' => null,
            'phone_number' => null,
            'projectDetail' => $project

        ];
        $response = $this->json('POST', '/v1/projects?' . http_build_query($userDetails));

        $response->assertStatus(200);
    }

    // public function testCompareInvalidSetOfIdsFailed()
    // {
    //     $search = http_build_query([]);
    //     $ids = Offering::pluck('id')->take(1)->toArray();
    //     $query = [
    //         'offer_ids' => Offering::pluck('id')->take(1)->toArray()
    //     ];
    //     $response = $this->withHeader('Referer', self::$protocol . self::$PAGESETTINGS->site_url . '.' . self::$appDomain . '/comparison')
    //         ->json('GET', '/' . config('app.api_version') . '/offerings/comparison?' . http_build_query($query));

    //     $response->assertStatus(422);
    // }

    // public function testCompareInvalidPageSettingsFailed()
    // {
    //     $search = http_build_query([]);
    //     $ids = Offering::pluck('id')->take(1)->toArray();
    //     $query = [
    //         'offer_ids' => Offering::pluck('id')->take(4)->toArray()
    //     ];
    //     $response = $this->json('GET', '/' . config('app.api_version') . '/offerings/comparison?' . http_build_query($query));
    //     $response->assertStatus(500);
    // }
}
