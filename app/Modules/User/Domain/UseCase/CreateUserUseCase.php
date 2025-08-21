<?php

namespace App\Modules\User\Domain\UseCase;

use App\Modules\User\Domain\Repository\UserRepository;
use Illuminate\Support\Facades\Hash;

class CreateUserUseCase {
    private UserRepository $user_repository;

    public function __construct(UserRepository $user_repository)
    {
        $this->user_repository = $user_repository;
    }


    public function handle(array $data)
    {
        $default_password = '88888888';
        $data['user']['password'] = Hash::make($default_password);
        return $this->user_repository->store($data);
    }
}
