<?php

namespace App\Modules\User\Presentation\Request;

use Illuminate\Foundation\Http\FormRequest;


class CreateUserRequest extends FormRequest {
    // protected string $name = 'user';


    public function rules(): array
    {
        return [
            'user.name' => 'required|string|max:100',
            'user.full_name' => 'nullable|string|max:100',
            'user.email' => 'required|email|unique:users,email|max:100',
            'user.gender' => 'nullable|string|max:50',
            'user.description' => 'nullable|string|max:500',
            'user.address' => 'nullable|string|max:500',
        ];
    }


    public function messages(): array
    {
        return [
            'user.name.required' => ErrorMessage::NAME_REQUIRED,
            'user.name.max' => ErrorMessage::NAME_MAX,

            'user.full_name.max' => ErrorMessage::FULL_NAME_MAX,

            'user.email.required' => ErrorMessage::EMAIL_REQUIRED,
            'user.email.email' => ErrorMessage::EMAIL_FORMAT,
            'user.email.unique' => ErrorMessage::EMAIL_UNIQUE,
            'user.email.max' => ErrorMessage::EMAIL_MAX,

            'user.gender.max' => ErrorMessage::GENDER_MAX,

            'user.description.max' => ErrorMessage::DESCRIPTION_MAX,
            'user.address.max' => ErrorMessage::ADDRESS_MAX
        ];
    }
}
