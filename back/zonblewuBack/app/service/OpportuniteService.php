<?php


namespace App\service;
use Illuminate\Support\Facades\DB;
use http\Client\Response;
use Illuminate\Http\Request;


class OpportuniteService extends GenericService
{

    public function __construct()
    {
        parent::__construct();
    }

    public function findAll(string $class)
    {

        $oppListe = DB::select('select nomMembre, prenomMembre, opportunites.id as id, oct, omt, olt

                                from membres , comptes , opportunites

                                where opportunites.idCompte = comptes.id

                                and comptes.idMembre = membres.id');



        return $oppListe;
    }

    public function findCompteOpp()
    {
        // requete permettant d'avoir le solde du compte
        //
        $compteoppListe = DB::select('select membres.id as idMembre, nomMembre, prenomMembre, opportunites.id as id,comptes.id as idCompte, comptes.numCompte, comptes.solde, oct, omt, olt

                                from membres , comptes , opportunites

                                where opportunites.idCompte = comptes.id

                                and comptes.idMembre = membres.id');

        return $compteoppListe;

    }

}
