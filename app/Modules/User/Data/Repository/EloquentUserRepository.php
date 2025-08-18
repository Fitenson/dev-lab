<?php

namespace App\Modules\User\Data\Repository;

use App\Core\Repository\BaseRepository;
use App\Modules\User\Data\Models\User;
use App\Modules\User\Domain\Repository\UserRepository;


class EloquentUserRepository extends BaseRepository implements UserRepository {
    public function index(array $params)
    {
        return $this->getIndex(User::class, $params);
    }


    public function store()
    {

    }

    public function update(string $id)
    {

    }

    public function delete()
    {

    }
}
