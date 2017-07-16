<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Activity;

/**
 * Class ActivityTransformer
 * @package namespace App\Transformers;
 */
class ActivityTransformer extends TransformerAbstract
{

    /**
     * Transform the Activity entity
     * @param Activity $model
     *
     * @return array
     */
    public function transform(Activity $model)
    {
        return [
            'id'           => $model->id,
            'log_name'     => $model->log_name,
            'description'  => $model->description,
            'subject_id'   => $model->subject_id,
            'subject_type' => $model->subject_type,
            'causer_id'    => $model->causer_id,
            'causer_type'  => $model->causer_type,
            'properties'   => $model->changes,
            'created_at'   => $model->created_at->toDateTimeString(),
            'updated_at'   => $model->updated_at->toDateTimeString(),
        ];
    }
}
