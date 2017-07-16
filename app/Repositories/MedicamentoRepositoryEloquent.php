<?php

namespace App\Repositories;

use App\Contracts\ModelContract;
use App\Models\Medicamento;
use App\Presenters\MedicamentoPresenter;
use App\Repositories\MedicamentoRepository;

/**
 * Class MedicamentoRepositoryEloquent
 *
 * @package namespace App\Repositories;
 */
class MedicamentoRepositoryEloquent extends AbstractRepositoryEloquent implements MedicamentoRepository
{
    /**
     * Specify Model Create rules
     *
     * @return array
     */
    public function rulesCreating(): array
    {
        return [
            'ggrem' => 'required',
            'nome'  => 'required',
        ];
    }

    /**
     * Specify Model Update rules
     *
     * @param ModelContract $model
     *
     * @return array
     */
    public function rulesUpdating(ModelContract $model = null): array
    {
        return [
            'ggrem' => 'required',
            'nome'  => 'required',
        ];
    }

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Medicamento::class;
    }

    /**
     * Specify Presenter class name
     *
     * @return string
     */
    public function presenter()
    {
        return MedicamentoPresenter::class;
    }
}
