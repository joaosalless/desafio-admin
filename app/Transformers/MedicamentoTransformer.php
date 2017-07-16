<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Medicamento;

/**
 * Class MedicamentoTransformer
 *
 * @package namespace App\Transformers;
 */
class MedicamentoTransformer extends TransformerAbstract
{

    /**
     * Medicamento Resources that can be included if requested.
     *
     * @var array
     */
    protected $availableIncludes = [
        'history',
    ];

    /**
     * Include Medicamento resources without needing it to be requested.
     *
     * @var array
     */
    protected $defaultIncludes = [];

    /**
     * Transform the Medicamento entity
     *
     * @param Medicamento $model
     *
     * @return array
     */
    public function transform(Medicamento $model)
    {
        return [
            'id'         => $model->id,
            'ggrem'      => $model->ggrem,
            'nome'       => $model->nome,
            'deleted_at' => $model->deleted_at ? $model->deleted_at->toDateTimeString() : null,
            'created_at' => $model->created_at->toDateTimeString(),
            'updated_at' => $model->updated_at->toDateTimeString(),
        ];
    }

    public function includeHistory(Medicamento $model)
    {
        return $this->collection($model->history->sortByDesc('created_at'), new HistoricoTransformer());
    }
}
