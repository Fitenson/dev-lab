<?php

namespace App\Modules\User\Presentation\Controller;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Modules\User\Domain\Service\UserService;

class UserPageController extends Controller {
    private UserService $user_service;

    public function __construct(UserService $user_service)
    {
        $this->user_service = $user_service;
    }


    public function index() {
        return Inertia::render('user/index');
    }


    public function create() {
        return Inertia::render('user/form-view');
    }


    public function show(string $id) {
        $user = $this->user_service->show($id);

        return Inertia::render('user/form-view', [
            'userData' => $user
        ]);
    }
}
