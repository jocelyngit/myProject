<?php

/*
 *
 * demarrage de la session
 *
 * */
//session_start();

/*
 * Inclusion des fonctions.php
 * */

ob_start();

$id = $_SESSION["identifiant"];

$idselection = $_SESSION["idchoixprojplan"];

/*
 * Controles
 *
 * */

    if (estAdmin($id))
    {
        header("location:pageprojet.php");
       // exit;
    }
    elseif (estchef($id))
    {
        header("location:chefMesprojets.php");
        //exit;
    }
    elseif (estmembre($id))
    {
        header("location:membreMesprojet.php");
        //exit;
    }

    elseif( estclient($id))
    {
        header("location:clientMesprojet.php");
        //exit;
    }


?>
<?php
ob_end_clean();
?>
