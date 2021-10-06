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

}
