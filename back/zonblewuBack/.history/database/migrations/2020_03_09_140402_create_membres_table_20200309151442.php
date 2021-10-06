<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMembresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('membres', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nomMembre', 30)->nullable(false);
            $table->string('prenomMembre', 50)->nullable(false);
            $table->string('profession', 100)->nullable(false);
            $table->char('sexe')->nullable(false);
            $table->string('adresseMembre')->nullable(false);
            $table->string('telMembre', 10)->nullable(false);
            $table->timestamp('dateAdhesion')->nullable(false);
            $table->double('mise')->nullable(false);
            $table->string('projetAvenir')->nullable(false);
            $table->string('image')->nullable(false);

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
        Schema::dropIfExists('membres');
    }
}
