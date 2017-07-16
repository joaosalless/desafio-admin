<?php

namespace App\Repositories;

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
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Activity::class;
    }
}
