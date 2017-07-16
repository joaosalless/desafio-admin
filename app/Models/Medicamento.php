<?php

namespace App\Models;

use App\Traits\LoggableModelTrait;
use App\Contracts\LoggableModelContract;

/**
 * Class Medicamento
 *
 * @package App\Models
 */
class Medicamento extends AbstractModel implements LoggableModelContract
{
    use LoggableModelTrait;

    protected $table = 'medicamentos';

    protected $fillable = [
        'ggrem',
        'nome',
    ];

    protected static $logAttributes = [
        'ggrem',
        'nome',
    ];

    protected static $logOnlyDirty = true;

}
