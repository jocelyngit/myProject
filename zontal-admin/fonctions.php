<?php
/*
 * **********************************
 * Démarrage de la session
 * */

//session_start();


/*
 * *********************************
 * INCLUSION
 * ********************************
 * */

//include("connexionbase/connexion.inc.php");
// recupeeration des variable globals
// Déclaraton des variables pour stockage

/*
 * ********************************
 * Définition de la fonction est admin
 * ********************************
  */
function estAdmin($param)
{
    // Création de l'objet de conexion
    $idcomadmin = connexobjet("essaigprojet", "connexionbase/mesparam");

    // requete
    $requete = (" SELECT profil
                FROM employe
                WHERE idemp = $param");

    $resultatadmin = $idcomadmin->query($requete);

    while($ligne = $resultatadmin->fetch_array(MYSQLI_NUM))
    {

    if ($ligne[0] == "Administrateur")
    {
        return true;
        break;
    }
    else
    {
        return false;
        break;
    }
    }

   $resultatadmin->free();
    $idcomadmin->close();

}



/*
 * **********************************************
 * Définition de la fonction est membre
 * ***********************************
 * */


function estmembre($param)
{
    $idcomembre = connexobjet("essaigprojet", "connexionbase/mesparam");

    // requete
    $requete = (" SELECT DISTINCT idemp, idtache
                FROM affecter, tache, employe
                WHERE affecter.idemp = $param");

    //RECHERCHE
    $resultatmembre = $idcomembre->query($requete);

    if ($resultatmembre)
    {
        return true;

    }
    else
    {
        return false;
    }

    $resultatmembre->free();
    $idcomembre->close();

}

/**
 ******************************************
 * Définition de la fonction estchef
 *
 */


function estchef($param)
{
    $idcomchef = connexobjet("essaigprojet", "connexionbase/mesparam");

    // requete
    $requete = (" SELECT idprojet
                FROM projet, employe
                WHERE projet.idemp = $param");

    //RECHERCHE
    $resultatchef = $idcomchef->query($requete);

    if ($resultatchef)
    {
        return true;
    }
    else
    {
        return false;
    }

    // LIBERATion des objets
    $resultatchef->free();
    $idcomchef->close();

}


function estclient($param)
{
    $idcomclient = connexobjet("essaigprojet", "connexionbase/mesparam");

    // requete
    $requete = (" SELECT idprojet
                  FROM client, projet
                  WHERE projet.idclient = $param ");

    $resultatclient = $idcomclient->query($requete);

    if ($resultatclient)
    {
        return true;

    }
    else
    {
        return false;
    }

    $resultatclient->free();
    $idcomclient->close();

}

?>