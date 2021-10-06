<?php


namespace App\service;

use Illuminate\Support\Facades\DB;

use http\Client\Response;
use Illuminate\Http\Request;

use Illuminate\Support\Collection;


class DepotMarketeurService extends GenericService
{
    // Constructeur

    public function __construct()
    {
        parent::__construct();
    }


    public function infoCompteDep(int $id)
    {
        $info = DB::table('compte_de_depots')

        ->join('agent_marketings', 'compte_de_depots.idAgent', '=', 'agent_marketings.id')

        ->select('compte_de_depots.id as id','numCompteDep')

        ->where('compte_de_depots.idAgent', '=', $id)

        ->get();

        return $info;


    }

}
