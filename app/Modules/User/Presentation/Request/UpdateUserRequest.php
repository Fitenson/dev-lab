<?php

namespace App\Modules\User\Presentation\Request;

use App\Core\Request\BaseRequest;


class UpdateUserRequest extends BaseRequest {
    protected string $name = 'user';


    protected function prefixedRules(): array
    {
        return [
            'name' => 'required|string|max:100',
            'full_name' => 'nullable|string|max:100',
            'email' => 'nullable|email|max:100',
            'gender' => 'nullable|string|max:50',
            'description' => 'nullable|string|max:500',
            'address' => 'nullable|string|max:500',
        ];
    }


    protected function prefixedMessages(): array
    {
        return [
            'name.required' => ErrorMessage::NAME_REQUIRED,
            'name.max' => ErrorMessage::NAME_MAX,

            'full_name.max' => ErrorMessage::FULL_NAME_MAX,

            'email.email' => ErrorMessage::EMAIL_FORMAT,
            'email.unique' => ErrorMessage::EMAIL_UNIQUE,
            'email.max' => ErrorMessage::EMAIL_MAX,

            'gender.max' => ErrorMessage::GENDER_MAX,

            'description.max' => ErrorMessage::DESCRIPTION_MAX,
            'address.max' => ErrorMessage::ADDRESS_MAX
        ];
    }
}
