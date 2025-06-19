<?php

use App\Http\Controllers\AdminController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/admin', [AdminController::class, 'createAdmin']);
Route::post('/admin/login', [AdminController::class, 'adminLogin']);
Route::post('/admin/logout', [AdminController::class, 'adminLogout'])->middleware('auth:sanctum');