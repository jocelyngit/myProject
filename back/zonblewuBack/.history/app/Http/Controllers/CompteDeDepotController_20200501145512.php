<?php

namespace App\Http\Controllers;

use App\service\CompteDeDepotService;
use Illuminate\Http\Request;

class CompteDeDepotController extends Controller
{
    //

    // variable d'injection
    protected  $compteDeDepotInstance;

    // Lecture des infos de la table
    public function findAll(Request $req){

        // recuperer nom de la classe
        $class = $req->classe;

        // injection
        $this->compteDeDepotInstance = new CompteDeDepotService();

        $donnee = $this->compteDeDepotInstance->findAll($class);

        return \response()->json( $donnee, 200)->withCallback($req->input('callback'));

    }

    // Montrer un enregistrement dans les enregistrements
    public function show(Request $request)
    {
        // recupération de l'id
        $id = $request->id;

        //injection
        $this->compteDeDepotInstance = new CompteDeDepotService();

        //creation de l'objet
        $objet = $this->compteDeDepotInstance->show($request, $id);

        //element retourné
        return \response()->json( $objet, 200)->withCallback($request->input('callback'));
    }

    // enregistrement dans la base
    // function to save in database
    public function store(Request $req)
    {
        // injection
        $this->compteDeDepotInstance = new CompteDeDepotService();

        $resultat = $this->compteDeDepotInstance->store($req);

        return \response()->json($resultat, 201)->withCallback($req->input('callback'));
    }

    // function to update object
    public function update(Request $request)
    {
        // recherche de l'id
        $id = $request->id;

        // injection
        $this->compteDeDepotInstance = new CompteDeDepotService();

        // modification
        $instanceModifie = $this->compteDeDepotInstance->update($request, $id);

        //return $this->profilInstance;
        return \response()->json( $instanceModifie, 201)->withCallback($request->input('callback'));
    }

    // function to delete an object
    public function destroy(Request $request)
    {
        $id = $request->id;

        //injection
        $this->compteDeDepotInstance = new CompteDeDepotService();

        // suppression
        $instanceSupprime = $this->compteDeDepotInstance->destroy($request, $id);

        //return \response()->json( $instanceSupprime, 200)->withCallback($request->input('callback'));

    }
}
