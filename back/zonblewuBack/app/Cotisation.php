<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cotisation extends Model
{
    //

    protected $fillable = ['dateCotisation', 'montantCotisation', 'idUser', 'idMembre', 'idCompte', 'idDepot'];

    public function membre()
    {
        return $this->belongsTo('App\Membre', 'idMembre');
    }
}
