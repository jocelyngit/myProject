<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Membre extends Model
{
    //

    protected $fillable = [
        'numeroMembre','nomMembre', 'prenomMembre', 'profession', 'secteurActivite', 'nationalite', 'sexe', 'adresseMembre', 'telMembre', 'dateAdhesion', 'mise', 'projetAvenir','sitMatrimoniale',

        'dureeProjet', 'idUser', 'idMarketeur', 'idProfession', 'idSecteur'
    ];

    public function compte()
    {
        return $this->hasMany('App\Compte', 'idMembre');
    }

    public function operation()
    {
        return $this->hasMany('App\Operation', 'idMembre');
    }

    public function cotisation()
    {
        return $this->hasMany('App\Cotisation', 'idMembre');
    }

    public function ayantdroit()
    {
        return $this->hasOne('App\AyantDroit', 'idMembre');
    }
}
