<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

use Illuminate\Support\Facades\Gate;

use Laravel\Passport\Passport;

use Laravel\Passport\PersonalAccessClient;


class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
         'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //utilisation de la methode route sur passport pour register les routes
        // vers les token
        Passport::routes();

       // Passport::usePersonalAccessClientModel(PersonalAccessClient::class);

       // Passport::personalAccessClientId('client-id');

        /*
         *
         Passport::useTokenModel(Token::class);

        Passport::useClientModel(Client::class);

        Passport::useAuthCodeModel(AuthCode::class);

        Passport::usePersonalAccessClientModel(PersonalAccessClient::class);
        */
    }
}
