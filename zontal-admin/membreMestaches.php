<?php

session_start();

$id = $_SESSION["identifiant"];
?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <!--[if IE]>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <![endif]-->
    <title>Membrre-mestache</title>
    <!-- BOOTSTRAP CORE STYLE  -->
    <link href="assets/css/bootstrap.css" rel="stylesheet" />
    <!-- FONT AWESOME ICONS  -->
    <link href="assets/css/font-awesome.css" rel="stylesheet" />
    <!-- CUSTOM STYLE  -->
    <link href="assets/css/style.css" rel="stylesheet" />
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
                        <li><a href="membreMesprojet.php">Mes projets</a></li>
                        <li><a class="menu-top-active" href="membreMestaches.php">Mes taches</a></li>
                        <li><a href="membrelivrable.php">livrables</a></li>
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
                <h4 class="page-head-line">taches</h4>

            </div>

        </div>


        <!------------------------------------------------------------- Les boutons--------------------------------------------------->

        <br/>
        <br/>

        <div class="panel panel-default">
            <div class="panel-heading">
                <strong>Liste des Tâches</strong>
            </div>
            <div class="panel-body">
                <div class="table-responsive">
                    <table class="table table-striped table-bordered table-hover">

                        <!---- ECRITURE PHP RECHERCHE ET AFFICHAGE --------------------------------------------------->


                        <?php

                        include_once("connexionbase/connexion.inc.php");

                        $idcom = connexobjet("essaigprojet", "connexionbase/mesparam");

                        // Ecriture de la requête

                        $requete = " SELECT  nomtache, datedebT, datefinT, duree, nomprojet, nomphase, etatTache
                             FROM affecter, tache, projet, phases
                             WHERE affecter.idtache in(  SELECT idtache
                                                        FROM  affecter, tache, employe
                                                        WHERE  affecter.idemp = 3
                                                        AND  affecter.idemp = employe.idemp)
                                     AND tache.idprojet = projet.idprojet
                                     AND affecter.idtache = tache.idtache
                                    AND tache.idphase = phases.idphase";

                        // Envoie de la requete à la base et recuperation du resultat

                        $result = $idcom-> query($requete);
                        // verification du resultat

                        if (!$result)
                        {
                            echo " Lecture impossible";
                        }
                        else
                        {
                            // recuperation du nombre de ligne
                            $nbligne = $result->num_rows;

                            //Ecriture du résultat dans le tableau

                            echo "<thead>
                        <tr>
                            <th>Nom</th>
                            <th>Date de début</th>
                            <th>Date de fin</th>
                            <th>durée</th>
                            <th>Projet</th>
                            <th>Phase</th>
                            <th>Etat de la tâche</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        ";

                            while($ligne = $result->fetch_array(MYSQLI_ASSOC))
                            {
                                echo "<tbody>";
                                echo "<tr>";

                                // lecture ligne par ligne
                                foreach($ligne as $valeur)
                                {
                                    echo "<td>$valeur</td>";
                                }

                                echo "<td><a href='#' title='Modifier'><i class=\"fa fa-pencil\"></i></a></td>";
                                echo "<td><a href='#' title='Supprimer'><i class=\"fa fa-remove\"></i></a></td>";

                                // fermeture de la ligne
                                echo "</tr>";
                                echo "</tbody>";
                            }

                        }

                        $result->free();
                        $idcom->close();


                        ?>

                    </table>

                </div>
            </div>
        </div>


    </div>

</div>




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
</body>
</html>
