<?php


namespace App\service;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use SebastianBergmann\Environment\Console;

use Illuminate\Support\Facades\DB;


class MembreService extends GenericService
{
    public function __construct()
    {
        parent::__construct();
    }

    /*
     * Redefinition des methodes
     */

     public function findAll(string $class)
     {


        $membres = DB::table('membres')

            ->join('agent_marketings', 'membres.idMarketeur', '=', 'agent_marketings.id')

            ->join('professions', 'membres.idProfession', '=', 'professions.id')

            ->join('secteur_activites', 'membres.idSecteur', '=', 'secteur_activites.id')

            ->join('users', 'membres.idUser', '=', 'users.id')

            ->select('membres.id as id','nomMembre','prenomMembre', 'profession', 'secteurActivite','nationalite', 'sexe', 'sitMatrimoniale', 'adresseMembre', 'telMembre', 'dateAdhesion', 'mise', 'projetAvenir', 'dureeProjet', 'agent_marketings.nomAg as nomAgent', 'agent_marketings.prenomAg as prenomAgent','users.login as nomUtilisateur')

            ->get();

        return $membres;

     }

     public function store(\Illuminate\Http\Request $req)
    {

        // génération du numéro membre
        // requetre pour avoir le nombre de ligne des membres de la base
        // requete

        $nbLigne = DB::table('membres')

            ->select(DB::raw('count(*) as nbrMembre'))

            ->get();

            foreach ($nbLigne as $result) {

                $nb = $result->nbrMembre;

            }

            error_log($nb);

        $cl = $req->classe;

        // package de la classe
        $packageClass = 'App\\'.$cl;

        $instanceClasse = $packageClass::create($req->all());

        $type = gettype($instanceClasse);

        if ($type == 'object') {
            //throw new \Exception('Erreur veuillez Ressayer');

            // COmmemt capturer l'erreur spécifique
            return \response()->json([
                'error' => false,
                'msg' => $cl.' créé avec succès!!'
            ], 200);
        } else {
            return \response()->json([
                        'error' => true,
                        'msg' => 'Erreur!! Réessayez !!',
            ]);
        }
    }

}
