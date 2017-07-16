<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Response\ApiResponse;
use App\Http\Response\HttpResponseCodes;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use App\Criteria\OnlyTrashedCriteria;
use App\Criteria\WithTrashedCriteria;

abstract class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected $apiResponse;
    protected $repository;

    public function __construct()
    {
        $this->apiResponse = new ApiResponse('json');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $medicamentos = $this->repository->with($this->getRelations('collection'))->all();

        if (count($medicamentos['data']) > 0) {
            $response = $this->setResponseData([
                'success' => true,
                'status'  => HttpResponseCodes::HTTP_OK,
                'data'    => $medicamentos,
            ]);
        } else {
            $response = $this->setResponseData([
                'success' => false,
                'status'  => HttpResponseCodes::HTTP_NOT_FOUND,
                'message' => 'Nenhum registro encontrado',
                'data'    => [],
            ]);
        }

        return $this->response($response);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getTrashed()
    {
        $this->repository->pushCriteria(app(OnlyTrashedCriteria::class));

        $medicamentos = $this->repository->with($this->getRelations('collection'))->all();

        if (count($medicamentos['data']) > 0) {
            $response = $this->setResponseData([
                'success' => true,
                'status'  => HttpResponseCodes::HTTP_OK,
                'data'    => $medicamentos,
            ]);
        } else {
            $response = $this->setResponseData([
                'success' => false,
                'status'  => HttpResponseCodes::HTTP_NOT_FOUND,
                'message' => 'Nenhum registro encontrado',
                'data'    => [],
            ]);
        }

        return $this->response($response);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $validator = $this->repository->validate($data, $this->repository->rulesCreating());

        if ($validator->fails()) {
            $response = $this->setResponseData([
                'success' => false,
                'status'  => HttpResponseCodes::HTTP_UNPROCESSABLE_ENTITY,
                'message' => 'Dados inválidos',
                'data'    => [
                    'errors' => $validator->errors(),
                ],
            ]);

            return $this->response($response);
        }

        $medicamento = $this->repository->create($data);

        if ($medicamento) {
            $medicamento = $this->repository->with($this->getRelations('item'))->find($id);
            $response = $this->setResponseData([
                'success' => true,
                'status'  => HttpResponseCodes::HTTP_CREATED,
                'message' => 'Registro salvo com sucesso',
                'data'    => $medicamento,
            ]);
        } else {
            $response = $this->setResponseData([
                'success' => false,
                'status'  => HttpResponseCodes::HTTP_BAD_REQUEST,
                'message' => 'Houve um problema ao salvar o registro.',
            ]);
        }

        return $this->response($response);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $this->repository->pushCriteria(app(WithTrashedCriteria::class));

        try {
            $medicamento = $this->repository->with($this->getRelations('item'))->find($id);

            $response = $this->setResponseData([
                'success' => true,
                'status'  => HttpResponseCodes::HTTP_OK,
                'data'    => $medicamento,
            ]);

            return $this->response($response);

        } catch (ModelNotFoundException $e) {

            $response = $this->setResponseData([
                'success' => false,
                'status'  => HttpResponseCodes::HTTP_NOT_FOUND,
                'message' => 'Registro não encontrado.',
            ]);

            return $this->response($response);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  int    $id
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $validator = $this->repository->validate($data, $this->repository->rulesUpdating());

        if ($validator->fails()) {
            $response = $this->setResponseData([
                'success' => false,
                'status'  => HttpResponseCodes::HTTP_UNPROCESSABLE_ENTITY,
                'message' => 'Dados inválidos',
                'data'    => [
                    'errors' => $validator->errors(),
                ],
            ]);

            return $this->response($response);
        }

        try {

            $medicamento = $this->repository->with($this->getRelations('item'))->update($request->all(), $id);

            if ($medicamento) {
                $medicamento = $this->repository->with($this->getRelations('item'))->find($id);
                $response = $this->setResponseData([
                    'success' => true,
                    'status'  => HttpResponseCodes::HTTP_OK,
                    'message' => 'Registro salvo com sucesso',
                    'data'    => $medicamento,
                ]);
            } else {
                $response = $this->setResponseData([
                    'success' => false,
                    'status'  => HttpResponseCodes::HTTP_BAD_REQUEST,
                    'message' => 'Houve um problema ao salvar o registro.',
                ]);
            }

            return $this->response($response);

        } catch (ModelNotFoundException $e) {

            $response = $this->setResponseData([
                'success' => false,
                'status'  => HttpResponseCodes::HTTP_NOT_FOUND,
                'message' => 'Registro não encontrado.',
            ]);

            return $this->response($response);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {

            $deleted = $this->repository->with($this->getRelations('item'))->delete($id);

            if ($deleted) {
                $response = $this->setResponseData([
                    'success' => true,
                    'message' => 'Registro excluido com sucesso',
                ]);
            } else {
                $response = $this->setResponseData([
                    'success' => false,
                    'status'  => HttpResponseCodes::HTTP_BAD_REQUEST,
                    'message' => 'Houve um problema ao excluir o registro.',
                ]);
            }

            return $this->response($response);

        } catch (ModelNotFoundException $e) {

            $response = $this->setResponseData([
                'success' => false,
                'status'  => HttpResponseCodes::HTTP_NOT_FOUND,
                'message' => 'Registro não encontrado.',
            ]);

            return $this->response($response);
        }

    }

    /**
     * Set Response Data
     *
     * @param $data
     *
     * @return array
     */
    public function setResponseData($data): array
    {
        return array_merge(
            [
                'success' => null,
                'status'  => HttpResponseCodes::HTTP_OK,
                'message' => null,
                'data'    => [],
            ], $data
        );
    }

    /**
     * Set Relations to be included in query
     *
     * @return array
     */
    public abstract function setRelations(): array;

    /**
     * Get Relations to be included in query
     *
     * @param string $type
     *
     * @return array
     */
    public function getRelations(string $type): array
    {
        return array_merge([
            'item'       => [],
            'collection' => [],
        ], $this->setRelations())[$type];
    }

    /**
     * @param array $response
     *
     * @return mixed
     */
    public function response(array $response)
    {
        return $this->apiResponse->getResponse($response['data'], $response['success'], $response['status'], $response['message']);
    }
}
