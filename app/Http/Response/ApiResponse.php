<?php

namespace App\Http\Response;

/**
 * Class ApiResponse
 *
 * @package App\Http\Response
 */
class ApiResponse implements ApiResponseContract
{
    protected $provider;
    protected $data;

    protected $providerMapper = [
        'json' => ApiResponseJson::class,
    ];

    public function __construct(string $provider)
    {
        $this->provider = app($this->providerMapper[$provider]);
    }

    protected function getProvider(): ApiResponseContract
    {
        return $this->provider;
    }

    /**
     * @param array $data
     * @param bool  $success
     * @param int   $status
     * @param       $message
     * @param bool  $showApiInfo
     *
     * @return mixed
     */
    public function getResponse(array $data, bool $success = true, $status = 0, $message = null, $showApiInfo = true)
    {
        return $this->getProvider()->getResponse($data, $success, $status, $message, $showApiInfo);
    }

}