<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

$spaRoutes = [
    '/',
    '/medicamentos',
    '/medicamentos/{id}',
    '/medicamentos/{id}/editar',
    '/medicamentos/cadastrar',
];

foreach ($spaRoutes as $route) {
    Route::get($route, function () { return view('index'); });
}

Route::get('/docs', function () {
    return view('docs');
});


