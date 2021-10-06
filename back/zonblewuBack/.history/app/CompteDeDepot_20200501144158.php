<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CompteDeDepot extends Model
{
    //

    protected $fillable =  [
        'numCompteDep', 'dateCreation', 'soldeDep', 'idAgent'
    ];
}
