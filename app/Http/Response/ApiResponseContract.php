<?php

namespace App\Http\Response;

interface ApiResponseContract
{
    const API_VERSION = 'v1';

    /**
     * @param array $data
     * @param bool  $success
     * @param int   $status
     * @param       $message
     * @param bool  $showApiInfo
     *
     * @return mixed
     */
    public function getResponse(array $data, bool $success = true, $status = 0, $message = null, $showApiInfo = false);

}