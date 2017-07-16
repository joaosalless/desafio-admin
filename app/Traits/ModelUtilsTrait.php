<?php

namespace App\Traits;

use ReflectionClass;

trait ModelUtilsTrait
{
    /**
     * @return ReflectionClass
     */
    public function getReflectionClass(): ReflectionClass
    {
        return (new ReflectionClass($this));
    }
}