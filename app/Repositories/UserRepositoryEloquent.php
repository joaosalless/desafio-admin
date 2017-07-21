<?php

namespace App\Repositories;

use App\Contracts\ModelContract;
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
     * Specify Model Create rules
     *
     * @return array
     */
    public function rulesCreating(): array
    {
        return [];
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
        return [];
    }

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
