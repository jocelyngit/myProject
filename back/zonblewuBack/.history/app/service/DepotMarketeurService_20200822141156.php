<?php


namespace App\service;

use Illuminate\Support\Facades\DB;

use http\Client\Response;
use Illuminate\Http\Request;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Date;

class DepotMarketeurService extends GenericService
{
    // Constructeur

    public function __construct()
    {
        parent::__construct();
    }


    public function findAll(string $class)
    {
         //return parent::store($req); // TODO: Change the autogenerated stub

         // requete

        $depotMarketeurListe = DB::table('depot_marketeurs')

        ->join('agent_marketings', 'depot_marketeurs.idAgent', '=', 'agent_marketings.id')

        ->join('compte_de_depots', 'depot_marketeurs.idCptDepot', '=', 'compte_de_depots.id')

        ->select('depot_marketeurs.id as id', 'agent_marketings.id as idAgent', 'compte_de_depots.id as idCompte', 'numCompteDep','dateDepot', 'montantDepot', 'agent_marketings.nomAg as nomAg','agent_marketings.prenomAg as prenomAg')

        ->get();

        return $depotMarketeurListe;
    }

    public function getDepotDuDjour( int $id)
    {

        $depotDuJour = DB::select('select  distinct depot_marketeurs.id as id, montantDepot, idCptDepot
                                from depot_marketeurs, agent_marketings, compte_de_depots
                                where depot_marketeurs.idAgent =:idAgent
                                and depot_marketeurs.dateDepot = CURRENT_DATE()
                                and depot_marketeurs.idAgent = agent_marketings.id
                                and compte_de_depots.id = depot_marketeurs.idCptDepot', ['idAgent' => $id ]);



        if ($depotDuJour == []) {
            # code...
             $data = [
                'error'=> true,
                'msg' => 'Pas de dépôt à ce jour'
            ];

            return $data;
        }
        else {
            # code...
            foreach ($depotDuJour as $valeur)
            {
               $petiteData = [
                'idDepot' => $valeur->id,
                'montantDepot' => $valeur->montantDepot,
                'idCptDepot' => $valeur->idCptDepot

               ];
            }

            $data = [
                'error' => false,
                'donnee' => $petiteData,
                'msg' => 'Dépôt chargé avec succès'

            ];

            return $data;
        }
                                return $depotDuJour;
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
