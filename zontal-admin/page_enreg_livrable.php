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
    <title>Enrégistrement d'un livrable</title>
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
                <!------------------
                 <strong>Email: </strong>info@yourdomain.com
                 &nbsp;&nbsp;
                 <strong>Support: </strong>+90-897-678-44

                 ------------------->
            </div>

        </div>
    </div>
</header>
<!-- HEADER END-->
<div class="navbar navbar-inverse set-radius-zero">
    <div class="container">
        <div class="navbar-header">

            <!----------------------------------------------------------------
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.html">

                <img src="assets/img/logo.png" height="80px" width="300px" />
            </a>

            ------------------------------------------------------------------>

        </div>

        <div class="left-div">
            <!---------------------------------------------------------------------------
            <div class="user-settings-wrapper">


                <ul class="nav">

                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                            <span class="glyphicon glyphicon-user" style="font-size: 25px;"></span>
                        </a>
                        <div class="dropdown-menu dropdown-settings">
                            <div class="media">
                                <a class="media-left" href="#">
                                    <img src="assets/img/64-64.jpg" alt="" class="img-rounded" />
                                </a>
                                <div class="media-body">
                                    <h4 class="media-heading">Jhon Deo Alex </h4>
                                    <h5>Developer & Designer</h5>

                                </div>
                            </div>
                            <hr />
                            <h5><strong>Personal Bio : </strong></h5>
                            Anim pariatur cliche reprehen derit.
                            <hr />
                            <a href="#" class="btn btn-info btn-sm">Full Profile</a>&nbsp; <a href="login.html" class="btn btn-danger btn-sm">Logout</a>

                        </div>
                    </li>

                </ul>

                ---------------------------------------------------------------------------------->
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
                        <li><a href="membreMesprojet.php">Mes projets</a></li>
                        <li><a href="membreMestaches.php">Mes taches</a></li>
                        <li><a class="menu-top-active" href="membrelivrable.php">livrables</a></li>
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
                <h4 class="page-head-line">Enrégistrement d'un livrable</h4>
            </div>

        </div>

        <!------------------------------------------------------------- FORMULAIRES  --------------------------------------------------->


        <form enctype="multipart/form-data" class="formoid-metro-cyan" style="background-color:#FFFFFF;font-size:14px;font-family:'Open Sans','Helvetica Neue','Helvetica',Arial,Verdana,sans-serif;color:#666666;max-width:480px;min-width:150px" method="post" action="<?php $_SERVER['PHP_SELF'];?>" ><div class="title"><h2></h2></div>

            <!--  <div class="element-input"><label class="title">Identifiant</label><input class="large" type="text" name="idclient" /></div> -->

            <div class="element-input"><label class="title">Nom</label><input required class="large" type="text" name="nom" /></div>

            <div class="element-textarea"><label class="title">Description</label><textarea required class="small" name="descripliv" cols="20" rows="5" ></textarea></div>

            <div class="element-date"><label class="title">Date d'ajout</label><input required class="large" data-format="yyyy-mm-dd" type="date" name="dateAjoutliv" placeholder="yyyy-mm-dd"/></div>

            <div class="element-select"><label class="title">Tâche</label><div class="large"><span><select required name="choixtache" >

                            <option value="0" ></option>

                        </select><i></i></span>
                </div>
            </div>

            <div class="element-file"><label class="title">Fichier joint</label><label class="large" ><div class="button">Choisir fichier</div><input type="file" class="file_input" name="fichierjoint" /><div class="file_text">aucun fichier choisi</div></label></div>



            <div class="submit">
                <input type="submit" value="Annuler" onclick=" if (confirm('Annuler??') == true) { history.back()}"/>
                <input type="submit" value="Valider"/>
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
if ( isset($_POST["nom"]) && isset($_POST["logincli"]) && isset($_POST["mpcli"]) && isset($_POST["mailcli"]) && isset($_POST["telcli"]) && ($_POST["nature"] != 0)  )
{
    $idclient = "\N";
    $nomcli = $idcom->escape_string($_POST["nom"]);
    $logincli = $idcom->escape_string($_POST["logincli"]);
    $mpcli = $idcom->escape_string($_POST["mpcli"]);
    $mailcli = $idcom->escape_string($_POST["mailcli"]);
    $telcli = $idcom->escape_string($_POST["telcli"]);
    $nature = $_POST["nature"];


// REQUETE D'INSERTION

    $requete = " INSERT INTO client VALUES ('$idclient', '$nomcli', '$logincli', '$mpcli', '$mailcli', '$telcli', '$nature')";

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
    alert(' vous êtes bien enregistré. Votre identifiant est : ". $idcom->insert_id."') </script>";
        $idcom->close();

    }
}
else
{
    echo "Formulaire à complèter";
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
