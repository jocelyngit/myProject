<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\service\DepotMarketeurService;

class DepotMarketeurController extends Controller
{
    //

    // variable d'injection
    protected  $DepMarketeurInstance;

    // Lecture des infos de la table
    public function findAll(Request $req){

        // recuperer nom de la classe
        $class = $req->classe;

        // injection
        $this->DepMarketeurInstance = new DepotMarketeurService();

        $donnee = $this->DepMarketeurInstance->findAll($class);

        return \response()->json( $donnee, 200)->withCallback($req->input('callback'));

    }

    // Montrer un enregistrement dans les enregistrements
    public function show(Request $request)
    {
        // recupération de l'id
        $id = $request->id;

        //injection
        $this->DepMarketeurInstance = new DepotMarketeurService();

        //creation de l'objet
        $objet = $this->DepMarketeurInstance->show($request, $id);

        //element retourné
        return \response()->json( $objet, 200)->withCallback($request->input('callback'));
    }

    // requete pour avoir le numéro de compte et l'identifiant

    public function infoCompteDep(Request $req)
    {

        $id = $req->id;
        // injection
        $this->DepMarketeurInstance = new DepotMarketeurService();

        $resultat = $this->DepMarketeurInstance->infoCompteDep($id);

        return \response()->json($resultat, 201)->withCallback($req->input('callback'));
    }

    // enregistrement dans la base
    // function to save in database
    public function store(Request $req)
    {
        // injection
        $this->DepMarketeurInstance = new DepotMarketeurService();

        $resultat = $this->DepMarketeurInstance->store($req);

        return \response()->json($resultat, 201)->withCallback($req->input('callback'));
    }

    // function to update object
    public function update(Request $request)
    {
        // recherche de l'id
        $id = $request->id;

        // injection
        $this->DepMarketeurInstance = new DepotMarketeurService();

        // modification
        $instanceModifie = $this->DepMarketeurInstance->update($request, $id);

        //return $this->profilInstance;
        return \response()->json( $instanceModifie, 201)->withCallback($request->input('callback'));
    }

    // function to delete an object
    public function destroy(Request $request)
    {
        $id = $request->id;
        //injection
        $this->DepMarketeurInstance = new DepotMarketeurService();

        // suppression
         $this->DepMarketeurInstance->destroy($request, $id);

        //return \response()->json( $instanceSupprime, 200)->withCallback($request->input('callback'));

    }

}
