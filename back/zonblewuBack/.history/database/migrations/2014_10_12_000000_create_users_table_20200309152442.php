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
            $table->string('name', 25);
            $table->string('firstName', 50);
            $table->string('login')->unique();
            //$table->string('email')->unique();
            //$table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            //$table->string('apiToken')->unique()->nullable(true)->default(null);
            $table->rememberToken();

            // foreign key
            $table->foreign('idProfil')->references('id')->on('Profil');

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
