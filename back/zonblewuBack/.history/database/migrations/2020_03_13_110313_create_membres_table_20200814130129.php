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

            $table->string('numMembre')->nullable(false);

            $table->string('nomMembre', 30)->nullable(false);

            $table->string('prenomMembre', 50)->nullable(false);

            $table->string('nationalite', 100)->nullable(false);

            $table->char('sexe')->nullable(false);

            $table->string('sitMatrimoniale', 20)->nullable(false);

            $table->string('adresseMembre')->nullable(false);

            $table->string('telMembre', 10)->nullable(false);

            $table->date('dateAdhesion')->nullable(false);

            $table->double('mise')->default(0.0);

            $table->string('projetAvenir')->nullable(true);

            $table->unsignedInteger('dureeProjet')->nullable(true);

            $table->unsignedBigInteger('idUser')->nullable(false);

            $table->unsignedBigInteger('idMarketeur')->nullable(false);

            $table->unsignedBigInteger('idProfession')->nullable(false);

            $table->unsignedBigInteger('idSecteur')->nullable(false);

            // froreign key
             $table->foreign('idUser')->references('id')->on('users');

            $table->foreign('idMarketeur')->references('id')->on('agent_marketings');

            $table->foreign('idProfession')->references('id')->on('professions');

            $table->foreign('idSecteur')->references('id')->on('secteur_activites');

            // index
            $table->index('numMembre');

            $table->string('nomMembre');

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
