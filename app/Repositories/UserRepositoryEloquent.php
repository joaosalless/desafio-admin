<?php

namespace App\Repositories;

use App\Models\User;
use App\Repositories\UserRepository;

/**
 * Class UserRepositoryEloquent
 *
 * @package namespace App\Repositories;
 */
class UserRepositoryEloquent extends AbstractRepositoryEloquent implements UserRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return User::class;
    }
}
