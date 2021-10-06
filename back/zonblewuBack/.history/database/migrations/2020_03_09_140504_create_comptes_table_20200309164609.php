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

            $table->unsignedInteger('idTypeCompte')->nullable(false);

            $table->unsignedInteger('idMembre')->nullable(false);

            // foreign keys
            $table->foreign('idTypeCompte')->references('id')->on('TypeCompte');

            $table->foreign('idMembre')->references('id')->on('Membre');

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
