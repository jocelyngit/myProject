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
                'msg' => $infoCompteRetrait
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


    public function store(\Illuminate\Http\Request $req)
    {
        error_log($req->typeOpp);

        $cl = $req->classe;

        // package de la classe
        $packageClass = 'App\\'.$cl;

        $instanceOperation = $packageClass::create($req->all());

        error_log($instanceOperation);

        if (is_object($instanceOperation)) {
            # code...

            // condition pour modifier le solde du compte
             $package = 'App\Compte';

             $compteForUpdate = $package::find($req->idCompte);

                if ($compteForUpdate) {
                    # code...
                    $nvSolde = $compteForUpdate['solde'] - $req->montantOperation;

                    $instanceModifiee = $compteForUpdate->update([
                        'solde' => $nvSolde
                    ]);

                    error_log($instanceModifiee);

                    // code de modification de l'opportunite
                    //
                    if ( $instanceModifiee ) {
                        # code...
                        error_log('entree dans opp');
                        $packageOpp = 'App\Opportunite';

                        // reformulation de la requte
                         //$oppForUpdate = DB::select('select * from opportunites where idCompte =: id', ['id'=>$req->idCompte]);
                        //$oppForUpdate = $packageOpp::find($req->idCompte);
                        $oppId = DB::table('opportunites')

                        ->join('comptes', 'opportunites.idCompte', '=', 'comptes.id')

                        ->select('opportunites.id','oct', 'olt', 'omt', 'opportunites.idCompte as idCompte')

                        ->where('opportunites.idCompte', '=', $req->idCompte)

                        ->get();

                       // error_log($oppForUpdate['id']) ;

                        if ($oppId->count()) {
                            # code...

                            foreach ( $oppId as $val )
                            {
                                $idOpp = $val->id;

                                error_log('idOPP trove');
                                error_log($idOpp);
                            }

                            // recherche par package
                            $oppForUpdate = $packageOpp::find($idOpp);

                            error_log('instance Opp trouvé');
                            error_log($oppForUpdate);

                            if ($oppForUpdate) {
                                # code...

                                if ($req->typeOpp == "oct") {
                                    # code...
                                    $nvSoldeOct = doubleval($oppForUpdate['oct'])  - doubleval($req->montantOperation) ;

                                    $instanceOppModifiee = $oppForUpdate->update([
                                    'oct' => $nvSoldeOct
                                ]);

                                    if ($instanceOppModifiee) {
                                        # code...

                                        return [
                                        'error' => false,
                                        'msg' =>'Retrait effectué avec succès.'
                                    ];
                                    }
                                } elseif ($req->typeOpp == "omt") {
                                    # code...
                                    $nvSoldeOmt = doubleval($oppForUpdate['omt'])  - doubleval($req->montantOperation) ;

                                    $instanceOppModifiee = $oppForUpdate->update([
                                    'omt' => $nvSoldeOmt
                                ]);

                                    if ($instanceOppModifiee) {
                                        # code...
                                        return [
                                        'error' => false,
                                        'msg' =>'Retrait effectué avec succès.'
                                    ];
                                    }
                                } elseif ($req->typeOpp == "olt") {
                                    # code...
                                    $nvSoldeOlt = doubleval($oppForUpdate['olt'])  - doubleval($req->montantOperation);

                                    $instanceOppModifiee = $oppForUpdate->update([
                                    'olt' => $nvSoldeOlt
                                ]);

                                    if ($instanceOppModifiee) {
                                        # code...
                                        return [
                                        'error' => false,
                                        'msg' =>'Retrait effectué avec succès.'
                                    ];
                                    }
                                }
                            }
                        }
                        else {
                            # code...
                            error_log('Compte opportunite introuvable');
                        }
                    }
                }
        }
        else {
            # code...
            return [
                'error' => true,
                'msg' => 'Erreur, merci de réessayer.'
            ];
        }

    }

    public function allRetrait()
    {

        $resultAllRetrait = DB::select('select
        operations.id as id,
        operations.idCompte,
        operations.idMembre,
        Operations.idUser,
        comptes.numCompte ,
        operations.montantOperation,
        operations.dateOperation,
        membres.nomMembre,
        membres.prenomMembre,
        membres.mise,
        type_operations.typeOperation,
        users.login

        from membres, comptes, operations, type_operations, users

        where operations.idMembre = membres.id

        and operations.idTypeOperation = type_operations.id

        and operations.idCompte = comptes.id

        and operations.idUser = users.id');

        return $resultAllRetrait;

    }

    public function getRetraitParDate(\Illuminate\Http\Request $req)
    {
        $retraitParDate = DB::select('select
        operations.id as id,
        operations.idCompte,
        operations.idMembre,
        Operations.idUser,
        comptes.numCompte ,
        operations.montantOperation,
        operations.dateOperation,
        membres.nomMembre,
        membres.prenomMembre,
        type_operations.typeOperation,
        users.login,
        users.nomUser,
        users.prenomUser,
        typeOpp,
        personneAgissant,
        nomPagissant,
        prenomPagissant,
        telPagissant

        from membres, comptes, operations, type_operations, users

        where operations.dateOperation = :dateOp

        and operations.idMembre = membres.id

        and operations.idTypeOperation = type_operations.id

        and operations.idCompte = comptes.id

        and operations.idUser = users.id', ['dateOp'=>$req->dateOperation]);



        if ($retraitParDate == [])
        {

            $data = [
                'error' => true,
                'msg' => 'Pas de retrait à ce jour de '. $req->dateOperation
            ];

            return $data ;
        }
        else
        {

            $p = [];
            $i = 0;
            foreach ($retraitParDate as $value)
            {

                $p[$i]['id'] = $value->id;
                $p[$i]['idCompte'] = $value->idCompte;
                $p[$i]['numCompte'] = $value->numCompte;
                $p[$i]['dateOperation'] = $value->dateOperation;
                $p[$i]['montantOperation'] = $value->montantOperation;
                $p[$i]['idMembre'] = $value->idMembre;
               // $p[$i]['mise'] = $value->mise;
                $p[$i]['nomMembre'] = $value->nomMembre;
                $p[$i]['prenomMembre'] = $value->prenomMembre;
                $p[$i]['idUser'] = $value->idUser;
                $p[$i]['nomUser'] = $value->nomUser;
                $p[$i]['prenomUser'] = $value->prenomUser;
                $p[$i]['login'] = $value->login;
                $p[$i]['typeOperation'] = $value->typeOperation;
                $p[$i]['typeOpp'] = $value->typeOpp;
                $p[$i]['personneAgissant'] = $value->personneAgissant;
                $p[$i]['nomPagissant'] = $value->nomPagissant;
                $p[$i]['prenomPagissant'] = $value->prenomPagissant;
                $p[$i]['telPagissant'] = $value->telPagissant;

                $i++;
            }

            $data = [
                'error' => false,
                'msg' => 'Enregistrement chargé avec succès',
                'nbLigne' => $i,
                'donne' => $p
            ];

            return $data;

        }

    }

   /* public function cotisationParDate(\Illuminate\Http\Request $request)
    {

        $allCotisationParDate = DB::table('cotisations')

            ->join('membres', 'cotisations.idMembre', '=', 'membres.id')

            ->join('agent_marketings', 'membres.idMarketeur', '=', 'agent_marketings.id')

            ->join('comptes', 'cotisations.idCompte', '=', 'comptes.id')

            ->select('cotisations.id as id', 'comptes.id as idCompte', 'numCompte', 'dateCotisation', 'montantCotisation', 'membres.id as idMembre', 'membres.mise as mise', 'membres.nomMembre as nomMembre','membres.prenomMembre as prenomMembre', 'agent_marketings.id as idMarketeur', 'agent_marketings.nomAg as nomAg', 'agent_marketings.prenomAg as prenomAg')

            ->where('dateCotisation','=',$request->dateCotisation)

            ->get();

        if ($allCotisationParDate->count())
        {
            $data = [
                'error' => false,
                'msg' => 'Enregistrement chargé avec succès',
                'nbLigne' => $allCotisationParDate->count(),
                'donne' => $allCotisationParDate
            ];
            return $data ;
        }
        else
        {

            $data = [
                'error' => true,
                'msg' => 'Pas de cotisation à cette date'
            ];

            return $data;

        }


    }
   */

    public function retraitParMois(\Illuminate\Http\Request $request)
    {

        $retraitParMois = DB::select('select
        operations.id as id,
        operations.idCompte,
        operations.idMembre,
        Operations.idUser,
        comptes.numCompte ,
        operations.montantOperation,
        operations.dateOperation,
        membres.nomMembre,
        membres.prenomMembre,
        type_operations.typeOperation,
        users.login,
        users.nomUser,
        users.prenomUser,
        typeOpp,
        personneAgissant,
        nomPagissant,
        prenomPagissant,
        telPagissant

        from membres, comptes, operations, type_operations, users

        where extract(month from operations.dateOperation) = :mois

        and operations.idMembre = membres.id

        and operations.idTypeOperation = type_operations.id

        and operations.idCompte = comptes.id

        and operations.idUser = users.id', ['mois'=>$request->codeMois]);


        if ($retraitParMois == [])
        {
            $data = [
                'error' => true,
                'msg' => 'Pas de retrait dans ce mois'
            ];

            return $data;
        }else
        {
            $p = [];
            $i = 0;
            foreach ($retraitParMois as $value)
            {

                $p[$i]['id'] = $value->id;
                $p[$i]['idCompte'] = $value->idCompte;
                $p[$i]['numCompte'] = $value->numCompte;
                $p[$i]['dateOperation'] = $value->dateOperation;
                $p[$i]['montantOperation'] = $value->montantOperation;
                $p[$i]['idMembre'] = $value->idMembre;
                // $p[$i]['mise'] = $value->mise;
                $p[$i]['nomMembre'] = $value->nomMembre;
                $p[$i]['prenomMembre'] = $value->prenomMembre;
                $p[$i]['idUser'] = $value->idUser;
                $p[$i]['nomUser'] = $value->nomUser;
                $p[$i]['prenomUser'] = $value->prenomUser;
                $p[$i]['login'] = $value->login;
                $p[$i]['typeOperation'] = $value->typeOperation;
                $p[$i]['typeOpp'] = $value->typeOpp;
                $p[$i]['personneAgissant'] = $value->personneAgissant;
                $p[$i]['nomPagissant'] = $value->nomPagissant;
                $p[$i]['prenomPagissant'] = $value->prenomPagissant;
                $p[$i]['telPagissant'] = $value->telPagissant;

                $i++;
            }

            $data = [
                'error' => false,
                'msg' => 'Enregistrement chargé avec succès',
                'nbLigne' => $i,
                'donne' => $p
            ];
            return $data;

        }

    }

    public function retraitOperateurParMois(\Illuminate\Http\Request $request)
    {

        $retraitOperateurParMois = DB::select('select
        operations.id as id,
        operations.idCompte,
        operations.idMembre,
        Operations.idUser,
        comptes.numCompte ,
        operations.montantOperation,
        operations.dateOperation,
        membres.nomMembre,
        membres.prenomMembre,
        type_operations.typeOperation,
        users.login,
        users.nomUser,
        users.prenomUser,
        typeOpp,
        personneAgissant,
        nomPagissant,
        prenomPagissant,
        telPagissant

        from membres, comptes, operations, type_operations, users

        where extract(month from operations.dateOperation) = :mois

        and operations.idUser = :idUser

        and operations.idMembre = membres.id

        and operations.idTypeOperation = type_operations.id

        and operations.idCompte = comptes.id

        and operations.idUser = users.id', ['mois'=>$request->codeMois , 'idUser'=> $request->idUser]);

        if ($retraitOperateurParMois == [])
        {
            $data = [
                'error' => true,
                'msg' => 'Pas de retrait dans ce mois'
            ];

            return $data;
        }else
        {
            $p = [];
            $i = 0;
            foreach ($retraitOperateurParMois as $value)
            {

                $p[$i]['id'] = $value->id;
                $p[$i]['idCompte'] = $value->idCompte;
                $p[$i]['numCompte'] = $value->numCompte;
                $p[$i]['dateOperation'] = $value->dateOperation;
                $p[$i]['montantOperation'] = $value->montantOperation;
                $p[$i]['idMembre'] = $value->idMembre;
                // $p[$i]['mise'] = $value->mise;
                $p[$i]['nomMembre'] = $value->nomMembre;
                $p[$i]['prenomMembre'] = $value->prenomMembre;
                $p[$i]['idUser'] = $value->idUser;
                $p[$i]['nomUser'] = $value->nomUser;
                $p[$i]['prenomUser'] = $value->prenomUser;
                $p[$i]['login'] = $value->login;
                $p[$i]['typeOperation'] = $value->typeOperation;
                $p[$i]['typeOpp'] = $value->typeOpp;
                $p[$i]['personneAgissant'] = $value->personneAgissant;
                $p[$i]['nomPagissant'] = $value->nomPagissant;
                $p[$i]['prenomPagissant'] = $value->prenomPagissant;
                $p[$i]['telPagissant'] = $value->telPagissant;

                $i++;
            }

            $data = [
                'error' => false,
                'msg' => 'Enregistrement chargé avec succès',
                'nbLigne' => $i,
                'donne' => $p
            ];
            return $data;

        }

    }

    public function getRetraitParDateParOperateur(\Illuminate\Http\Request $req)
    {
        $retraitParDateParOp = DB::select('select
        operations.id as id,
        operations.idCompte,
        operations.idMembre,
        Operations.idUser,
        comptes.numCompte ,
        operations.montantOperation,
        operations.dateOperation,
        membres.nomMembre,
        membres.prenomMembre,
        type_operations.typeOperation,
        users.login,
        users.nomUser,
        users.prenomUser,
        typeOpp,
        personneAgissant,
        nomPagissant,
        prenomPagissant,
        telPagissant

        from membres, comptes, operations, type_operations, users

        where operations.dateOperation = :dateOp

        and operations.idUser = :idUser

        and operations.idMembre = membres.id

        and operations.idTypeOperation = type_operations.id

        and operations.idCompte = comptes.id

        and operations.idUser = users.id', ['dateOp'=>$req->dateOperation, 'idUser'=>$req->idUser]);



        if ($retraitParDateParOp == [])
        {

            $data = [
                'error' => true,
                'msg' => 'Pas de retrait à ce jour de '. $req->dateOperation
            ];

            return $data ;
        }
        else
        {

            $p = [];
            $i = 0;
            foreach ($retraitParDateParOp as $value)
            {

                $p[$i]['id'] = $value->id;
                $p[$i]['idCompte'] = $value->idCompte;
                $p[$i]['numCompte'] = $value->numCompte;
                $p[$i]['dateOperation'] = $value->dateOperation;
                $p[$i]['montantOperation'] = $value->montantOperation;
                $p[$i]['idMembre'] = $value->idMembre;
                // $p[$i]['mise'] = $value->mise;
                $p[$i]['nomMembre'] = $value->nomMembre;
                $p[$i]['prenomMembre'] = $value->prenomMembre;
                $p[$i]['idUser'] = $value->idUser;
                $p[$i]['nomUser'] = $value->nomUser;
                $p[$i]['prenomUser'] = $value->prenomUser;
                $p[$i]['login'] = $value->login;
                $p[$i]['typeOperation'] = $value->typeOperation;
                $p[$i]['typeOpp'] = $value->typeOpp;
                $p[$i]['personneAgissant'] = $value->personneAgissant;
                $p[$i]['nomPagissant'] = $value->nomPagissant;
                $p[$i]['prenomPagissant'] = $value->prenomPagissant;
                $p[$i]['telPagissant'] = $value->telPagissant;

                $i++;
            }

            $data = [
                'error' => false,
                'msg' => 'Enregistrement chargé avec succès',
                'nbLigne' => $i,
                'donne' => $p
            ];

            return $data;

        }

    }

}
