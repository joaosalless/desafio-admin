<?php

namespace App\Http\Controllers\Api\Admin;

use App\Repositories\MedicamentoRepository;

class MedicamentosController extends Controller
{
    /**
     * @var MedicamentoRepository
     */
    protected $repository;

    /**
     * MedicamentosController constructor.
     *
     * @param MedicamentoRepository $repository
     */
    public function __construct(MedicamentoRepository $repository)
    {
        parent::__construct();

        $this->repository = $repository;
    }

    /**
     * Set Relations to be included in query
     *
     * @return array
     */
    public function setRelations(): array
    {
        return [
            'item' => ['history'],
        ];
    }
}
