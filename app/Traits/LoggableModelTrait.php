<?php

namespace App\Traits;

use App\Models\Activity;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Spatie\Activitylog\Traits\LogsActivity;

trait LoggableModelTrait
{
    use LogsActivity;

    /**
     * Histórico de modificações
     *
     * @return MorphMany
     */
    public function history(): MorphMany
    {
        return $this->morphMany(Activity::class, 'subject');
    }

}