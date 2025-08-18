<?php

namespace App\Core\Repository;


abstract class BaseRepository {
    public function getIndex(string $class_name, array $params)
    {
        $per_page = $params['per_page'];
        $order = $params['order'];
        $sort = $params['sort'];

        $data = $class_name::query()
        ->orderBy($sort, $order)
        ->paginate($per_page)
        ->withQueryString();

        return $data;
    }
}
