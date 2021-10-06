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

            $table->unsignedBigInteger('idCompte')->nullable(false);

            $table->unsignedBigInteger('idMembre')->nullable(false);

            $table->unsignedBigInteger('idUser')->nullable(false);

            // Foreign Key
            $table->foreign('idCompte')->references('id')->on('comptes');

            $table->foreign('idMembre')->references('id')->on('membres');

            $table->foreign('idUser')->references('id')->on('users');

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
