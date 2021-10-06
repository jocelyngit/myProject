<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('commissions', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->date('dateCommission')->nullable(false);

            $table->double('montantCommission')->nullable(false);

            $table->unsignedBigInteger('idUser')->nullable(false);

            $table->unsignedBigInteger('idMembre')->nullable(false);

            $table->unsignedBigInteger('idAgent')->nullable(false);


            // foreign keys
            $table->foreign('idUser')->references('id')->on('users');

            $table->foreign('idMembre')->references('id')->on('membres');

            $table->foreign('idAgent')->references('id')->on('agent_marketings');

            // index
            $table->index('dateCommission');

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
        Schema::dropIfExists('commissions');
    }
}
