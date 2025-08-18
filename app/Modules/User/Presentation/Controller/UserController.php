<?php

namespace App\Modules\User\Presentation\Controller;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Modules\User\Domain\Service\UserService;
use Inertia\Inertia;


class UserController extends Controller {
    private UserService $user_service;

    public function __construct(UserService $user_service)
    {
        $this->user_service = $user_service;
    }


    public function index(Request $request) {
        return Inertia::render('user/index');
    }


    public function getIndex(Request $request) {
        $users = $this->user_service->index($request);
        return response()->json($users);
    }
}
