<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAyantDroitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ayant_droits', function (Blueprint $table) {

            $table->bigIncrements('id');

            $table->string('nomAy')->nullable(false);

            $table->string('prenomAy')->nullable(false);

            $table->string('telAy', 10)->nullable(false);

            $table->string('adresseAy')->nullable(false);

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
        Schema::dropIfExists('ayant_droits');
    }
}
