<?php

namespace App\Core\Observers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;


class BaseObserver
{
    /**
     * Handle the "creating" event.
     */
    public function creating(Model $model): void
    {
        // Auto-generate UUID if id is empty
        if (empty($model->id)) {
            $model->id = (string) Str::uuid();
        }

        if(Auth::check()) {
            $model->created_by = Auth::id();
        }
    }

    /**
     * Handle the "updating" event.
     */
    public function updating(Model $model): void
    {
        // Example: track last updated by user
        if(Auth::id()) {
            $model->updated_by = Auth::id();
        }
    }

    /**
     * Handle the "deleting" event.
     */
    public function deleting(Model $model): void
    {
    }
}
