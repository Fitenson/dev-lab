<?php

namespace App\Modules\User\Domain\Service;

use App\Modules\User\Domain\UseCase\CreateUserUseCase;
use Illuminate\Http\Request;

use App\Modules\User\Domain\UseCase\IndexUseCase;
use App\Modules\User\Domain\UseCase\RemoveUserUseCase;
use App\Modules\User\Domain\UseCase\ShowUserUseCase;
use App\Modules\User\Domain\UseCase\UpdateUserUseCase;

class UserService {
    private IndexUseCase $index_use_case;
    private CreateUserUseCase $create_user_use_case;
    private ShowUserUseCase $show_user_use_case;
    private UpdateUserUseCase $update_user_use_case;
    private RemoveUserUseCase $remove_user_use_case;

    public function __construct(
        IndexUseCase $index_use_case,
        CreateUserUseCase $create_user_use_case,
        ShowUserUseCase $show_user_use_case,
        UpdateUserUseCase $update_user_use_case,
        RemoveUserUseCase $remove_user_use_case
    )
    {
        $this->index_use_case = $index_use_case;
        $this->create_user_use_case = $create_user_use_case;
        $this->show_user_use_case = $show_user_use_case;
        $this->update_user_use_case = $update_user_use_case;
        $this->remove_user_use_case = $remove_user_use_case;
    }


    public function index(Request $request)
    {
        return $this->index_use_case->handle($request->all());
    }


    public function store(array $data)
    {
        return $this->create_user_use_case->handle($data);
    }


    public function show(string $id)
    {
        return $this->show_user_use_case->handle($id);
    }


    public function update(string $id, array $data)
    {
        return $this->update_user_use_case->handle($id, $data);
    }


    public function removeUser(array $data)
    {
        return $this->remove_user_use_case->handle($data);
    }
}
