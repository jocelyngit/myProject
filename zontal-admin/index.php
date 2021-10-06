
<?php
session_start();
$identifiant = 0;

?>


<!DOCTYPE html>
<?php
// Les variables globales
include("fonctions.php");
?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

    <meta charset="utf-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

    <meta name="description" content="" />

    <meta name="author" content="" />
    <!--[if IE]>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <![endif]-->
    <title> Connexion </title>

    <!-- BOOTSTRAP CORE STYLE  -->
    <link href="assets/css/bootstrap.css" rel="stylesheet" />

    <!-- FONT AWESOME ICONS  -->
    <link href="assets/css/font-awesome.css" rel="stylesheet" />

    <!-- CUSTOM STYLE  -->
    <link href="assets/css/style.css" rel="stylesheet" />

    <!-- FORMOID CSS -->
    <link rel="stylesheet" href="assets/formoid/formoid-metro-cyan.css" type="text/css" />



    <!-- HTML5 Shiv and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>

    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>

    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>

<!-- MENU SECTION END-->
<div class="content-wrapper">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h4 class="page-head-line">Connectez-vous</h4>

            </div>

        </div>

    <form class="formoid-metro-cyan" style="background-color:#FFFFFF;font-size:14px;font-family:'Open Sans','Helvetica Neue','Helvetica',Arial,Verdana,sans-serif;color:#666666;max-width:480px;min-width:150px" method="post" action="<?php $_SERVER["PHP_SELF"]?>" enctype="application/x-www-form-urlencoded"><div class="title"><!--<h2>Connectez-vous</h2>--></div>

        <div class="element-input" ><label class="title">Nom d'utilisateur</label><input required class="large" type="text" name="login" value="<?php if(isset($_POST["login"])) echo $_POST["login"]; ?>"/>
        </div>

        <div class="element-password"><label class="title">Mot de passe</label><input required class="large" type="password" name="password" value="" />
        </div>


        <div class="submit">
            <div style="display: block; padding: 0; float: left; margin-left: 15px; "><a href="motdepasseoublie.php" style="color: blue; " ><em>Mot de passe oublié</em></a></div>
            <input type="submit" name="clicbouton" value="Connecter"/>
        </div>

    </form>
</div>

<!------------------------------- TRAITEMENT----------------------------------------------------------------------------->


<?php


/*
 * ****************************************************
 * INCLUSION DES FICHIERS DES PARAMETRES
 * *************************************************
 * */

include("connexionbase/connexion.inc.php");

if (isset($_POST["clicbouton"])) {

    switch ($_POST["clicbouton"]) {

        case "Connecter": {

            if ((($_POST["login"]) != "") && (($_POST["password"]) != "")) {

                $recuplogin = $_POST["login"];
                $recupass = $_POST["password"];

                $idcom = connexobjet("essaigprojet", "connexionbase/mesparam");
// Ecriture de la requête
                /***************************************************
                 * RECHERCHE DANS LA TABLE EMPLOYE
                 ***************************************************
                 */

                $requete = " SELECT * FROM employe ";

// Envoie de la requete à la base et recuperation du resultat

                $result = $idcom->query($requete);
// verification du resultat
                $trouvlogin = false;
                $trvpass =0;

                if ($result) {

                    while ($ligne = $result->fetch_array(MYSQLI_NUM)) {

                        foreach ($ligne as $valeurlogin)
                        {
                            if ($valeurlogin == $recuplogin)
                            {
                                $trouvlogin = true;
                                foreach ($ligne as $valeurpass)
                                {
                                    if ($valeurpass == $recupass)
                                    {
                                        $_SESSION["identifiant"] = $ligne[0];
                                        $trvpass = 1;
                                    }
                                }
                            }

                        }
                    }

                    $result->free();


                            if (( $trouvlogin == true ) && ($trvpass !=1)) {
                                echo "<script type = text/javascript>";
                                echo "alert('Mot de passe incorrect ') </script>";
                                exit();
                            }
                            elseif (($trouvlogin == true) && ($trvpass == 1))
                            {
                                include("traitementlogin.php");
                            }
                            else if( $trouvlogin == false )
                            {
                                $trvlogcli = false;
                                $trvpasscli = 0;

                                //REQUETE CLIENT
                                $reqclient = " SELECT * FROM client";

                                $resultat = $idcom->query($reqclient);

                                if ($resultat) {
                                    while ($ligneclient = $resultat->fetch_array(MYSQLI_NUM)) {
                                        foreach($ligneclient as $logcli)
                                        {
                                            if($logcli == $recuplogin)
                                            {
                                                $trvlogcli = true;
                                                foreach ($ligneclient as $passcli)
                                                {
                                                    if ($passcli == $recupass)
                                                    {
                                                        $_SESSION["identifiant"] = $ligneclient[0];
                                                        $trvpasscli = 1;

                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                                if (($trvlogcli == true)&&($trvpasscli !=1))
                                {
                                    echo "<script type = text/javascript>";
                                    echo "alert('Mot de passe incorrect ') </script>";
                                    exit();
                                }
                                elseif (($trvlogcli == true)&&($trvpasscli == 1))
                                {
                                    if ( estclient($_SESSION["identifiant"]))
                                    {
                                        header("location:clientMesprojet.php");
                                        exit;
                                    }
                                }
                                elseif ($trvlogcli == false)
                                {
                                    echo "<script type = text/javascript>";
                                    echo "alert('Login incorrect ') </script>";
                                    exit();
                                }

                                $resultat->free();
                                $idcom->close();
                            }
                }


                }

                }
            }
    }
?>

<!-- CONTENT-WRAPPER SECTION END-->


<!-- JAVASCRIPT AT THE BOTTOM TO REDUCE THE LOADING TIME  -->

<!-- CORE JQUERY SCRIPTS -->
<script src="assets/js/jquery-1.11.1.js"></script>

<!-- BOOTSTRAP SCRIPTS  -->
<script src="assets/js/bootstrap.js"></script>

<!-- formoid SCRIPTS   -->
<script type="text/javascript" src="assets/formoid/formoid-metro-cyan.js"></script>

<script type="text/javascript" src="assets/formoid/jquery.min.js"></script>



</body>
</html>
