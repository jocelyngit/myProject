<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOpportunitesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('opportunites', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->double('montantOpportunite')->nullable(false);

            $table->unsignedInteger('idCotisation')->nullable(false);

            $table->unsignedInteger('idTypeOpportunite')->nullable(false);


            // foreign Key
            $table->foreign('idTypeOpportunite')->references('id')->on('TypeOpportunite');

            $table->foreign('idCotisation')->references('id')->on('Cotisation');

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
        Schema::dropIfExists('opportunites');
    }
}
