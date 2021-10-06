<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AgentMarketing extends Model
{
    //

    protected $fillable = [
        'nomAg', 'prenomAg', 'telAg', 'adresseAg', 'idZone', 'idAgence'
    ];
}
