
<?php
/*
 *
 * Demarrage de la seesion
 * */
session_start();

$id = $_SESSION["identifiant"];
$idchoixemplistproj = $_SESSION["idchoixemplistproj"];
//echo $idchoixemplistproj;

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
    <title>Liste des projets-par employé</title>
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
                        <li><a class="menu-top-active" href="pageprojet.php">projets</a></li>
                        <li><a href="pageEmploye.php">employés</a></li>
                        <li><a href="pageclient.php">clients</a></li>
                        <li><a href="pagephase.php">phases</a></li>
                        <li><a href="pagetache.php">tâches</a></li>
                        <li><a href="pageAdminRisq.php"">risques</a></li>
                        <li><a href="pagelivrable.php">livrables</a></li>
                        <li><a href="#">suivis</a></li>
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
                <h4 class="page-head-line">Liste des projets par employe</h4>

            </div>

        </div>

        <!------------------------------------------------------------- Les boutons--------------------------------------------------->

       <!-- <div id="divimpression" class="divimpression" style="@media print { .divimpression {visibility: hidden}}">
        <button class="btn btn-primary" onclick="imprimer_page()" type="submit" id="impression" name="impression" style="@media print { #impression {display: none}}"><i class="fa fa-print "></i> Imprimer </button>
        </div>-->
        <br/>

        <div class="panel panel-default">
            <div class="panel-heading">
                <strong>Liste des projets</strong>
            </div>
            <div class="panel-body">
                <div class="table-responsive">
                    <table class="table table-striped table-bordered table-hover">

                        <!---- ECRITURE PHP RECHERCHE ET AFFICHAGE --------------------------------------------------->


                        <?php

                        include_once("connexionbase/connexion.inc.php");

                        $idcom = connexobjet("essaigprojet", "connexionbase/mesparam");

                        // Ecriture de la requête

                        $requete = " SELECT DISTINCT nomprojet, descriptionpro, nomemp, prenomemp
                                     FROM projet, employe, tache, affecter
                                    WHERE tache.idprojet IN  ( SELECT DISTINCT idprojet
                                                                fROM affecter, tache
                                                                  WHERE affecter.idemp = $idchoixemplistproj
                                                                   AND  affecter.idtache = tache.idtache
                                                                     AND  affecter.idemp = employe.idemp)
                                    /*AND  affecter.idemp = employe.idemp*/
                                     AND tache.idprojet = projet.idprojet";

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
                            <th>Projets</th>
                            <th>Description</th>
                            <th>Employés</th>

                        </tr>
                        </thead>
                        ";

                            while($ligne = $result->fetch_array(MYSQLI_NUM))
                            {
                                $i = 0;
                                echo "<tbody>";
                                echo "<tr>";

                                // lecture ligne par ligne
                                foreach($ligne as $valeur)
                                {
                                    if ($i == 2){
                                        echo "<td>$valeur $ligne[3]</td>";
                                    }
                                    elseif($i == 0 || $i == 1){
                                    echo "<td>$valeur</td>";
                                    }
                                    $i++;
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

<script type="text/javascript">
    function  imprimer_page()
    {
        window.print();
    }
</script>
<?php
    //header('Expires: 0');
    //header('cache-control: must-revalidate, post-check=0, pre-check=0');
    //header('Pragma: public');
?>
</body>
</html>
