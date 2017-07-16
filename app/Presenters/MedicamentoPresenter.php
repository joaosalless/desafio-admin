<?php

namespace App\Presenters;

use App\Transformers\MedicamentoTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class MedicamentoPresenter
 *
 * @package namespace App\Presenters;
 */
class MedicamentoPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new MedicamentoTransformer();
    }
}
