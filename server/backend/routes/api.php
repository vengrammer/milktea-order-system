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
Route::middleware('auth:sanctum')->prefix('user')->group(function() {
    Route::post('/cart', [CartController::class, 'show']);
    Route::post('/cart/delete', [CartController::class, 'deleteCart']);
    Route::post('/addToCart', [CartController::class, 'addToCart']);
});

//for user history
Route::middleware('auth:sanctum')->prefix('user')->group(function() {
    Route::post('/history', [CartController::class, 'show']);
    Route::post('/history/delete', [CartController::class, 'deleteHistory']);
    Route::post('/addToHistory', [CartController::class, 'addToHistory']);
});


//for user account
Route::prefix('user')->group(function() {
    Route::post('/user/signup', [UserController::class, 'userSignup']);
    Route::post('/user/login', [UserController::class, 'userLogin']);
    Route::post('/user/logout', [UserController::class, 'userLogout'])->middleware('auth:sanctum');
});

//for admin account
Route::prefix('admin')->group(function(){
    Route::post('/signup', [AdminController::class, 'createAdmin']);
    Route::post('/login', [AdminController::class, 'adminLogin']);
    Route::post('/logout', [AdminController::class, 'adminLogout'])->middleware('auth:sanctum');
});



