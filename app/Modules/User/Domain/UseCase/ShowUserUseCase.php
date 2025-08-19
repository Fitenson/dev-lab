<?php

namespace App\Modules\User\Domain\UseCase;

use App\Modules\User\Domain\Repository\UserRepository;


class ShowUserUseCase {
    private UserRepository $user_repository;

    public function __construct(UserRepository $user_repository)
    {
        $this->user_repository = $user_repository;
    }


    public function handle(string $id)
    {
        return $this->user_repository->show($id);
    }
}
