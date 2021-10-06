<?php


namespace App\service;

use http\Client\Response;
use Illuminate\Http\Request;

class GenericService
{

    // constructeur du service gneric
    public function __construct()
    {
    }

    // function To retrieve all data

    public function findAll(string $class)
    {

        // Ajout du Package pour former la classe
        $nomClasse = 'App\\'.$class;

        // retrieve all data
        $donnee = $nomClasse::all();
        // return to JSON
        return $donnee;
    }

    public function show(\Illuminate\Http\Request $request, int $id)
    {
        // recuperation de la classe
        $nomclasse = $request->classe;

        // package de la classe
        $packageClasse = 'App\\'.$nomclasse;

        // Affichage de l'objet show
        $objet = $packageClasse::find($id);

        // element retourné
        return  \response()->json($objet, 200);
    }

    public function store(\Illuminate\Http\Request $req)
    {
        $cl = $req->classe;

        // package de la classe
        $packageClass = 'App\\'.$cl;

        $instanceClasse = $packageClass::create($req->all());

        if (is_object( $instanceClasse)) {
            //throw new \Exception('Erreur veuillez Ressayer');

            // COmmemt capturer l'erreur spécifique
            return \response()->json([
                'error' => false,
                'msg' => $cl.' créé avec succès!!'
            ], 200);
        } else {
            return \response()->json([
                        'error' => true,
                        'msg' => 'Erreur!! Réessayez !!',
            ]);
        }
    }

    // funtion for update
    public function update(Request $req, int $id)
    {
        // recuperation de la classe
        $cl = $req->classe;

        // package de la classe
        $packageClass = 'App\\'.$cl;

        // recuperation de l'objet spécifique au id
        $instanceSpecifique = $packageClass::find($id);

        //modification de l'instance spéecifique
        $instanceSpecifique->update($req->all());

        if ($instanceSpecifique) {
            return \response()->json([
                'error' => false,
                'msg' => $cl.' modifié avec succès!!'
            ], 200)->withCallback($req->input('callback'));
        } else {
            # code...
            return \response()->json([
                    'error' => true,
                    'msg' => 'Erreur!! Réessayez !!'
            ]);
        }
        # code...
    }

    // service supprimer la données
    public function destroy(Request $request, int $id)
    {
        echo $request;

        $cl = $request->classe;

        // package de la classe
        $packageClasse = 'App\\'.$cl;

        // recherche de l'objet à supprimmer
        $objet = $packageClasse::find($id);

        $objet->delete();

        //if ($objet){

            //$objet->delete();

            /*
             * return \response()->json([
                    'error' => false,
                    'msg' => $cl.' créé avec succès!!!',
            ]);
             */

        //}else{
            /*
             * return \response()->json([
                    'error' => true,
                    'msg' => 'Erreur!! Réessayez !!',
            ]);
             */

       // };

        //return \response()->json(null);
       // return json_encode(null);

    }

    }

