<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Compte extends Model
{
    //
    protected $fillable = ['numCompte', 'dateCreation', 'solde', 'idMembre', 'idAgence', 'idUser'];

    public function membre()
    {
        return $this->belongsTo('App\Membre', 'idMembre');
    }

    public function operations()
    {
        return $this->hasMany('App\Operation', 'idCompte');
    }
}
