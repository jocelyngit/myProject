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
        solde,
        comptes.idMembre as idMembre,
        membres.nomMembre,
        membres.prenomMembre as prenomMembre,
        opportunites.oct as oct,
        opportunites.omt as omt,
        opportunites.olt as olt,

        from membres, comptes, opportunites

        where comptes.numCompte = :numCompte

        and comptes.idMembre = membres.id

        and RIGHT JOIN opportunites ON comptes.id = opportunites.idCompte', ['numCompte' => $numCompte]);

        return $infoCompteRetrait;

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
