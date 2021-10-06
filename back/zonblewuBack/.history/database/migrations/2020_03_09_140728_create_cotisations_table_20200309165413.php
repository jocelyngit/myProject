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

            $table->unsignedInteger('idUser')->nullable(false);

            $table->unsignedInteger('idMembre')->nullable(false);


            // foreign keys
            $table->foreign('idUser')->references('id')->on('User');

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
        Schema::dropIfExists('cotisations');
    }
}
