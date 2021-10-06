<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Commission extends Model
{
    //

    protected $fillable = ['dateCommission', 'montantCommission', 'idUser', 'idMembre', 'idAgent'];
}
