<?php

namespace App\Modules\User\Presentation\Controller;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Modules\User\Domain\Service\UserService;
use App\Modules\User\Presentation\Request\CreateUserRequest;
use App\Modules\User\Presentation\Request\UpdateUserRequest;


class UserController extends Controller {
    private UserService $user_service;

    public function __construct(UserService $user_service)
    {
        $this->user_service = $user_service;
    }


    public function getIndex(Request $request) {
        $users = $this->user_service->index($request);
        return response()->json($users);
    }


    public function store(CreateUserRequest $create_user_request) {
        $user = $this->user_service->store($create_user_request->validated());

        return response()->json([
            'userId' => $user->id
        ]);
    }


    public function update(string $id, UpdateUserRequest $update_user_request) {
        $user = $this->user_service->update($id, $update_user_request->all());

        return redirect()->route('user.show', $user->id);
    }


    public function delete(Request $request) {
        return $this->user_service->removeUser($request->all());
    }
}
