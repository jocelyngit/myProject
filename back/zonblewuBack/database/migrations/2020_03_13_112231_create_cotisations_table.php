<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCotisationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cotisations', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->date('dateCotisation')->nullable(false);

            $table->double('montantCotisation')->nullable(false);

            $table->unsignedBigInteger('idUser')->nullable(false);

            $table->unsignedBigInteger('idMembre')->nullable(false);

            $table->unsignedBigInteger('idCompte')->nullable(false);

            $table->unsignedBigInteger('idDepot')->nullable(false);


            // foreign keys
            $table->foreign('idUser')->references('id')->on('users');

            $table->foreign('idMembre')->references('id')->on('membres');

            $table->foreign('idCompte')->references('id')->on('comptes');

            $table->foreign('idDepot')->references('id')->on('depot_marketeurs');

            // index
            $table->index('dateCotisation');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cotisations');
    }
}
