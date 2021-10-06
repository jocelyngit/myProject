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

        /*
    $oppListe = DB::table('opportunites')

        ->join('comptes', 'opportunites.idCompte', '=', 'comptes.id')

        //->join('comptes', 'comptes.idAgence', '=', 'agences.id')

        ->select('opportunites.id as id','oct','omt', 'olt', 'opportunites.idCompte as idCompte',
        */

        $oppListe = DB::select('select m.nomMembre, m.prenomMembre,

                                from membres m, comptes c, opportunites o

                                where opportunites.idCompte = comptes.id

                                and comptes.idMembre = membres.id');



        return $oppListe;
    }
}
