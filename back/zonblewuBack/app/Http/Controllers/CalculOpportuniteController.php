<?php

namespace App\Http\Controllers;

use App\service\CalculOpportuniteService;
use Illuminate\Http\Request;

class CalculOpportuniteController extends Controller
{
    /*
     * @controlleur pour retrieve les donnés du service
     */

    /*
     * variable dans laquelle l'instance sera crééé
     */
    protected $instanceCalculOpportunite;

    public function retrieve(Request $request)
    {
        // recupération de la mise
        $mise = $request->mise;

        $this->instanceCalculOpportunite = new CalculOpportuniteService();

        $resultat = $this->instanceCalculOpportunite->calcul($mise);

        return response()->json($resultat, 200)->withCallback($request->input('callback'));

    }

}
