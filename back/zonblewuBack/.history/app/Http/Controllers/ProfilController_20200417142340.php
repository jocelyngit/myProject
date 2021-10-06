<?php

namespace App\Http\Controllers;

use App\service\ProfilService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Request as FacadesRequest;

class ProfilController extends Controller
{
    //

    // variable d'injection
    protected  $profilInstance;

    // Lecture des infos de la table
    public function findAll(Request $req){

        // recuperer nom de la classe
        $class = $req->classe;

        // injection
        $this->profilInstance = new ProfilService();

        $donnee = $this->profilInstance->findAll($class);

        return response()->json( $donnee, 200)->withCallback($req->input('callback'));

    }

    // Montrer un enregistrement dans les enregistrements
    public function show(Request $request)
    {

        //injection
        $this->profilInstance = new ProfilService();

        //creation de l'objet
        $objet = $this->profilInstance->show($request);

        //element retourné
        return \response()->json( $objet, 200)->withCallback($request->input('callback'));
    }

    // enregistrement dans la base
    // function to save in database
    public function store(Request $req)
    {
        // injection
        $this->profilInstance = new ProfilService();

        $resultat = $this->profilInstance->store($req);

        return response()->json($resultat, 201)->withCallback($req->input('callback'));
    }

    // function to update object
    public function update(Request $request)
    {
        // recherche de l'id
        $id = $request->id;

        // injection
        $this->profilInstance = new ProfilService();

        // modification
        $instanceModifie = $this->profilInstance->update($request, $id);

        //return $this->profilInstance;
        return response()->json( $instanceModifie, 200)->withCallback($request->input('callback'));
    }

    // function to delete an object
    public function destroy(Request $request)
    {
        $id = $request->id;
        //injection
        $this->profilInstance = new ProfilService();

        // suppression
        $instanceSupprime = $this->profilInstance->destroy($request, $id);

        //return  $instanceSupprime;

        //return  $instanceSupprime;

             //->withCallback($request->input('callback'));

             //return $instanceSupprime;

            // \response()->header_remove()->json

            return response()->json( $instanceSupprime, 200)->withCallback($request->input('callback'));

            /*return $data =  [
                  'status' => 200,
                   'error' => false,
                   'msg' => $instanceSupprime,
              ];
              */
    }

}
