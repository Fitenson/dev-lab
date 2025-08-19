<?php

namespace App\Modules\User\Presentation\Request;


class ErrorMessage {
    const NAME_REQUIRED = 'The name field is required';
    const NAME_MAX = 'The name field cannot exceed 100 characters';

    const FULL_NAME_REQUIRED = 'The full name field is required';
    const FULL_NAME_MAX = 'The full name field cannot exceed 100 characters';

    const EMAIL_REQUIRED = 'The email field is required';
    const EMAIL_FORMAT = 'Please enter a valid email format';
    const EMAIL_UNIQUE = 'This email has already been taken';
    const EMAIL_MAX = 'The email field cannot exceed 100 characters';

    const GENDER_MAX = 'The gender field cannot exceed 50 characters';

    const DESCRIPTION_MAX = 'The description field cannot exceed 500 characters';
    const ADDRESS_MAX = 'The address field cannot exceed 500 characters';
}
