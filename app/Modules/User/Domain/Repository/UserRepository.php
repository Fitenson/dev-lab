<?php

namespace App\Modules\User\Domain\Repository;


interface UserRepository {
    public function index(array $params);
    public function store();
    public function update(string $id);
    public function delete();
}
