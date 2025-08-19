<?php

namespace App\Modules\User\Domain\Repository;


interface UserRepository {
    public function index(array $params);
    public function store(array $data);
    public function show(string $id);
    public function update(string $id, array $data);
    public function delete(array $data);
}
