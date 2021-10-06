<?php


namespace App\service;

use App\Compte;

use App\CompteDeDepot;

use App\Opportunite;

use Illuminate\Support\Facades\DB;

use http\Client\Response;
use Illuminate\Http\Request;

use Illuminate\Support\Collection;
use PhpParser\Builder\Param;

class CotisationService extends GenericService
{

    public function __construct()
    {
        parent::__construct();
    }

    public function store(\Illuminate\Http\Request $req)
    {
         //return parent::store($req); // TODO: Change the autogenerated stub

        error_log($req->param) ;
        $montantDeDepot = $req->montantVerse;

        /**
         *
         * $jsonIterator = new RecursiveIteratorIterator(
            new RecursiveArrayIterator(json_decode($json, TRUE)),
            RecursiveIteratorIterator::SELF_FIRST);
         */

        // Récupération de la classe
      $cl = $req->classe;

        $parsed_json = json_decode($req->param,true);

        foreach ($parsed_json as $key => $value)
        {

            error_log($key);

           error_log(count($value));

            //$tab = [];

                //error_log($value['montantCotisation']);
                # code...



       // }

            # code...
        foreach($value as  $val)
        {

            $numCompte = $val['numCompte'];
            error_log($numCompte);

            $idCompte = $val['idCompte'];
            error_log($idCompte);

            $idCompteDep = $val['idCompteDep'];
            error_log($idCompteDep);

            $mtCotisation = $val['montantCotisation'];
            error_log($mtCotisation);

            $idMembre = $val['idMembre'];
            error_log($idMembre);

            $mise = $val['mise'];
            error_log($mise);

            $idUser = $val['idUser'];
            error_log($idUser);

            $dateCotisation = $val['dateCotisation'];
            error_log($dateCotisation);

        // Requete pour afficher si l'utilisateur
        // a cotisé déja dans le mois en cour

        $results = DB::select('select cotisations.id as id
        from cotisations, membres, comptes
        where cotisations.idMembre = :id
        and extract(month from cotisations.dateCotisation) = extract(month from current_date )
        and cotisations.idMembre = membres.id', ['id' => $idMembre]);

        foreach ($results as $valeur)
        {
            $id = $valeur->id;

        }

        if ($results == [])
        {

            //echo ('vide');

            // Enlever la commission
            // première cotisation dans le mois

            if ($mtCotisation >= $mise) {
                # code...
                $mtCotisationUpdate = $mtCotisation - $mise;

                $packageClass = 'App\\'.$cl;

                $instanceCotisation = $packageClass::create(
                                                    ['dateCotisation' => $dateCotisation,
                                                    'montantCotisation' => $mtCotisationUpdate,
                                                    'idMembre' => $idMembre,
                                                    'idCompte' => $idCompte,
                                                    'idUser' => $idUser
                                                    ]
                );

                // condition pour mettre à jour
                // le solde du compte
                if (is_object($instanceCotisation)) {
                    // Misa à jour du solde du compte
                    $package = 'App\Compte';

                    $instanceCompte = $package::find($idCompte);

                    if (is_object($instanceCompte)) {
                        $nvSolde = $instanceCompte['solde'] + $mtCotisationUpdate;

                        $instanceCompte->update([
                            'solde' => $nvSolde
                           ]);

                        // condition pour mettre à jour les
                        // Opportunités

                        if ($instanceCompte) {
                            // Mise à jour des opportunités

                            $packageOpp = 'App\Opportunite';

                            $instanceOpp = $packageOpp::find($idCompte);

                            if (is_object($instanceOpp)) {
                                # code...
                                $oct = ($instanceOpp['oct']) + ($mtCotisationUpdate * 7/20);

                                $omt = ($instanceOpp['omt']) + ($mtCotisationUpdate * 3/20);

                                $olt = ($instanceOpp['olt']) + ($mtCotisationUpdate * 10/20);

                                $instanceOpp->update([
                                     'oct' => $oct,
                                     'omt' => $omt,
                                     'olt' => $olt
                                 ]);

                                // condition pour mettre à jour
                                // le compte de depot et
                                // les dépôt marketeur
                                if ($instanceOpp) {

                                    //Mise à jour compte de depot Agent Marketeur
                                    $packageDep = 'App\CompteDeDepot';

                                    $instanceCompteDep = $packageDep::find($idCompteDep);

                                    if (is_object($instanceCompteDep)) {

                                        //$soldeInit = $instanceCompteDep['soldeDep'];

                                        $nvSoldeDep = $montantDeDepot - $mtCotisation;

                                        $instanceCompteDep->update([
                                                    'soldeDep' => $nvSoldeDep
                                                     ]);

                                        return \response()->json([
                                'error' => false,
                                'msg' => 'Mise à jour effectuée avec succès'
                            ], 200);
                                    }
                                }
                            }
                            else {
                                # code...
                                $packageOpp = 'App\Opportunite';

                                $octNv =  ($mtCotisationUpdate * 7/20);

                                $omtNv =  ($mtCotisationUpdate * 3/20);

                                $oltNv =  ($mtCotisationUpdate * 10/20);

                                $instanceCreationOpp = $packageOpp::create(
                                    ['oct' => $octNv,
                                    'omt' => $omtNv,
                                    'olt' => $oltNv,
                                    'idCompte' => $idCompte,

                                    ]
                                );

                                if ($instanceCreationOpp) {

                                    //Mise à jour compte de depot Agent Marketeur
                                    $packageDep = 'App\CompteDeDepot';

                                    $instanceCompteDep = $packageDep::find($idCompteDep);

                                    if (is_object($instanceCompteDep)) {

                                        //$soldeInit = $instanceCompteDep['soldeDep'];

                                        $nvSoldeDep = $montantDeDepot - $mtCotisation;

                                        $instanceCompteDep->update([
                                                    'soldeDep' => $nvSoldeDep
                                                     ]);

                                        return \response()->json([
                                'error' => false,
                                'msg' => 'Mise à jour effectuée avec succès'
                            ], 200);
                                    }
                                }
                            }

                        }
                    }
                }
                else
         {
            return \response()->json([
                'error' => true,
                'msg' => 'Erreur!! Réessayez !!',
        ]);
         }

        }

              // FIN IF ($results == [])
        }
        else
        {

             // package de la classe
            // enregistrement de la cotisation

         $packageClass = 'App\\'.$cl;

         $instanceCotisation = $packageClass::create(
            ['dateCotisation' => $dateCotisation,
            'montantCotisation' => $mtCotisation,
            'idMembre' => $idMembre,
            'idCompte' => $idCompte,
            'idUser' => $idUser
            ]
         );

         // condition de mise à jour du compte principal
         if (is_object($instanceCotisation))
         {
             // Misa à jour du solde du compte
            $package = 'App\Compte';

         $instanceCompte = $package::find($idCompte);

            if (is_object($instanceCompte))
            {
                    $nvSolde = $instanceCompte['solde'] + $mtCotisation;

                    $instanceCompte->update([
                     'solde' => $nvSolde
                    ]);

                    // condition de mise à jour des opportunités
                    if ($instanceCompte)
                    {
                            // Mise à jour des opportunités

                            $packageOpp = 'App\Opportunite';

                            $instanceOpp = $packageOpp::find($idCompte);

                            if (is_object($instanceOpp)) {
                                # code...
                                $oct = ($instanceOpp['oct']) + ($mtCotisation * 7/20);

                                $omt = ($instanceOpp['omt']) + ($mtCotisation * 3/20);

                                $olt = ($instanceOpp['olt']) + ($mtCotisation * 10/20);

                                $instanceOpp->update([
                                     'oct' => $oct,
                                     'omt' => $omt,
                                     'olt' => $olt
                                 ]);


                                 // condition de mise à jour
                                 // du compte de dépot des marketeurs

                                 if ($instanceOpp) {
                                    //Mise à jour compte de depot Agent Marketeur
                                    $packageDep = 'App\CompteDeDepot';

                                    $instanceCompteDep = $packageDep::find($idCompteDep);

                                    if (is_object($instanceCompteDep)) {

                                        //$soldeInit = $instanceCompteDep['soldeDep'];

                                        $nvSoldeDep = $montantDeDepot - $mtCotisation;

                                        $instanceCompteDep->update([
                                        'soldeDep' => $nvSoldeDep
                                         ]);

                                        return \response()->json([
                    'error' => false,
                    'msg' => 'Mise à jour effectuée avec succès'
                ], 200);
                                    }
                                }
                            }

         }
    }

         }
         else
         {
            return \response()->json([
                'error' => true,
                'msg' => 'Erreur!! Réessayez !!',
        ]);
         }

         // FIN ELSE $RESULTS = []
        }

        // FIN FOREACH DES VALEURS
        }


        // FIN FOREACH DES CLES
    }


    }

    public function allCotisation()
    {
        // requete

        $allCotisation = DB::table('cotisations')

        ->join('membres', 'cotisations.idMembre', '=', 'membres.id')

        ->select('cotisations.id as id', 'dateCotisation', 'montantCotisation', 'membres.mise as mise', 'membres.nomMembre as nomMembre','membres.prenomMembre as prenomMembre')

        ->get();

    }
}
