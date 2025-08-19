<?php

namespace App\Modules\User\Data\Repository;

use App\Core\Repository\BaseRepository;
use App\Modules\User\Domain\Repository\UserRepository;
use App\Modules\User\Data\Models\User;


class EloquentUserRepository extends BaseRepository implements UserRepository {
    public function index(array $params)
    {
        return $this->getIndex(User::class, $params);
    }


    public function store(array $data)
    {
        $user_data = $data['user'];

        $user = new User();
        $user->fill($user_data);
        $user->save();

        return $user;
    }


    public function show(string $id)
    {
        return User::findOrFail($id);
    }


    public function update(string $id, array $data)
    {
        $user_data = $data['user'];

        $user = User::findOrFail($id);
        $user->update($user_data);

        return $user;
    }


    public function delete(array $data)
    {

    }
}
