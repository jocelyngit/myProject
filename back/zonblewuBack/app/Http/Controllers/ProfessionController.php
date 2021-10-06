<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\service\ProfessionService;

class ProfessionController extends Controller
{
    //
    // variable d'injection
    protected  $ProfessionInstance;

    // Lecture des infos de la table
    public function findAll(Request $req){

        // recuperer nom de la classe
        $class = $req->classe;

        // injection
        $this->ProfessionInstance = new ProfessionService();

        $donnee = $this->ProfessionInstance->findAll($class);

        return \response()->json( $donnee, 200)->withCallback($req->input('callback'));

    }

    // Montrer un enregistrement dans les enregistrements
    public function show(Request $request)
    {
        // recupération de l'id
        $id = $request->id;

        //injection
        $this->ProfessionInstance = new ProfessionService();

        //creation de l'objet
        $objet = $this->ProfessionInstance->show($request, $id);

        //element retourné
        return \response()->json( $objet, 200)->withCallback($request->input('callback'));
    }

    // enregistrement dans la base
    // function to save in database
    public function store(Request $req)
    {
        // injection
        $this->ProfessionInstance = new ProfessionService();

        $resultat = $this->ProfessionInstance->store($req);

        return \response()->json($resultat, 201)->withCallback($req->input('callback'));
    }

    // function to update object
    public function update(Request $request)
    {
        // recherche de l'id
        $id = $request->id;

        // injection
        $this->ProfessionInstance = new ProfessionService();

        // modification
        $instanceModifie = $this->ProfessionInstance->update($request, $id);

        //return $this->profilInstance;
        return \response()->json( $instanceModifie, 201)->withCallback($request->input('callback'));
    }

    // function to delete an object
    public function destroy(Request $request)
    {
        $id = $request->id;
        //injection
        $this->ProfessionInstance = new ProfessionService();

        // suppression
         $this->ProfessionInstance->destroy($request, $id);

        //return \response()->json( $instanceSupprime, 200)->withCallback($request->input('callback'));

    }

}
