<?php

namespace App\Transformers;

use App\Models\Activity;
use League\Fractal\TransformerAbstract;

/**
 * Class HistoricoTransformer
 *
 * @package namespace App\Transformers;
 */
class HistoricoTransformer extends TransformerAbstract
{
    /**
     * Historico Resources that can be included if requested.
     *
     * @var array
     */
    protected $availableIncludes = [

    ];

    /**
     * Include Historico resources without needing it to be requested.
     *
     * @var array
     */
    protected $defaultIncludes = [
        'causer',
    ];

    public function transform(Activity $model)
    {
        return [
            'id'          => $model->id,
            'description' => $model->description,
            'created_at'  => $model->created_at->toDateTimeString(),
            'properties'  => $model->changes,
        ];
    }

    public function includeCauser(Activity $model)
    {
        return $model->causer
            ? $this->item($model->causer, new ActivityCauserTransformer())
            : null;
    }
}
