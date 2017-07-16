<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Response\HttpResponseCodes;

class DashboardController extends Controller
{
    public function index()
    {
        $response = $this->setResponseData([
            'success' => true,
            'status'  => HttpResponseCodes::HTTP_OK,
            'message' => 'Bem vindo à nossa API',
        ]);

        return $this->response($response);
    }

    /**
     * Set Relations to be included in query
     *
     * @return array
     */
    public function setRelations(): array
    {
        return [];
    }
}
