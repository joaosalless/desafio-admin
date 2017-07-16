<?php

namespace App\Contracts;

use Illuminate\Database\Eloquent\Relations\MorphMany;

/**
 * Interface ModelContract
 *
 * @package App\Contracts
 */
interface LoggableModelContract
{
    /**
     * Histórico de modificações
     *
     * @return MorphMany
     */
    public function history(): MorphMany;
}