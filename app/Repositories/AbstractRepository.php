<?php

namespace App\Repositories;

use App\Contracts\ModelContract;

interface AbstractRepository
{
    /**
     * Specify Model Create rules
     *
     * @return array
     */
    public function rulesCreating(): array;

    /**
     * Specify Model Update rules
     *
     * @param ModelContract $model
     *
     * @return array
     */
    public function rulesUpdating(ModelContract $model = null): array;

    /**
     * Validate request
     *
     * @param array $data
     * @param array $rules
     *
     * @return mixed
     */
    public function validate(array $data, array $rules);
}