<?php

use Illuminate\Support\Facades\Route;

use App\Modules\User\Presentation\Controller\UserController;
use App\Modules\User\Presentation\Controller\UserPageController;


Route::middleware('auth')->prefix('user')->group(function() {
    Route::get('/', [UserPageController::class, 'index'])->name('user.index');
    Route::post('/index', [UserController::class, 'getIndex'])->name('user.getIndex');

    Route::get('/create', [UserPageController::class, 'create'])->name('user.create');
    Route::post('/store', [UserController::class, 'store'])->name('user.store');

    Route::get('/{id}', [UserPageController::class, 'show'])->name('user.show');
    Route::put('/update/{id}', [UserController::class, 'update'])->name('user.update');

    Route::delete('/delete', [UserController::class, 'delete'])->name('user.delete');
});
