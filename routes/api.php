<?php

use App\Http\Controllers\NewsController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/news', [App\Http\Controllers\NewsController::class, 'index']);
Route::prefix('/news')->group(function(){
    Route::get('/categories-news', [NewsController::class, 'CategoriesNews']);
    Route::post('/store', [NewsController::class, 'store']);
    Route::get('/index', [NewsController::class, 'index']);
    Route::delete('/delete-new/{id}', [App\Http\Controllers\NewsController::class, 'destroy']);
});
