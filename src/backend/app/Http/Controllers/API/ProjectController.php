<?php

namespace App\Http\Controllers\API;

use Exception;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\API\ProjectService;
use App\Http\Resources\ProjectResourceDetail;
// use App\Http\Resources\NewUserResource;
// use App\Http\Requests\API\Users\BulkDeleteRequest;
// use App\Http\Requests\API\Users\CreateUserRequest;
use App\Http\Requests\API\Projects\SearchProjectRequest;

// use App\Http\Requests\API\Users\UpdateUserRequest;
// use App\Http\Requests\API\Users\RegisterUserRequest;
// use App\Http\Requests\API\Users\ActivateAccountRequest;

/**
 * @group User Management
 */
class ProjectController extends Controller
{
    /** @var App\Services\API\ProjectService */
    protected $projectService;

    /**
     * UserController constructor.
     *
     * @param App\Services\API\ProjectService $projectService
     */
    public function __construct(ProjectService $projectService)
    {
        parent::__construct();

        $this->projectService = $projectService;
    }

    /**
     * Project Search
     *
     * Retrieves the List of Projects from Database
     *
     *
     * @param App\Http\Requests\SearchProjectRequest $request
     * @return \Illuminate\Http\Response
     */
    public function index(SearchProjectRequest $request)
    {
        $request->validated();

        try {
            $conditions = [
                'keyword' => $request->getKeyword(),
                'frameworks' => $request->getFrameworks(),
                'page' => $request->getPage(),
                'limit' => $request->getLimit(),
                'order' => $request->getOrder(),
                'sort' => $request->getSort(),
            ];

            $results = $this->projectService->search($conditions);
            $this->response = array_merge($results, $this->response);
        } catch (Exception $e) { // @codeCoverageIgnoreStart
            $this->response = [
                'error' => $e->getMessage(),
                'code' => 500,
            ];
        } // @codeCoverageIgnoreEnd

        return response()->json($this->response, $this->response['code']);
    }

    /**
     * Project Filters
     *
     * Retrieves the List of Projects Filters from Database
     *
     *
     * @return \Illuminate\Http\Response
     */
    public function getFilters(Request $request)
    {
        try {
            $results = $this->projectService->getFilters($request->all());
            $this->response = array_merge($results, $this->response);
        } catch (Exception $e) { // @codeCoverageIgnoreStart
            $this->response = [
                'error' => $e->getMessage(),
                'code' => 500,
            ];
        } // @codeCoverageIgnoreEnd

        return response()->json($this->response, $this->response['code']);
    }

    /**
     * Validate Project Creation and calculate MDs
     *
     *
     * @authenticated
     * @param App\Http\Requests\Request $request
     * @return \Illuminate\Http\Response
     */
    public function calculateMD(Request $request)
    {
        // $request->validated();
        try {
            $projectDetails = $this->projectService->calculateMD($request->all());
            $this->response['data'] = $projectDetails;
        } catch (Exception $e) { // @codeCoverageIgnoreStart
            $this->response = [
                'error' => $e->getMessage(),
                'code' => 500,
            ];
        } // @codeCoverageIgnoreEnd

        return response()->json($this->response, $this->response['code']);
    }

    /**
     * Save Project
     *
     *
     * @param App\Http\Requests\Request $request
     * @return \Illuminate\Http\Response
     */
    public function saveProject(Request $request)
    {
        // $request->validated();
        try {
            $projectDetails = $this->projectService->saveProject($request->all());
            $this->response['data'] = $projectDetails;
        } catch (Exception $e) { // @codeCoverageIgnoreStart
            $this->response = [
                'error' => $e->getMessage(),
                'code' => 500,
            ];
        } // @codeCoverageIgnoreEnd

        return response()->json($this->response, $this->response['code']);
    }

    /**
     * Get User
     *
     * Retrieves user information using user id.
     *
     * @authenticated
     * @param string $id
     * @return \Illuminate\Http\Response
     */
    public function read($id)
    {
        try {
            $project = $this->projectService->findById((int) $id);
            $this->response['data'] = new ProjectResourceDetail($project);
        } catch (Exception $e) {
            $this->response = [
                'error' => $e->getMessage(),
                'code' => 500,
            ];
        }

        return response()->json($this->response, $this->response['code']);
    }
}
