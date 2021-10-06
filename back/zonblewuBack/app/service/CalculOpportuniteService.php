<?php


namespace App\service;


use Illuminate\Http\Request;

class CalculOpportuniteService
{
    /*
     *  Classe CalculOpportunite pour calculer les montants d'une mise
     * qu'obtiendrai un client aucours du mois ou de l'année
     */

    /*
     * Constructeur du service
     */
    public function __construct()
    {
    }

    public function calcul(int $mise){

        /*
         * @montant total
         */

        $oppCT = ($mise * 7 * 30 )/ (20);

        $oppMT = ($mise * 3 * 30 )/ (20);

        $oppLT = ($mise * 10 * 30 )/ (20);

        return response()->json([
            'data' => [
                'oppCT' => $oppCT,
                'oppMT' => $oppMT,
                'oppLT' => $oppLT
            ]
        ], 200);

    }

}
