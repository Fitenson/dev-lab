<?php

namespace App\Modules\User\Domain\Service;

use Illuminate\Http\Request;

use App\Modules\User\Domain\UseCase\IndexUseCase;


class UserService {
    private IndexUseCase $index_use_case;


    public function __construct(
        IndexUseCase $index_use_case
    )
    {
        $this->index_use_case = $index_use_case;
    }


    public function index(Request $request)
    {
        return $this->index_use_case->handle($request->all());
    }
}
