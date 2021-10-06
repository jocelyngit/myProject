<?php

session_start();
    //LES VARIABLES GLOBALES
$id = $_SESSION["identifiant"];

//echo $_SESSION["recuptest"];
        //$elementselect =0;
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
    <title>Enrégistrement d'une tâche</title>
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
                        <li><a  href="chefMesprojets.php">Mes projets</a></li>
                        <li><a  href="chefphase.php">phases</a></li>
                        <li><a class="menu-top-active" href="cheftache.php">tâches</a></li>
                        <li><a href="chefrisque.php">risques</a></li>
                        <li><a href="cheflivrable.php">livrables</a></li>
                        <li><a href="pageChefsuivi.php">suivis</a></li>
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
                <h4 class="page-head-line">Enrégistrement d'une tache</h4>
            </div>

        </div>


        <!------------------------------------------------------------- FORMULAIRES  --------------------------------------------------->


        <form enctype="multipart/form-data" class="formoid-metro-cyan" style="background-color:#FFFFFF;font-size:14px;font-family:'Open Sans','Helvetica Neue','Helvetica',Arial,Verdana,sans-serif;color:#666666;max-width:480px;min-width:150px" method="post" action="<?php $_SERVER['PHP_SELF'];?>" ><div class="title"><h2></h2></div>

            <div class="element-number"><label class="title">Numéro</label><input required class="large" type="text" min="0" max="100" name="numerotache"  value=""/></div>

            <div class="element-input"><label class="title">Nom</label><input required class="large" type="text" name="nomtache" /></div>


            <div class="element-textarea"><label class="title">Description</label><textarea required class="small" name="descriptache" cols="20" rows="5" ></textarea></div>

            <div class="element-date"><label class="title">Date de début</label><input required class="large" data-format="yyyy-mm-dd" type="date" name="datedebutT" placeholder="yyyy-mm-dd"/></div>

            <div class="element-date"><label class="title">Date de fin</label><input required class="large" data-format="yyyy-mm-dd" type="date" name="datefinT" placeholder="yyyy-mm-dd"/></div>

            <div class="element-number"><label class="title">Durée</label><input required class="large" type="text" min="0" max="100" name="duree"  value=""/></div>

            <div class="element-select"><label class="title">Etat</label><div class="large"><span><select required  name="etatT" >

                            <option value="0"></option>
                            <option value="1" >En attente</option>
                            <option value="2">En cours</option>
                            <option value="2">Clôturé</option>
                        </select><i></i></span></div></div>

            <div class="element-select" ><label class="title">Projet</label><div class="large"><span ><select required id="choixprojetT" name="choixprojetT" class="linked-select" data-target="#choixphaseT" data-source="pageAJAX.php?choixphaseT&filter=$id" >

                            <option value="0"></option>
                            <?php
                            include("connexionbase/connexion.inc.php");
                            // CREATION DE L'OBJET CONNEXION
                            $idcom = connexobjet("essaigprojet", "connexionbase/mesparam");

                            $requete = " SELECT idprojet, nomprojet
                                        FROM projet
                                         WHERE projet.idemp = $id";

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
                                    echo "<option value='$ligne[0]'>$ligne[1]</option>";

                                }
                            }
                            $result->free();
                            $idcom->close();
                            ?>

                        </select><i></i></span></div></div>

            <div class="element-select"><label class="title">Phase</label><div class="large"><span><select required   id="choixphaseT"  name="choixphaseT" >

                            <option value="0" ></option>

                        </select><i></i></span></div></div>


            <div class="submit">
                <input type="submit" value="Annuler" name="clicsubmit" onclick=" if (confirm('Annuler??') == true) { history.back()}" />
                <input type="submit" value="Valider" name="clicsubmit"/>
            </div>

        </form>
    </div>

</div>

<?php

// CREATION DE L'OBJET CONNEXION
$idcom = connexobjet("essaigprojet", "connexionbase/mesparam");

if (isset($_POST["clicsubmit"])) {

    switch ($_POST["clicsubmit"]) {
        case "Valider": {

// VERIFICATION DES CHAMPS
            if (($_POST["numerotache"] != "") && ($_POST["nomtache"] != "") && ($_POST["descriptache"] != "") && ($_POST["datedebutT"] != "") && ($_POST["datefinT"] != "") && ($_POST["choixphaseT"] != 0) && ($_POST["choixprojetT"] != 0) && ($_POST["etatT"] != 0) && ($_POST["duree"] != "")) {
                $idtache = "\N";
                $numeroT = $_POST["numerotache"];
                $nomT = $idcom->escape_string($_POST["nomtache"]);
                $descripT = $idcom->escape_string($_POST["descriptache"]);
                $datedebutT = $_POST["datedebutT"];
                $datefinT = $_POST["datefinT"];
                $duree = $_POST["duree"];
                $etatT = $_POST["etatT"];
                $choixprojetT = $_POST["choixprojetT"];
                $choixphaseT = $_POST["choixphaseT"];


// REQUETE D'INSERTION

                $requete = " INSERT INTO tache VALUES ('$idtache', '$numeroT', '$nomT', '$descripT', '$etatT', '$choixprojetT', '$choixphaseT','$datedebutT', '$datefinT', '$duree')";

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
            }
        }
    }
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

<script type="text/javascript" src="assets/js/Mesjs.js"></script>


</body>
</html>
