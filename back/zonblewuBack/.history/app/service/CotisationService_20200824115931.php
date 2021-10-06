<?php


namespace App\service;

use App\Compte;

use App\CompteDeDepot;

use App\Opportunite;

use Illuminate\Support\Facades\DB;

use http\Client\Response;
use Illuminate\Http\Request;

use Illuminate\Support\Collection;



class CotisationService extends GenericService
{

    public function __construct()
    {
        parent::__construct();
    }

    public function store(\Illuminate\Http\Request $req)
    {
         //return parent::store($req); // TODO: Change the autogenerated stub

         error_log($req->p);
       /**
        *
         $cl = $req->classe;

         $numCompte = $req->numCompte;

         $idCompte = $req->idCompte;

         $idCompteDep = $req->idCompteDep;

         $mtCotisation = $req->montantCotisation;

         $idMembre = $req->idMembre;

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

        if ($results == []){

            //echo ('vide');

            // Enlever la commission
            // première cotisation dans le mois

            if ($mtCotisation >= $req->mise) {
                # code...
                $mtCotisationUpdate = $mtCotisation - $req->mise;

                $packageClass = 'App\\'.$cl;

                $instanceCotisation = $packageClass::create(
                                                    ['dateCotisation' => $req->dateCotisation,
                                                    'montantCotisation' => $mtCotisationUpdate,
                                                    'idMembre' => $req->idMembre,
                                                    'idCompte' => $req->idCompte,
                                                    'idUser' => $req->idUser
                                                    ]);

         if (is_object($instanceCotisation)) {
             // Misa à jour du solde du compte
             $package = 'App\Compte';

             $instanceCompte = $package::find($idCompte);

             if (is_object($instanceCompte)) {

                 $nvSolde = $instanceCompte['solde'] + $mtCotisationUpdate;

                 $instanceCompte->update([
                     'solde' => $nvSolde
                    ]);

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

                         if ($instanceOpp) {

                     //Mise à jour compte de depot Agent Marketeur
                             $packageDep = 'App\CompteDeDepot';

                             $instanceCompteDep = $packageDep::find($idCompteDep);

                             if (is_object($instanceCompteDep)) {
                                 $soldeInit = $instanceCompteDep['soldeDep'];

                                 $nvSoldeDep = $soldeInit - $mtCotisation;

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

         }
         else
         {
            return \response()->json([
                'error' => true,
                'msg' => 'Erreur!! Réessayez !!',
        ]);
         }

         // FIN IF ($results == [])
        }
        else {
            # code...
            //echo ('element');

            // package de la classe
            // enregistrement de la cotisation

         $packageClass = 'App\\'.$cl;

         $instanceCotisation = $packageClass::create($req->all());

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

                                if ($instanceOpp) {
                                    //Mise à jour compte de depot Agent Marketeur
                                    $packageDep = 'App\CompteDeDepot';

                                    $instanceCompteDep = $packageDep::find($idCompteDep);

                                    if (is_object($instanceCompteDep)) {

                                        $soldeInit = $instanceCompteDep['soldeDep'];

                                        $nvSoldeDep = $soldeInit - $mtCotisation;

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

         // FIN ELSE ($results == [])
        }
        */

/*
 *  // package de la classe
         $packageClass = 'App\\'.$cl;

         $instanceClasse = $packageClass::create($req->all());

         if (is_object($instanceClasse))
         {
            $package = 'App\Compte';

         $instanceSpecifique = $package::find($idCompte);

         if (is_object($instanceSpecifique))
         {
        $nvSolde = $instanceSpecifique['solde'] + $mtCotisation;

         $instanceSpecifique->update([
             'solde' => $nvSolde
         ]);

         if ($instanceSpecifique)
         {
            $packageDep = 'App\CompteDeDepot';

            $instanceCompteDep = $packageDep::find($idCompteDep);

            if (is_object($instanceCompteDep)){

                $soldeInit = $instanceCompteDep['soldeDep'];

                $nvSoldeDep = $soldeInit - $mtCotisation;

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
         else
         {
            return \response()->json([
                'error' => true,
                'msg' => 'Erreur!! Réessayez !!',
        ]);
         }
 *
 */


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
