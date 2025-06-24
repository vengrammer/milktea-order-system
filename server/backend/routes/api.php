<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//get the user data
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//for user cart
Route::post('/user/cart', [CartController::class, 'show'])->middleware('auth:santum');


//for admin
Route::post('/admin/signup', [AdminController::class, 'createAdmin']);
Route::post('/admin/login', [AdminController::class, 'adminLogin']);
Route::post('/admin/logout', [AdminController::class, 'adminLogout'])->middleware('auth:sanctum');

//for user
Route::post('/user/signup', [UserController::class, 'userSignup']);
Route::post('/user/login', [UserController::class, 'userLogin']);
Route::post('/user/logout', [UserController::class, 'userLogout'])->middleware('auth:sanctum');


