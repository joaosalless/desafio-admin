<?php

namespace App\Models;

use App\Contracts\UserModelContract;
use App\Traits\ModelUtilsTrait;
use Illuminate\Notifications\Notifiable;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Illuminate\Foundation\Auth\User as Authenticatable;

/**
 * Class User
 *
 * @package App\Models
 */
class User extends Authenticatable implements UserModelContract, Transformable
{
    use Notifiable;
    use TransformableTrait;
    use ModelUtilsTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

}
