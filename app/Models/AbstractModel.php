<?php

namespace App\Models;

use App\Contracts\ModelContract;
use App\Traits\ModelUtilsTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

abstract class AbstractModel extends Model implements ModelContract, Transformable
{
    use SoftDeletes;
    use TransformableTrait;
    use ModelUtilsTrait;

    protected $dates = [
        'deleted_at',
    ];
}