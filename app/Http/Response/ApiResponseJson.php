<?php

namespace App\Http\Response;

class ApiResponseJson extends ApiResponseAbstractProvider
{
    /**
     * @param array $data
     * @param bool  $success
     * @param int   $status
     * @param       $message
     * @param bool  $showApiInfo
     *
     * @return mixed
     */
    public function getResponse(array $data, bool $success = true, $status = 0, $message = null, $showApiInfo = false)
    {
        $response = array_merge(
            ['success' => $success],
            ['status'  => $status],
            $message ? ['message' => $message] : [],
            $data,
            $showApiInfo ? $this->getApiInfo() : []
        );

        return response()->json($response, $status);
    }
}