<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {

            $table->bigIncrements('id');

            $table->string('nomUser', 25);

            $table->string('prenomUser', 50);

            $table->string('login')->unique();

            $table->string('telUser', 10)->nullable(false);

            $table->string('password');

            $table->rememberToken();

            $table->unsignedBigInteger('idProfil')->nullable(false);

            // foreign key
            $table->foreign('idProfil')->references('id')->on('profils');

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
        Schema::dropIfExists('users');
    }
}
