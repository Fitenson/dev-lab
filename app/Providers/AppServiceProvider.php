<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\Core\Models\BaseModel;
use App\Core\Observers\BaseObserver;
use App\Modules\User\Data\Repository\EloquentUserRepository;
use App\Modules\User\Domain\Repository\UserRepository;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(UserRepository::class, EloquentUserRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        BaseModel::observe(BaseObserver::class);
    }
}
