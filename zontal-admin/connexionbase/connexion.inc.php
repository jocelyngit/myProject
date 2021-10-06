<?php
/*
 *  la fonction de connexion
 * */

function connexobjet($mabase, $mesparametre)
{
    //Inclusion des paramètres de connexion

    include_once($mesparametre.".inc.php");

    //Connexion au serveur

    $idcon = new mysqli(MYHOST, MYUSER, MYPASS, $mabase);

    //Affichage d'un message en cas d'erreurs

    if (!$idcon)
    {
        echo "<script type = text/javascript>";
        echo "alert(' Connexion impossible à la base') </script>";
        exit();
    }

    return $idcon;
}

?>