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

            ->select('membres.id as id', 'numeroMembre','nomMembre','prenomMembre', 'profession', 'secteurActivite','nationalite', 'sexe', 'sitMatrimoniale', 'adresseMembre', 'telMembre', 'dateAdhesion', 'mise', 'projetAvenir', 'dureeProjet', 'agent_marketings.nomAg as nomAgent', 'agent_marketings.prenomAg as prenomAgent','users.login as nomUtilisateur')

            ->get();

        return $membres;

     }

     public function store(\Illuminate\Http\Request $req)
    {

        $cl = $req->classe;

       // error_log($req->idProfession);
        //error_log($req->idSecteur);

          // package de la classe
          $packageClass = 'App\\'.$cl;

        error_log('prmiere instance de numero membre');

        error_log($req->numeroMembre);

        //$numMembre = $req->numeroMembre;

        // requete pour avoir le nombre de ligne dans la table

        $nbLigneMembre = DB::table('membres')

            ->select(DB::raw('count(*) as nbMembre'))

            ->get();

            // parcours pour la lecture du résultat trouvé
            foreach ($nbLigneMembre as $resultat) {

                $nb = $resultat->nbMembre;

            }

            error_log($nb);

            $inc = $nb + 1;

        // requete pour get Agence
        $idAgent = $req->idMarketeur;

        $libelleAgence = DB::select('select agence, agences.id as id
                                        from agences, agent_marketings
                                        where agent_marketings.id = :id
                                        and agent_marketings.idAgence = agences.id' ,['id' => $idAgent]);

        //parcours pour lire l'enregistrement
        foreach ($libelleAgence as $result) {

            $libelle = $result->agence;

        }

        error_log($libelle);

        if ($libelle == 'LYS') {

            //$req->numeroMembre = '01'.$inc;

            $numMembre = '01'.$inc;

            $req->numeroMembre = $numMembre;

           error_log($numMembre);
           // error_log($req->numeroMembre);
        }
        elseif ($libelle == 'Succes') {

            $numMembre = '02'.$inc;

            $req->numeroMembre = $numMembre;
            error_log($numMembre);
           // error_log($req->numeroMembre);
        }
        elseif ($libelle == 'EMERAUDE') {

            //$req->numeroMembre = '03'.$inc;

            $numMembre = '03'.$inc;
            error_log('numéro membre');

           $req->numeroMembre = $numMembre;
           error_log($numMembre);
        }
        // génération du numéro membre
        // requetre pour avoir le nombre de ligne des membres de la base
        // requete

        $instanceClasse = $packageClass::create([
            //$req->all()
           'numeroMembre' => $numMembre,
            'nomMembre' => $req->nomMembre,
            'prenomMembre' => $req->prenomMembre,
            'nationalite' => $req->nationalite,
            'sexe' => $req->sexe,
            'sitMatrimoniale' => $req->sitMatrimoniale,
            'adresseMembre' => $req->adresseMembre,
            'telMembre' => $req->telMembre,
            'dateAdhesion' => $req->dateAdhesion,
            'mise' => $req->mise,
            'projetAvenir' => $req->projetAvenir,
            'dureeProjet' => $req->dureeProjet,
            'idUser' => $req->idUser,
            'idMarketeur' => $req->idMarketeur,
            'idProfession' => $req->idProfession,
            'idSecteur' => $req->idSecteur


        ]);

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
