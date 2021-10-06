<?php


namespace App\service;


use Illuminate\Support\Facades\DB;

class CommissionService extends GenericService
{
    // Constructeur

    public function __construct()
    {
        parent::__construct();
    }

    public function commissionParMois(\Illuminate\Http\Request $request)
    {

        $comParMois = DB::select('select distinct commissions.id as id, dateCommission, montantCommission, membres.id as idMembre, membres.nomMembre as nomMembre,membres.prenomMembre as prenomMembre, agent_marketings.id as idAgent, agent_marketings.nomAg as nomAg, agent_marketings.prenomAg as prenomAg
        from commissions, membres, agent_marketings
        where extract(month from commissions.dateCommission) = :mois
        and commissions.idMembre = membres.id
        and commissions.idAgent = agent_marketings.id', ['mois' => $request->codeMois]);

        if ($comParMois == [])
        {
            $data = [
                'error' => true,
                'msg' => 'Pas de commission à ce mois'
            ];

            return $data;
        }else
        {
            $p = [];
            $i = 0;
            foreach ($comParMois as $value)
            {

                $p[$i]['id'] = $value->id;
               // $p[$i]['idCompte'] = $value->idCompte;
               // $p[$i]['numCompte'] = $value->numCompte;
                $p[$i]['dateCommission'] = $value->dateCommission;
                $p[$i]['montantCommission'] = $value->montantCommission;
                $p[$i]['idMembre'] = $value->idMembre;
                //$p[$i]['mise'] = $value->mise;
                $p[$i]['nomMembre'] = $value->nomMembre;
                $p[$i]['prenomMembre'] = $value->prenomMembre;
                $p[$i]['idAgent'] = $value->idAgent;
                $p[$i]['nomAg'] = $value->nomAg;
                $p[$i]['prenomAg'] = $value->prenomAg;

                $i++;
            }

            $data = [
                'error' => false,
                'msg' => 'Enregistrement chargé avec succès',
                'nbLigne' => $i,
                'donne' => $p
            ];
            return $data;

        }

    }

    public function commissionAgentParMois(\Illuminate\Http\Request $request)
    {

        $comAgentParMois = DB::select('select distinct commissions.id as id, commissions.dateCommission as dateCommission, commissions.montantCommission as montantCommission, membres.id as idMembre, membres.mise as mise, membres.nomMembre as nomMembre,membres.prenomMembre as prenomMembre, agent_marketings.id as idAgent, agent_marketings.nomAg as nomAg, agent_marketings.prenomAg as prenomAg
        from commissions, membres, agent_marketings
        where extract(month from commissions.dateCommission) = :mois
        and agent_marketings.id = :idAgent
        and commissions.idMembre = membres.id
        and commissions.idAgent = agent_marketings.id', ['mois' => $request->codeMois, 'idAgent'=> $request->idAgent ]);

        if ($comAgentParMois == [])
        {
            $data = [
                'error' => true,
                'msg' => 'Pas de cotisation à ce mois'
            ];

            return $data;
        }else
        {
            $p = [];
            $i = 0;
            foreach ($comAgentParMois as $value)
            {

                $p[$i]['id'] = $value->id;
                //$p[$i]['idCompte'] = $value->idCompte;
                //$p[$i]['numCompte'] = $value->numCompte;
                $p[$i]['dateCommission'] = $value->dateCommission;
                $p[$i]['montantCommission'] = $value->montantCommission;
                $p[$i]['idMembre'] = $value->idMembre;
                //$p[$i]['mise'] = $value->mise;
                $p[$i]['nomMembre'] = $value->nomMembre;
                $p[$i]['prenomMembre'] = $value->prenomMembre;
                $p[$i]['idAgent'] = $value->idAgent;
                $p[$i]['nomAg'] = $value->nomAg;
                $p[$i]['prenomAg'] = $value->prenomAg;

                $i++;
            }

            $data = [
                'error' => false,
                'msg' => 'Enregistrement chargé avec succès',
                'nbLigne' => $i,
                'donne' => $p
            ];
            return $data;

        }

    }
}
