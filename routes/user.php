<?php

use Illuminate\Support\Facades\Route;

use App\Modules\User\Presentation\Controller\UserController;


Route::middleware('auth')->prefix('user')->group(function() {
    Route::get('/', [UserController::class, 'index'])->name('user.index');
    Route::post('/index', [UserController::class, 'getIndex'])->name('user.getIndex');
});
