<?php


namespace App\service;


use Illuminate\Support\Facades\DB;

use http\Client\Response;
use Illuminate\Http\Request;

class OperationService extends GenericService
{
    public function __construct()
    {
        parent::__construct();
    }

    // function pour relever les infos du client pour retrait

    public function infoCompteRetrait( string $numCompte){

        // recherche de l'id via le numéro de compte

        $infoCompteRetrait = DB::select('select
        comptes.id as id,
        comptes.idMembre ,
        membres.nomMembre,
        membres.prenomMembre,
        membres.mise,
        solde,
        opportunites.oct,
        opportunites.omt,
        opportunites.olt,
        membres.idMarketeur,
        agent_marketings.nomAg,
        agent_marketings.prenomAg

        from membres, comptes, opportunites, agent_marketings

        where comptes.numCompte = :numCompte

        and comptes.idMembre = membres.id

        and comptes.id = opportunites.idCompte

        and membres.idMarketeur = agent_marketings.id', ['numCompte' => $numCompte]);

        if ($infoCompteRetrait == []) {
            # code...
            $data = [
                'error' => true,
                'msg' => 'Numéro de compte introuvable.'
            ];

            return $data;
        }
        else {
            # code...

            $data = [
                'error' => false,
                'msg' => json_encode($infoCompteRetrait)
            ];
            return $data;
        }



        /*$infoCompteRetrait = DB::table('comptes')

        ->join('membres', 'comptes.idMembre', '=', 'membres.id')

        ->join('agences', 'comptes.idAgence', '=', 'agences.id')

        ->join('opportunites', 'comptes.id', '=', 'opportunites.idCompte')

        ->select('comptes.id as id','dateCreation', 'solde', 'membres.mise as mise', 'comptes.idMembre as idMembre', 'membres.nomMembre as nomMembre','membres.prenomMembre as prenomMembre'
        ,'agences.agence as agence', 'oct', 'omt', 'olt')

        ->where('comptes.numCompte', '=', $numCompte)

        ->get();*/
    }

}
