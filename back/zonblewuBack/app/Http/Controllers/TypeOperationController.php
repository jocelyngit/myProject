<?php

namespace App\Http\Controllers;

use App\service\GenericService;

use App\service\TypeOperationService;
use Illuminate\Http\Request;

use  App\TypeOperation;
use phpDocumentor\Reflection\DocBlock\Tags\Param;

class TypeOperationController extends Controller
{

    // variable d'injection
    protected  $typeOperationInstance;

    // Lecture des infos de la table
    public function findAll(Request $req){

     // recuperer nom de la classe
        $class = $req->classe;

        // injection
        $this->typeOperationInstance = new TypeOperationService();

        $donnee = $this->typeOperationInstance->findAll($class);

        return \response()->json( $donnee, 200)->withCallback($req->input('callback'));

    }

    // Montrer un enregistrement dans les enregistrements
    public function show(Request $request)
    {
        // recupération de l'id
        $id = $request->id;

        //injection
        $this->typeOperationInstance = new TypeOperationService();

        //creation de l'objet
        $objet = $this->typeOperationInstance->show($request, $id);

        //element retourné
        return \response()->json( $objet, 200)->withCallback($request->input('callback'));
    }

    // enregistrement dans la base
    // function to save in database
    public function store(Request $req)
    {
        // injection
        $this->typeOperationInstance = new TypeOperationService();

        $resultat = $this->typeOperationInstance->store($req);

        return response()->json($resultat, 201)->withCallback($req->input('callback'));
    }

    // function to update object
    public function update(Request $request)
    {
        // recherche de l'id
        $id = $request->id;

        // injection
        $this->typeOperationInstance = new TypeOperationService();

        // modification
        $instanceModifie = $this->typeOperationInstance->update($request, $id);

        //return
        return response()->json($instanceModifie, 200)->withCallback($request->input('callback'));
    }

    // function to delete an object
    public function destroy(Request $request)
    {
        $id = $request->id;

        //injection
        $this->typeOperationInstance = new TypeOperationService();

        // suppression
        $this->typeOperationInstance->destroy($request, $id);

        //return response()->json(null, 204)->withCallback($request->input('callback'));
    }


}
