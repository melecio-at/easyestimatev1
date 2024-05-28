<?php

use Illuminate\Pagination\LengthAwarePaginator;

/*
 * Custom Paginate helper. Meta will adjust the
 * paginated urls based on the params provided
 * during search.
 */

if (!function_exists('paginated')) {
    /**
     * @param LengthAwarePaginator $results
     * @param mixed $resource
     * @param int $page
     * @param array $params
     */
    function paginated($results, $resource, $page = 1, $params = [])
    {
        if (!($results instanceof LengthAwarePaginator)) {
            throw new Exception('Parameter results must be from an eloquent paginate query.');
        }

        // set the custom url params
        $urlParams = http_build_query($params);

        $firstPageUrl = $results->url(1) . '&' . $urlParams;
        $nextPageUrl = ($results->nextPageUrl()) ? $results->nextPageUrl() . '&' . $urlParams : null;
        $previousPageUrl = ($results->previousPageUrl()) ? $results->previousPageUrl() . '&' . $urlParams : null;

        return [
            'data' => $resource::collection($results),
            'meta' => [
                'total' => $results->total(),
                'currentPage' => $page,
                'lastPage' => $results->lastPage(),
                'perPage' => $results->perPage(),
                'firstPageUrl' => $firstPageUrl,
                'previousPageUrl' => $previousPageUrl,
                'nextPageUrl' => $nextPageUrl,
                'url' => $results->url($page) . '&' . $urlParams,
            ],
        ];
    }
}

/*
 * Gets the first letters of each word to generate
 * initials that can be used in thumbnails and etc.
 */
if (!function_exists('get_initials')) {
    /**
     * @param string $content
     * @return string $initials
     */
    function get_initials(string $content): string
    {
        $initials = '';

        foreach (explode(' ', $content) as $word) {
            $initials .= $word[0];
        }

        return strtoupper($initials);
    }
}

/**
 * Build Custom To Email
 *
 * @param nullable|string $name
 * @return string
 */
if (!function_exists('customMailTo')) {
    function customMailTo($name): string
    {
        $mailToCharLimit = (int) env('MAIL_TO_CHAR_LIMIT', 29);
        $ellipsisLength = 3;

        $rawToString = sprintf('%s', $name);

        if (mb_strlen($rawToString) >= $mailToCharLimit) {
            $rawToString = mb_substr($rawToString, 0, $mailToCharLimit - $ellipsisLength) . '...';
        }

        return $rawToString;
    }
}
