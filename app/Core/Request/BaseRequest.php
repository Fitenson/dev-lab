<?php

namespace App\Core\Request;

use Illuminate\Foundation\Http\FormRequest;


abstract class BaseRequest extends FormRequest {
    protected string $name = '';

    abstract protected function prefixedRules(): array;


    protected function prefixedMessages(): array
    {
        return [];
    }


    public function rules(): array
    {
        return $this->applyPrefix($this->prefixedMessages());
    }


    private function applyPrefix(array $items): array
    {
        if(empty($this->name)) {
            return $items;
        }

        $results = [];

        foreach ($items as $key => $value) {
            $parts = explode('.', $key, 2);
            $field = $this->name . '.' . $parts[0];
            $resultKey = isset($parts[1]) ? $field . '.' . $parts[1] : $field;
            $results[$resultKey] = $value;
        }

        return $results;
    }
}
