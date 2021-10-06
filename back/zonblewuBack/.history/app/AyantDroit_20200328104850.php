<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AyantDroit extends Model
{
    //
    protected $fillable = ['nomAy', 'prenomAy', 'telAy', 'adresseAy', 'idMembre'];


    public function membre()
    {
        return $this->belongsTo('App\Membre', 'idMembre');
    }

}
