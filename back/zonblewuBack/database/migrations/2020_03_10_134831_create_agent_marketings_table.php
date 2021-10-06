<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAgentMarketingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('agent_marketings', function (Blueprint $table) {

            $table->bigIncrements('id');

            $table->string('nomAg', 30)->nullable(false);

            $table->string('prenomAg', 50)->nullable(false);

            $table->string('telAg', 10)->nullable(false);

            $table->string('adresseAg')->nullable(false);

            $table->unsignedBigInteger('idZone')->nullable(false);

            $table->unsignedBigInteger('idAgence')->nullable(false);

            /*
             * Foreign key
             */

            $table->foreign('idZone')->references('id')->on('zones');

            $table->foreign('idAgence')->references('id')->on('agences');

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
        Schema::dropIfExists('agent_marketings');
    }
}
