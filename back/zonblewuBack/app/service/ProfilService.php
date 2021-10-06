<?php


namespace App\service;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProfilService extends GenericService
{

    // Constructeur
    public function __construct()
    {
        parent::__construct();
    }

    public function getProfilById(Request $req)
    {
        $libelleProfil = DB::table('profils')

            ->select('profils.id as id','profil')

            ->where('profils.id', '=', $req->idProfil)

            ->get();

        if ($libelleProfil->isEmpty())
        {
            return \response()->json([
                'error' => true,
                'msg' => 'pas de profil pour cet utilisateur!!'
            ]);
        }
        else
        {

            return \response()->json([
                'error' => false,
                'msg' => $libelleProfil
            ]);

        }


    }

}
