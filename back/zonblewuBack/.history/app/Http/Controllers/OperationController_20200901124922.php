<?php

namespace App\Http\Controllers;

use App\service\OperationService;
use Illuminate\Http\Request;

class OperationController extends Controller
{
    //

    // variable d'injection
    protected  $operationInstance;

    // Lecture des infos de la table
    public function findAll(Request $req){

        // recuperer nom de la classe
        $class = $req->classe;

        // injection
        $this->operationInstance = new OperationService();

        $donnee = $this->operationInstance->findAll($class);

        return \response()->json( $donnee, 200)->withCallback($req->input('callback'));

    }

    // Montrer un enregistrement dans les enregistrements
    public function show(Request $request)
    {
        // recupération de l'id
        $id = $request->id;

        //injection
        $this->operationInstance = new OperationService();

        //creation de l'objet
        $objet = $this->operationInstance->show($request, $id);

        //element retourné
        return \response()->json( $objet, 200)->withCallback($request->input('callback'));
    }

    // enregistrement dans la base
    // function to save in database
    public function store(Request $req)
    {
        // injection
        $this->operationInstance = new OperationService();

        $resultat = $this->operationInstance->store($req);

        return \response()->json($resultat, 201)->withCallback($req->input('callback'));
    }

    // function find compte info for Retrait

    public function infoComptePourRetrait(Request $request)
    {
        // récupération du numéro de compte
        $numeroCompte = $request->numCompte;

        $this->operationInstance = new OperationService();

        $resultat = $this->operationInstance->infoCompteRetrait($numeroCompte);

        return \response()->json($resultat, 201)->withCallback($request->input('callback'));
    }

    // function to update object
    public function update(Request $request)
    {
        // recherche de l'id
        $id = $request->id;

        // injection
        $this->operationInstance = new OperationService();

        // modification
        $instanceModifie = $this->operationInstance->update($request, $id);

        //return $this->profilInstance;
        return \response()->json( $instanceModifie, 201)->withCallback($request->input('callback'));
    }

    // function to delete an object
    public function destroy(Request $request)
    {
        $id = $request->id;
        //injection
        $this->operationInstance = new OperationService();

        // suppression
        $instanceSupprime = $this->operationInstance->destroy($request, $id);

        return \response()->json( $instanceSupprime, 200)->withCallback($request->input('callback'));

    }

    public function allRetrait(Request $request)
    {
        // récupération du numéro de compte
        //$numeroCompte = $request->numCompte;

        $this->operationInstance = new OperationService();

        $resultat = $this->operationInstance->allRetrait();

        return \response()->json($resultat, 201)->withCallback($request->input('callback'));
    }

}
