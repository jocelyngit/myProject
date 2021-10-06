<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateComptesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comptes', function (Blueprint $table) {

            $table->bigIncrements('id');

            $table->string('numCompte')->nullable(false);

            $table->timestamp('dateCreation')->nullable(false);

            $table->double('solde')->default(0.0)->nullable(false);

            $table->unsignedBigInteger('idMembre')->nullable(false);

            $table->unsignedBigInteger('idAgence')->nullable(false);

            $table->unsignedBigInteger('idUser')->nullable(false);


            // foreign keys

            $table->foreign('idMembre')->references('id')->on('membres');

            $table->foreign('idAgence')->references('id')->on('agences');

            // index
            $table->index('numCompte');

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
        Schema::dropIfExists('comptes');
    }
}
