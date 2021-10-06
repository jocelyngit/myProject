<?php

namespace App\Http\Controllers;

use App\service\CommissionService;
use Illuminate\Http\Request;

class CommissionController extends Controller
{
    //

    // variable d'injection
    protected  $CommissionInstance;

    // Lecture des infos de la table
    public function findAll(Request $req){

        // recuperer nom de la classe
        $class = $req->classe;

        // injection
        $this->CommissionInstance = new CommissionService();

        $donnee = $this->CommissionInstance->findAll($class);

        return \response()->json( $donnee, 200)->withCallback($req->input('callback'));

    }

    // Montrer un enregistrement dans les enregistrements
    public function show(Request $request)
    {
        // recupération de l'id
        $id = $request->id;

        //injection
        $this->CommissionInstance = new CommissionService();

        //creation de l'objet
        $objet = $this->CommissionInstance->show($request, $id);

        //element retourné
        return \response()->json( $objet, 200)->withCallback($request->input('callback'));
    }

    // enregistrement dans la base
    // function to save in database
    public function store(Request $req)
    {
        // injection
        $this->CommissionInstance = new CommissionService();

        $resultat = $this->CommissionInstance->store($req);

        return \response()->json($resultat, 201)->withCallback($req->input('callback'));
    }

    // function to update object
    public function update(Request $request)
    {
        // recherche de l'id
        $id = $request->id;

        // injection
        $this->CommissionInstance = new CommissionService();

        // modification
        $instanceModifie = $this->CommissionInstance->update($request, $id);

        //return $this->profilInstance;
        return \response()->json( $instanceModifie, 201)->withCallback($request->input('callback'));
    }

    // function to delete an object
    public function destroy(Request $request)
    {
        $id = $request->id;
        //injection
        $this->CommissionInstance = new CommissionService();

        // suppression
        $this->CommissionInstance->destroy($request, $id);

        //return \response()->json( $instanceSupprime, 200)->withCallback($request->input('callback'));

    }

    public function commissionParMois(Request $req){

        // recuperer nom de la classe
        $class = $req->classe;

        // injection
        $this->CommissionInstance = new CommissionService();

        $donnee = $this->CommissionInstance->commissionParMois($req);

        return \response()->json( $donnee, 200)->withCallback($req->input('callback'));

    }

    public function commissionAgentParMois(Request $req){

        // recuperer nom de la classe
        $class = $req->classe;

        // injection
        $this->CommissionInstance = new CommissionService();

        $donnee = $this->CommissionInstance->commissionAgentParMois($req);

        return \response()->json( $donnee, 200)->withCallback($req->input('callback'));

    }
}
