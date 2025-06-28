<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\MilkteaController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\HistoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Get the authenticated user
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//show Milktea in the guest user
Route::get   ('user/milkteas',          [MilkteaController::class, 'show']);

// Public user auth
Route::prefix('user')->group(function () {
    Route::post('/signup', [UserController::class, 'userSignup']);
    Route::post('/login',  [UserController::class, 'userLogin']);
});

// Protected user routes
Route::middleware('auth:sanctum')->prefix('user')->group(function () {

    // Cart
    Route::get   ('/cart',        [CartController::class, 'show']);
    Route::post  ('/cart',        [CartController::class, 'addToCart']);
    Route::delete('/cart/{item}', [CartController::class, 'deleteCart']);

    // Orders
    Route::get   ('/orders',       [OrderController::class, 'showForUser']);
    Route::post  ('/orders',       [OrderController::class, 'createUserOrder']);
    Route::put   ('/orders/{order}', [OrderController::class, 'editUserOrder']);

    // History
    Route::get   ('/history',       [HistoryController::class, 'show']);
    Route::delete('/history/{id}',  [HistoryController::class, 'deleteHistory']);
    Route::post  ('/history',       [HistoryController::class, 'addToHistory']);

    // User logout
    Route::post('/logout', [UserController::class, 'userLogout']);
});

// Public admin auth
Route::prefix('admin')->group(function () {
    Route::post('/signup', [AdminController::class, 'createAdmin']);
    Route::post('/login',  [AdminController::class, 'adminLogin']);
});

// Protected admin routes
Route::middleware('auth:sanctum')->prefix('admin')->group(function () {
    // Milktea CRUD
    Route::get   ('/milkteas',          [MilkteaController::class, 'show']);
    Route::post   ('/milkteas',          [MilkteaController::class, 'createMilktea']);
    Route::put    ('/milkteas/{milktea}',[MilkteaController::class, 'editMilktea']);
    Route::delete ('/milkteas/{milktea}',[MilkteaController::class, 'deleteMilktea']);

    // Orders
    Route::get   ('/orders',             [OrderController::class, 'showForAdmin']);
    Route::post  ('/orders/{order}/approve', [OrderController::class, 'approveOrder']);
    Route::post  ('/orders/{order}/deliver', [OrderController::class, 'deliverOrder']);

    // Admin logout
    Route::post('/logout', [AdminController::class, 'adminLogout']);
});
