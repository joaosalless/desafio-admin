<?php

use Carbon\Carbon;
use App\Models\Medicamento;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MedicamentoTableSeeder extends Seeder
{
    private $model;

    /**
     * MedicamentoTableSeeder constructor.
     */
    public function __construct()
    {
        $this->model = new Medicamento();
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->getDataArray() as $medicamento) {
            DB::table($this->model->getTable())->insert($medicamento);
            activity()
                ->performedOn(Medicamento::find($medicamento['id']))
                ->withProperties(collect([
                    'attributes' => [
                        'nome'  => $medicamento['nome'],
                        'ggrem' => $medicamento['ggrem'],
                    ]
                ]))
                ->log('created');
        }
    }

    public function getDataArray(): array
    {
        $data = [
            ['id' => 1, 'ggrem' => '6193109590099', 'nome' => 'Bacillus clausii'],
            ['id' => 2, 'ggrem' => '67239000801', 'nome' => 'Lactobacillus paracasei'],
            ['id' => 3, 'ggrem' => '67239000802', 'nome' => 'Bifidobacterium lactis'],
            ['id' => 4, 'ggrem' => '67239000803', 'nome' => 'Frutooligossacarídeo'],
            ['id' => 5, 'ggrem' => '1039001840046', 'nome' => 'Polypodium leucotomos'],
            ['id' => 6, 'ggrem' => '99999955555555', 'nome' => 'Lactobacillus reuteri'],
            ['id' => 7, 'ggrem' => '349859854979798', 'nome' => 'Bacillus cereus'],
            ['id' => 8, 'ggrem' => '470760365006100', 'nome' => 'Lactobacillus acidophilus'],
            ['id' => 9, 'ggrem' => '500200901119114', 'nome' => 'Bromazepam'],
            ['id' => 10, 'ggrem' => '101000182002020', 'nome' => 'Estazolam'],
            ['id' => 11, 'ggrem' => '500206802112315', 'nome' => 'Cloridrato de sibutramina'],
            ['id' => 12, 'ggrem' => '500505601161311', 'nome' => 'Cetoconazol'],
            ['id' => 13, 'ggrem' => '500509103164311', 'nome' => 'Nitrato de fenticonazol'],
            ['id' => 100014, 'ggrem' => '500512501175311', 'nome' => 'Desonida'],
            ['id' => 100015, 'ggrem' => '501802203159412', 'nome' => 'Cloreto de potássio'],
            ['id' => 200016, 'ggrem' => '503401501163415', 'nome' => 'Dipropionato de betametasona'],
            ['id' => 300017, 'ggrem' => '504111203117313', 'nome' => 'Cistina'],
            ['id' => 400018, 'ggrem' => '504111203117314', 'nome' => 'Roacutan'],
            ['id' => 500019, 'ggrem' => '504111203117320', 'nome' => 'Queratina'],
            ['id' => 500020, 'ggrem' => '504111203117321', 'nome' => 'Ácido fólico'],
        ];

        foreach ($data as $k => $v) {
            $data[$k]['created_at'] = Carbon::now()->toDateTimeString();
            $data[$k]['updated_at'] = Carbon::now()->toDateTimeString();
        }

        return $data;
    }

}
