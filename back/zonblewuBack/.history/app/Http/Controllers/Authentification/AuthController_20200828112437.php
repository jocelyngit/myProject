<?php

namespace App\Http\Controllers\Authentification;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use App\User;

use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\DB;

use Validator;

class AuthController extends Controller
{
    //
    public $successStatus = 200;

    public function register(Request $request)
    {
        $input = $request->all();

        // recherche si le login existe
        $usersId = DB::table('users')

            ->select('users.id as id')

            ->where('login', '=', $input['login'])

            ->get();

            if($usersId->isEmpty())
            {
                 //$input = $request->all();

        $input['password'] = bcrypt($input['password']);

        $user = User::create($input);

        if ($user){

            $success['error'] = false;
            $success['token'] =  $user->createToken('myPclient')->accessToken;

            $success['data'] = $user;

            $success['info'] = 'Utilisateur créé avec succès';

            return response()->json(['success' =>$success] , $this->successStatus)->withCallback($request->input('callback'));
            }

        }
        else
        {
            $success['error'] = true;
            $success['msg']   = 'Login existant. Réessayez svp!!';
             # code...
             return \response()->json(['success' =>$success] , $this->successStatus)->withCallback($request->input('callback'));;
        }


    }

    // function to login our App
    public function login()
    {
        if(Auth::attempt(['login' => request('login'), 'password' => request('password')]))
        {
            $user = Auth::user();

            $success['token'] =  $user->createToken('myPclient')->accessToken;

            $success['error'] = false;

            $success['userSpecifique'] = $user;

            return response()->json(['success' => $success], $this-> successStatus)->withCallback(request()->input('callback'));
        }
        else
            {
                $success['error'] = true;

                $success['msg'] = 'Nom d\'utilisateur ou Mot de passe erroné';

            return response()->json(['success'=> $success], $this-> successStatus)->withCallback(request()->input('callback'));
        }
    }

    public function getUser()
    {
        $user = Auth::user();

        return response()->json(['success' => $user], $this->successStatus);
    }

    public function findAll(Request $req)
    {

        $users = DB::table('users')

            ->join('profils', 'users.idProfil', '=', 'profils.id')

            ->join('agences', 'users.idAgence', '=', 'agences.id')

            ->select('users.id as id','nomUser','prenomUser','login','telUser','password','profils.profil as profil','agences.agence as agence')

            ->get();

            return $users;

            /*foreach ($users as $result) {

                $success['id'] = $result->id;
                $success['nomUser'] = $result->nomUser;
                $success['prenomUser'] = $result->prenomUser;
                $success['login'] = $result->login;
                $success['telUser'] = $result->telUser;
                $success['password'] = $result->password;
                $success['profil'] = $result->profil;
                $success['agence'] = $result->agence;

            }

        // return to JSON
        return \response()->json($success)->withCallback($req->input('callback'));
        */

        //->withCallback($request->input('callback'));
    }

    /*
     * UPDATE METHODE
     */
    public function update(Request $request)
    {
        // recuperation de la classe
        $cl = $request->classe;

        // recuperation de id
        $id = $request->id;

        // package de la classe
        $packageClass = 'App\\'.$cl;

        // recuperation de l'objet spécifique au id
        $instanceSpecifique = $packageClass::find($id);

        //modification de l'instance spéecifique
        $instanceSpecifique->update($request->all());

        if ($instanceSpecifique) {
            return \response()->json([
                'error' => false,
                'msg' => $cl.' modifié avec succès!!'
            ], 200)->withCallback($request->input('callback'));
        } else {
            # code...
            return \response()->json([
                'error' => true,
                'msg' => 'Erreur!! Réessayez !!'
            ]);
        }
        # code...
    }
}
