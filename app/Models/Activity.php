<?php

namespace App\Models;

use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Activitylog\Models\Activity as BaseActivity;

class Activity extends BaseActivity implements Transformable
{
    use TransformableTrait;

    protected static function boot()
    {
        parent::boot();

        /**
         * Inclui o registro de um usuário válido no registro de log
         *
         * Obs.: Isso tem o único propósito de incluir um usuário válido no registro de log
         * e só é necessário porque a API não exige autenticação autenticação. Caso a autenticação
         * esteja habilitada, o sistema identifica o usuário automaticamente.
         */
        static::creating(function(Activity $model){
            if(!$model->causer_id){
                $user = User::first();
                $model->causer_id  = $user->id;
                $model->causer_type = $user->getReflectionClass()->getName();
            }
        });
    }
}
