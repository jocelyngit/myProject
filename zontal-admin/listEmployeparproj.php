
<?php
/*
 *
 * Demarrage de la seesion
 * */
session_start();

$id = $_SESSION["identifiant"];
$idchoixprojlistemp = $_SESSION["idchoixprojlistemp"];
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
    <title>Liste des employés par projet</title>
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
                        <li><a  href="pageprojet.php">projets</a></li>
                        <li><a class="menu-top-active" href="pageEmploye.php">employés</a></li>
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
                <h4 class="page-head-line">Liste des employes par projet</h4>

            </div>

        </div>

        <!------------------------------------------------------------- Les boutons--------------------------------------------------->

       <!-- <a href="page_enreg_projet.php"><button class="btn btn-primary"><i class="fa fa-print "></i> Imprimer </button></a>
        <br/>-->
        <br/>

        <div class="panel panel-default">
            <div class="panel-heading">
                <strong>Liste des employés</strong>
            </div>
            <div class="panel-body">
                <div class="table-responsive">
                    <table class="table table-striped table-bordered table-hover">

                        <!---- ECRITURE PHP RECHERCHE ET AFFICHAGE --------------------------------------------------->


                        <?php

                        include_once("connexionbase/connexion.inc.php");

                        $idcom = connexobjet("essaigprojet", "connexionbase/mesparam");

                        // Ecriture de la requête

                        $requete = " SELECT DISTINCT nomemp, prenomemp,telemp, mailemp, nomprojet
                                    FROM employe, projet, affecter, tache
                                    WHERE affecter.idtache IN  (SELECT idtache
                                                                fROM tache, projet
                                                                  WHERE tache.idprojet = $idchoixprojlistemp )
                                    AND affecter.idemp = employe.idemp
                                    AND  tache.idprojet = projet.idprojet";

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
                            <th>Prénom</th>
                            <th>Téléphone</th>
                            <th>email</th>
                            <th>Projet</th>

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
