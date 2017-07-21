<?php

namespace App\Repositories;

use App\Contracts\ModelContract;
use App\Models\Activity;
use App\Repositories\ActivityRepository;

/**
 * Class ActivityRepositoryEloquent
 *
 * @package namespace App\Repositories;
 */
class ActivityRepositoryEloquent extends AbstractRepositoryEloquent implements ActivityRepository
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
        return Activity::class;
    }
}
