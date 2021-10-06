<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Operation extends Model
{
    //

    protected $fillable = ['dateOperation', 'montantOperation', 'idCompte', 'idMembre', 'idUser', 'idTypeOperation'];

    public function membres()
    {
        return $this->belongsTo('App\Membre', 'idMembre');
    }

    public function compte()
    {
        return $this->belongsTo('App\Compte', 'idCompte');
    }
}
