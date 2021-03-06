<?php

namespace App\Http\Response;

abstract class ApiResponseAbstractProvider implements ApiResponseContract
{
    /**
     * @return array
     */
    public function getApiInfo()
    {
        return [
            'api' => [
                'version'       => self::API_VERSION,
                'name'          => config('app.name'),
                'docs'          => config('app.url') . '/docs',
                'requested_url' => request()->url(),
            ],
        ];
    }
}