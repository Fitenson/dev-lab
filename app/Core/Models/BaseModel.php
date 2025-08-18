<?php

namespace App\Core\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;


class BaseModel extends Model {
    protected static function boot()
    {
        parent::boot();

        static::creating(function($model) {
            if(empty($model->id)) {
                $model->id = Str::uuid();
            }
        });

        static::updating(function($model) {
            if(empty($model)) {
                $model->id = Str::uuid();
            }
        });
    }
}
