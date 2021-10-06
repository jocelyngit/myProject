<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DepotMarketeur extends Model
{
    //
    protected $fillable = [
        'dateDepot', 'montantDepot', 'resteDepot', 'idUser', 'idCptDepot', 'idAgent'
    ];
}
