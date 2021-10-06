<?php

namespace App\Http\Controllers;

use App\service\MembreService;
use Illuminate\Http\Request;

class MembreController extends Controller
{
    // variable d'injection
    protected  $membreInstance;

    // Lecture des infos de la table
    public function findAll(Request $req){

        // recuperer nom de la classe
        $class = $req->classe;

        // injection
        $this->membreInstance = new MembreService();

        $donnee = $this->membreInstance->findAll($class);

        return \response()->json( $donnee, 200)->withCallback($req->input('callback'));

    }

    // Montrer un enregistrement dans les enregistrements
    public function show(Request $request)
    {
        // recupération de l'id
        $id = $request->id;

        //injection
        $this->membreInstance = new MembreService();

        //creation de l'objet
        $objet = $this->membreInstance->show($request, $id);

        //element retourné
        return \response()->json( $objet, 200)->withCallback($request->input('callback'));
    }

    // enregistrement dans la base
    // function to save in database
    public function store(Request $req)
    {
        // injection
        $this->membreInstance = new MembreService();

        $resultat = $this->membreInstance->store($req);

        return \response()->json($resultat, 201)->withCallback($req->input('callback'));
    }

    // function to update object
    public function update(Request $request)
    {
        // recherche de l'id
        $id = $request->id;

        // injection
        $this->membreInstance = new MembreService();

        // modification
        $instanceModifie = $this->membreInstance->update($request, $id);

        //return $this->profilInstance;
        return \response()->json( $instanceModifie, 201)->withCallback($request->input('callback'));
    }

    // function to delete an object
    public function destroy(Request $request)
    {
        $id = $request->id;
        //injection
        $this->membreInstance = new MembreService();

        // suppression
        $instanceSupprime = $this->membreInstance->destroy($request, $id);

        return \response()->json( $instanceSupprime, 200)->withCallback($request->input('callback'));

    }
}
