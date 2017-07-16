<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')
    ->as('user')
    ->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'as'        => 'admin.',
    'prefix'    => 'admin',
    'namespace' => 'Admin',
], function () {

    Route::get('/', ['as' => 'index', 'uses' => "DashboardController@index"]);

    /*
    |--------------------------------------------------------------------------
    | Medicamentos Api Routes
    |--------------------------------------------------------------------------
    */
    Route::get('/medicamentos/trashed', ['as' => 'medicamentos.trashed', 'uses' => "MedicamentosController@getTrashed"]);

    Route::resource('medicamentos', 'MedicamentosController', [
        'only'       => [
            'index',
            //'store',
            'show',
            'update',
            //'destroy',
        ],
        'parameters' => [
            'medicamentos' => 'id',
        ]
    ]);

});

Route::get('/', ['as' => 'index', 'uses' => "Admin\DashboardController@index"]);