<?php

namespace App\Modules\User\Domain\UseCase;

use App\Modules\User\Domain\Repository\UserRepository;

class IndexUseCase {
    private UserRepository $user_repository;


    public function __construct(UserRepository $user_repository)
    {
        $this->user_repository = $user_repository;
    }


    public function handle(array $params) {
        return $this->user_repository->index($params);
    }
}
