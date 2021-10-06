<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompteDeDepotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('compte_de_depots', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('numCompteDep')->nullable(false);

            $table->timestamp('dateCreation')->nullable(false);

            $table->double('soldeDep')->default(0.0)->nullable(false);

            $table->unsignedBigInteger('idAgent')->nullable(false);

            $table->unsignedBigInteger('idUser')->nullable(false);

            $table->timestamps();

            /*
             * Foreign key
             */
            $table->foreign('idAgent')->references('id')->on('agent_marketings');

            $table->foreign('idUser')->references('id')->on('users');

            /*
             * index
             */
            $table->index('numCompteDep');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('compte_de_depots');
    }
}
