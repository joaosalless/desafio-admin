<?php

namespace App\Repositories;

use Illuminate\Support\Facades\Validator;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;

abstract class AbstractRepositoryEloquent extends BaseRepository implements AbstractRepository
{
    protected $skipPresenter = false;

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

    /**
     * Validate request
     *
     * @param array $data
     * @param array $rules
     *
     * @return mixed
     */
    public function validate(array $data, array $rules)
    {
        return Validator::make($data, $rules);
    }
}