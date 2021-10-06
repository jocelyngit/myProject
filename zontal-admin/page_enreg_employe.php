<?php
    session_start();
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <!--[if IE]>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <![endif]-->
    <title>Enrégidtrement d'un employé(e)</title>
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
<header>
    <div class="container">
        <div class="row">
            <div class="col-md-12">

            </div>

        </div>
    </div>
</header>
<!-- HEADER END-->
<div class="navbar navbar-inverse set-radius-zero">
    <div class="container">
        <div class="navbar-header">

        </div>

        <div class="left-div">

        </div>

    </div>
</div>



<!-- LOGO HEADER END-->
<section class="menu-section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="navbar-collapse collapse ">
                    <ul id="menu-top" class="nav navbar-nav navbar-right">
                        <li><a href="pageprojet.php">projets</a></li>
                        <li><a class="menu-top-active" href="pageEmploye.php">employes</a></li>
                        <li><a href="pageclient.php">clients</a></li>
                        <li><a href="pagephase.php">phases</a></li>
                        <li><a href="pagetache.php">tâches</a></li>
                        <li><a href="pageAdminRisq.php">risques</a></li>
                        <li><a href="pagelivrable.php">livrables</a></li>
                        <li><a href="pagemembreSuivi.php">suivis</a></li>
                        <li><a href="deconnexion.php">déconnexion</a></li>

                    </ul>
                </div>
            </div>

        </div>
    </div>
</section>

<!-- MENU SECTION END-->
<div class="content-wrapper">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h4 class="page-head-line">Enrégistrement d'un employe(e)</h4>
            </div>

        </div>
        <!------------------------------------------------------------- FORMULAIRES  --------------------------------------------------->


        <form enctype="multipart/form-data" class="formoid-metro-cyan" style="background-color:#FFFFFF;font-size:14px;font-family:'Open Sans','Helvetica Neue','Helvetica',Arial,Verdana,sans-serif;color:#666666;max-width:480px;min-width:150px" method="post" action="<?php $_SERVER['PHP_SELF'];?>" ><div class="title"><h2></h2></div>

            <div class="element-input"><label class="title">Nom</label><input required class="large" type="text" name="nomemp" value="<?php if(isset($_POST["nomemp"])) echo $_POST["nomemp"];?>" />

            </div>

            <div class="element-input"><label class="title">Prénom</label><input required class="large" type="text" name="prenomemp" value="<?php if(isset($_POST["prenomemp"])) echo $_POST["prenomemp"];?>" />

            </div>

            <div class="element-input"><label class="title">Nom d'utilisateur</label><input required class="large" type="text" name="loginemp" value="<?php if(isset($_POST["loginemp"])) echo $_POST["loginemp"];?>" />

            </div>

            <div class="element-password"><label class="title">Mot de passe</label><input required class="large" type="password" name="mpemp" />

            </div>

            <div class="element-email"><label class="title">Email</label><input required class="large" type="email" name="mailemp" value="<?php if(isset($_POST["mailemp"])) echo $_POST["mailemp"];?>" />

            </div>

            <div class="element-phone"><label class="title">Téléphone</label><input required class="large" type="tel" pattern="[+]?[\.\s\-\(\)\*\#0-9]{3,}" maxlength="24" name="telemp" value="<?php if(isset($_POST["telemp"])) echo $_POST["telemp"];?>" />

            </div>

            <div class="element-select"><label class="title">Profil</label><div class="large"><span><select required name="profil" value="<?php if(($_POST["profil"]) !=0) echo $_POST["profil"];?>" >

                            <option value="0"></option>
                            <option value="1">Administrateur</option>
                            <option value="2">Employé(e)</option>
                        </select><i></i></span>
                </div>

            </div>


            <div class="submit">
                <input type="submit" value="Annuler" name="clicsubmit" onclick=" if (confirm('Annuler??') == true) { history.back()}"/>
                <input type="submit" value="Valider" name="clicsubmit"/>
            </div>

        </form>
    </div>

</div>

<?php

// INSERTION DANS LA BASE

include_once("connexionbase/connexion.inc.php");
// CREATION DE L'OBJET CONNEXION
$idcom = connexobjet("essaigprojet", "connexionbase/mesparam");

// VERIFICATION DES CHAMPS

if (isset($_POST["clicsubmit"])){

switch ($_POST["clicsubmit"])
{
    case "Valider":
    {
if ( ($_POST["nomemp"] != "")&& ($_POST["prenomemp"] != "")&&($_POST["loginemp"] != "")&& ($_POST["mpemp"] != "")&& ($_POST["mailemp"] != "")&& ($_POST["telemp"] != "")&& ($_POST["profil"] != "0") )
{
    $idemp = "\N";
    $nomemp = $_POST["nomemp"];
    $prenomep = $_POST["prenomemp"];
    $loginemp = $_POST["loginemp"];
    $mpemp = $_POST["mpemp"];
    $mailemp = $_POST["mailemp"];
    $telemp = $_POST["telemp"];
    $profil = $_POST["profil"];


// REQUETE D'INSERTION

    $requete = " INSERT INTO employe VALUES
                    ('$idemp',
                    '$nomemp',
                    '$prenomemp',
                    '$loginemp',
                    '$mpemp',
                    '$telemp',
                     '$mailemp',
                    '$profil')";

// ENVOI DE LA REQUETE A LA BASE
    $result = $idcom->query($requete);

// VERIFICATION

    if (!$result)
    {
        echo $idcom->errno;
        echo $idcom->error;

        echo "<script type = text/javascript>
     alert(' Erreur : " .$idcom->error."') </script>";

    }
    else
    {
        echo "<script type = text/javascript>
    alert(' vous êtes bien enregistré. Votre identifiant est : ". $idcom->insert_id."')
             </script>";
        $idcom->close();

    }

}
   // crochet case valider
    }

case "Annuler":
{
    echo "<script>hitory.back()</script>";
}

//crochet switch
}

// crocher clicbouton
}

?>




<!-- CONTENT-WRAPPER SECTION END-->
<footer>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                &copy; 2018 YourCompany | By : <a href="#">DjospuntoDesign</a>
            </div>

        </div>
    </div>
</footer>

<!-- FOOTER SECTION END-->
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
