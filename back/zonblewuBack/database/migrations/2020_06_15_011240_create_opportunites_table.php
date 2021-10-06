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

            $table->double('oct')->nullable(false);

            $table->double('omt')->nullable(false);

            $table->double('olt')->nullable(false);

            $table->unsignedBigInteger('idCompte')->nullable(false);

             // foreign keys

             $table->foreign('idCompte')->references('id')->on('comptes');

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
