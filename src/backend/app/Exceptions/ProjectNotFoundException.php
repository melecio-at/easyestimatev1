<?php

namespace App\Exceptions;

use Exception;

class ProjectNotFoundException extends Exception
{
    /** @var string */
    public $errorType = 'project_not_found';

    /**
     * ProjectNotFoundException constructor.
     * @param string $message
     */
    public function __construct()
    {
        $message = __('exception.project_not_found');
        parent::__construct($message);
    }
}
