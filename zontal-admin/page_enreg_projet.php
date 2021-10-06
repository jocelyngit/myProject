<?
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
    <title>Enrégistrement d'un projet</title>
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
                        <li><a class="menu-top-active" href="pageprojet.php">projets</a></li>
                        <li><a href="pageEmploye.php">employés</a></li>
                        <li><a href="pageclient.php">clients</a></li>
                        <li><a href="pagephase.php">phases</a></li>
                        <li><a href="pagetache.php">tâches</a></li>
                        <li><a href="pageAdminRisq.php"">risques</a></li>
                        <li><a href="pagelivrable.php">livrables</a></li>
                        <li><a href="pageAminsuivi.php">suivis</a></li>
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
                <h4 class="page-head-line">Enregistrement d'un projet</h4>
            </div>

        </div>


        <!------------------------------------------------------------- FORMULAIRES  --------------------------------------------------->


        <form enctype="multipart/form-data" class="formoid-metro-cyan" style="background-color:#FFFFFF;font-size:14px;font-family:'Open Sans','Helvetica Neue','Helvetica',Arial,Verdana,sans-serif;color:#666666;max-width:480px;min-width:150px" method="post" action="<?php $_SERVER['PHP_SELF'];?>" ><div class="title"><h2></h2></div>

            <div class="element-input"><label class="title">Nom</label><input required class="large" type="text" name="nom" /></div>

            <div class="element-textarea"><label class="title">Description</label><textarea required class="small" name="descriprojet" cols="20" rows="5" ></textarea></div>

            <div class="element-date"><label class="title">Date de début</label><input required class="large" data-format="yyyy-mm-dd" type="date" name="datedebutproj" placeholder="yyyy-mm-dd"/></div>

            <div class="element-select"><label class="title">Etat du projet</label><div class="large"><span><select required name="etatprojet" value ="0">

                            <option value="0"></option>
                            <option value="1">En attente</option>
                            <option value="2">En cours</option>
                            <option value="3">clôturé</option>
                            </select><i></i></span></div></div>

            <div class="element-select"><label class="title">Type de projet</label><div class="large"><span><select required name="typeprojet" >

                        <option value="0"></option>
                        <option value="1">Interne</option>
                        <option value="2">Externe</option>
                        </select><i></i></span>
                </div></div>

            <div class="element-input"><label class="title">Budgets</label><input required class="large" type="text" name="budget" placeholder="en FCFA" /></div>

            <div class="element-select"><label class="title">Chef de projet</label><div class="large"><span><select required name="choixchefdeprojet" >

                            <option value="0"></option>
                            <?php
                            include("connexionbase/connexion.inc.php");
                            // CREATION DE L'OBJET CONNEXION
                            $idcom = connexobjet("essaigprojet", "connexionbase/mesparam");

                            $requete = " SELECT idemp, nomemp, prenomemp
                                          FROM employe ";

                            $result = $idcom->query($requete);
                            // verification du resultat
                            if (!$result)
                            {
                                echo " Lecture impossible";
                            }
                            else
                            {
                                // recuperation du nombre de ligne
                                $nbligne = $result->num_rows;
                                //parcours
                                while($ligne = $result->fetch_array(MYSQLI_NUM)){
                                    echo "<option value='$ligne[0]'>$ligne[1] $ligne[2]</option>";

                                }
                            }
                            $result->free();
                            $idcom->close();
                            ?>


                        </select><i></i></span></div></div>

            <div class="element-select"><label class="title">client</label><div class="large"><span><select required name="choixclient" >

                            <option value="0" ></option>
                            <?php

                            // CREATION DE L'OBJET CONNEXION
                            $objetconx = connexobjet("essaigprojet", "connexionbase/mesparam");

                            $requeteclient = " SELECT idclient, nomclient
                                          FROM client ";

                            $resultclient = $objetconx->query($requeteclient);
                            // verification du resultat
                            if (!$resultclient)
                            {
                                echo " Lecture impossible";
                            }
                            else
                            {
                                // recuperation du nombre de ligne

                                //parcours
                                while($ligneclient = $resultclient->fetch_array(MYSQLI_NUM)){

                                    echo "<option value='$ligneclient[0]'>$ligneclient[1]</option>";
                                }
                            }
                            $resultclient->free();
                            $objetconx->close();
                            ?>

                        </select><i></i></span></div></div>


            <div class="submit">
                <input type="submit" value="Annuler" name="clic" onclick=" if (confirm('Annuler??') == true) { history.back()}"/>
                <input type="submit" value="Valider" name="clic"/>
            </div>

        </form>
    </div>

</div>
        <!-------------------- TRAITEMENT------------------------------->
<?php

// INSERTION DANS LA BASE

// CREATION DE L'OBJET CONNEXION
$idcom = connexobjet("essaigprojet", "connexionbase/mesparam");

// VERIFICATION DES CHAMPS
if ( isset($_POST["clic"]) ) {
    switch ($_POST["clic"]) {
        case "Valider": {
            if (isset($_POST["nom"]) && isset($_POST["descriprojet"]) && isset($_POST["budget"]) && isset($_POST["datedebutproj"]) && ($_POST["etatprojet"] != 0) && ($_POST["choixchefdeprojet"] != 0) && ($_POST["choixclient"] != 0) && ($_POST["typeprojet"] != 0)) {
                $idprojet = "\N";
                $nomprojet = $idcom->escape_string($_POST["nom"]);
                $descriprojet = $idcom->escape_string($_POST["descriprojet"]);
                $typeprojet = $_POST["typeprojet"];
                $budget = $idcom->escape_string($_POST["budget"]);
                $datedebutpro = $_POST["datedebutproj"];
                $etatprojet = $_POST["etatprojet"];
                $choixchefprojet = $_POST["choixchefdeprojet"];
                $choixclient = $_POST["choixclient"];


// REQUETE D'INSERTION

                $requete = " INSERT INTO projet
                VALUES ('$idprojet',
                        '$nomprojet',
                        '$descriprojet',
                        '$datedebutpro',
                        '$etatprojet',
                        '$typeprojet',
                        '$budget',
                        '$choixclient',
                        '$choixchefprojet')";

// ENVOI DE LA REQUETE A LA BASE
                $result = $idcom->query($requete);

// VERIFICATION

                if (!$result) {
                    echo $idcom->errno;
                    echo $idcom->error;

                    echo "<script type = text/javascript>
     alert(' Erreur : " . $idcom->error . "') </script>";

                } else {
                    echo "<script type = text/javascript>
    alert(' vous êtes bien enregistré. Votre identifiant est : " . $idcom->insert_id . "') </script>";

                    $idcom->close();

                }
            } else {
                echo "Formulaire à complèter";
            }
        }
// autre case
        case "Annuler": {

        }
    }
}
?>




<!-- CONTENT-WRAPPER SECTION END-->
<footer>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                &copy; 2015 YourCompany | By : <a href="http://www.designbootstrap.com/" target="_blank">DesignBootstrap</a>
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