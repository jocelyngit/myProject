<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOperationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('operations', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->timestamp('dateOperation')->nullable(false);

            $table->double('montantOperation')->nullable(false);

            $table->string('personneAgissant', 30)->nullable(false);

            $table->string('nomPagissant', 30)->nullable(true);

            $table->string('prenomPagissant', 30)->nullable(true);

            $table->string('telPagissant', 10)->nullable(true);

            $table->string('typeOpp', 20)->nullable(false);

            $table->unsignedBigInteger('idCompte')->nullable(false);

            $table->unsignedBigInteger('idMembre')->nullable(false);

            $table->unsignedBigInteger('idUser')->nullable(false);

            $table->unsignedBigInteger('idTypeOperation')->nullable(false);


            // Foreign Key
            $table->foreign('idCompte')->references('id')->on('comptes');

            $table->foreign('idMembre')->references('id')->on('membres');

            $table->foreign('idUser')->references('id')->on('users');

            $table->foreign('idTypeOperation')->references('id')->on('type_operations');


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
        Schema::dropIfExists('operations');
    }
}
