<?php

namespace App\Transformers;

use App\Contracts\UserModelContract;
use League\Fractal\TransformerAbstract;

class ActivityCauserTransformer extends TransformerAbstract
{
    /**
     * @param UserModelContract $model
     *
     * @return array
     */
    public function transform(UserModelContract $model)
    {
        return [
            'id'         => $model->id,
            'username'   => $model->name,
            'email'      => $model->email,
            'created_at' => $model->created_at->toDateTimeString(),
            'updated_at' => $model->updated_at->toDateTimeString(),
        ];
    }
}
