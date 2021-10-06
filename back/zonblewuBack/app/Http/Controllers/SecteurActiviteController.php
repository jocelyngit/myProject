<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\service\SecteurActiviteService;

class SecteurActiviteController extends Controller
{
    //
    // variable d'injection
    protected  $SecActiviteInstance;

    // Lecture des infos de la table
    public function findAll(Request $req){

        // recuperer nom de la classe
        $class = $req->classe;

        // injection
        $this->SecActiviteInstance = new SecteurActiviteService();

        $donnee = $this->SecActiviteInstance->findAll($class);

        return \response()->json( $donnee, 200)->withCallback($req->input('callback'));

    }

    // Montrer un enregistrement dans les enregistrements
    public function show(Request $request)
    {
        // recupération de l'id
        $id = $request->id;

        //injection
        $this->SecActiviteInstance = new SecteurActiviteService();

        //creation de l'objet
        $objet = $this->SecActiviteInstance->show($request, $id);

        //element retourné
        return \response()->json( $objet, 200)->withCallback($request->input('callback'));
    }

    // enregistrement dans la base
    // function to save in database
    public function store(Request $req)
    {
        // injection
        $this->SecActiviteInstance = new SecteurActiviteService();

        $resultat = $this->SecActiviteInstance->store($req);

        return \response()->json($resultat, 201)->withCallback($req->input('callback'));
    }

    // function to update object
    public function update(Request $request)
    {
        // recherche de l'id
        $id = $request->id;

        // injection
        $this->SecActiviteInstance = new SecteurActiviteService();

        // modification
        $instanceModifie = $this->SecActiviteInstance->update($request, $id);

        //return $this->profilInstance;
        return \response()->json( $instanceModifie, 201)->withCallback($request->input('callback'));
    }

    // function to delete an object
    public function destroy(Request $request)
    {
        $id = $request->id;
        //injection
        $this->SecActiviteInstance = new SecteurActiviteService();

        // suppression
         $this->SecActiviteInstance->destroy($request, $id);

        //return \response()->json( $instanceSupprime, 200)->withCallback($request->input('callback'));

    }

}
