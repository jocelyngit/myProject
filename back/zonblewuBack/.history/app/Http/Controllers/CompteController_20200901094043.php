<?php

namespace App\Http\Controllers;

use App\service\CompteService;
use Illuminate\Http\Request;

class CompteController extends Controller
{
    //

    // variable d'injection
    protected  $compteInstance;

    // Lecture des infos de la table
    public function findAll(Request $req){

        // recuperer nom de la classe
        $class = $req->classe;

        // injection
        $this->compteInstance = new CompteService();

        $donnee = $this->compteInstance->findAll($class);

        return \response()->json( $donnee, 200)->withCallback($req->input('callback'));

    }

    // Montrer un enregistrement dans les enregistrements
    public function show(Request $request)
    {
        // recupération de l'id
        $id = $request->id;

        //injection
        $this->compteInstance = new CompteService();

        //creation de l'objet
        $objet = $this->compteInstance->show($request, $id);

        //element retourné
        return \response()->json( $objet, 200)->withCallback($request->input('callback'));
    }

    public function infoCompte(Request $req)
    {

        $numeroCompte = $req->numCompte;
        // injection
        $this->compteInstance = new CompteService();

        $resultat = $this->compteInstance->infoCompte($numeroCompte);

        return \response()->json($resultat, 201)->withCallback($req->input('callback'));
    }

    // enregistrement dans la base
    // function to save in database
    public function store(Request $req)
    {
        // injection
        $this->compteInstance = new CompteService();

        $resultat = $this->compteInstance->store($req);

        return \response()->json($resultat, 201)->withCallback($req->input('callback'));
    }

    // function to update object
    public function update(Request $request)
    {
        // recherche de l'id
        $id = $request->id;

        // injection
        $this->compteInstance = new CompteService();

        // modification
        $instanceModifie = $this->compteInstance->update($request, $id);

        //return $this->profilInstance;
        return \response()->json( $instanceModifie, 201)->withCallback($request->input('callback'));
    }

    // function to delete an object
    public function destroy(Request $request)
    {
        $id = $request->id;

        //injection
        $this->compteInstance = new CompteService();

        // suppression
        $instanceSupprime = $this->compteInstance->destroy($request, $id);

        return \response()->json( $instanceSupprime, 200)->withCallback($request->input('callback'));

    }

    // retrieve la situation de tous les membres
    public function soldeCompte(Request $req)
    {

        //$numeroCompte = $req->numCompte;
        // injection
        $this->compteInstance = new CompteService();

        $resultat = $this->compteInstance->soldeCompte();

        return \response()->json($resultat, 201)->withCallback($req->input('callback'));
    }
}
