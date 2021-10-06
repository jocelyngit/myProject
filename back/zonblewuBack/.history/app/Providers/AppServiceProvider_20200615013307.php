<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\service;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // Enregistrer le generic service
        //
        $this->app->bind(service\GenericService::class, function ($app) {
            return new service\GenericService();
        });

        // CompteService
        $this->app->bind(service\CompteService::class, function ($app) {
            return new service\CompteService();
        });

        //Cotisation
        $this->app->bind(service\CotisationService::class, function ($app) {
            return new service\CotisationService();
        });

        //Membre
        $this->app->bind(service\MembreService::class, function ($app) {
            return new service\MembreService();
        });

        //OperaationService
        $this->app->bind(service\OperationService::class, function ($app) {
            return new service\OperationService();
        });

        // OpportuniteService
        $this->app->bind(service\OpportuniteService::class, function ($app) {
            return new service\OpportuniteService();
        });

        // Profil
        $this->app->bind(service\ProfilService::class, function ($app) {
            return new service\ProfilService();
        });

        // TypeCompteService
        $this->app->bind(service\TypeCompteService::class, function ($app) {
            return new service\TypeCompteService();
        });

        // TypeOperationService
        $this->app->bind(service\TypeOperationService::class, function ($app) {
            return new service\TypeOperationService();
        });

        // TYpeOpportuniteService
        $this->app->bind(service\TypeOpportuniteService::class, function ($app) {
            return new service\TypeOpportuniteService();
        });

        //ZoneofAgentMarketeur
        $this->app->bind(service\ZoneService::class, function ($app) {
            return new service\ZoneService();
        });


        /*
         * Agence
         */
        $this->app->bind(service\AgenceService::class, function ($app) {
            return new service\AgenceService();
        });

        /*
         * Calcul d'opprtunité
         */
        $this->app->bind(service\CalculOpportuniteService::class, function ($app) {
            return new service\CalculOpportuniteService();
        });

        /*
         * Agent Marketing
         */
        $this->app->bind(service\AgentMarketingService::class, function ($app) {
            return new service\AgentMarketingService();
        });

        /*
         * Compte de depot
         */
        $this->app->bind(service\CompteDeDepotService::class, function ($app) {
            return new service\CompteDeDepotService();
        });

        /*
         * OPPORTUNITE
         */

        $this->app->bind(service\OpportuniteService::class, function ($app) {
            return new service\OpportuniteService();
        });



    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
