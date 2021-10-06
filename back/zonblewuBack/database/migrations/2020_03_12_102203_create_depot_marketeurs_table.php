<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDepotMarketeursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('depot_marketeurs', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->timestamp('dateDepot')->nullable(false);

            $table->double('montantDepot')->default(0.0)->nullable(false);

            $table->double('resteDepot')->default(0.0)->nullable(false);

            $table->unsignedBigInteger('idAgent')->nullable(false);

            $table->unsignedBigInteger('idUser')->nullable(false);

            $table->unsignedBigInteger('idCptDepot')->nullable(false);

            $table->timestamps();

            // clé etrangère

            $table->foreign('idAgent')->references('id')->on('agent_marketings');

            $table->foreign('idUser')->references('id')->on('users');

            $table->foreign('idCptDepot')->references('id')->on('compte_de_depots');

            // index
            $table->index('dateDepot');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('depot_marketeurs');
    }
}
