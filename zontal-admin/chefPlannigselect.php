<?php
/*
 *
 * Demarrage de la seesion
 * */
session_start();

$id = $_SESSION["identifiant"];

$idprojetplan = $_SESSION["idchoixprojplan"];

//echo $idprojetplan;
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
    <title>Planning des tâches</title>
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
                        <li><a href="chefMesprojets.php">Mes projets</a></li>
                        <li><a  href="chefphase.php">phases</a></li>
                        <li><a class="menu-top-active" href="cheftache.php">tâches</a></li>
                        <li><a href="chefrisque.php">risques</a></li>
                        <li><a href="cheflivrable.php">livrables</a></li>
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
                <h4 class="page-head-line">Planification</h4>
            </div>

        </div>

        <!------------------------------------------------------------- FORMULAIRES  --------------------------------------------------->


        <form enctype="multipart/form-data" class="formoid-metro-cyan" style="background-color:#FFFFFF;font-size:14px;font-family:'Open Sans','Helvetica Neue','Helvetica',Arial,Verdana,sans-serif;color:#666666;max-width:480px;min-width:150px" method="post" action="<?php $_SERVER['PHP_SELF'];?>" ><div class="title"><h2></h2></div>


            <div class="element-select"><label class="title">Tâches</label><div class="large"><span><select required name="choixtacheplan" >

                            <option value="0"></option>
                            <?php
                            include("connexionbase/connexion.inc.php");
                            // CREATION DE L'OBJET CONNEXION
                            $idcom = connexobjet("essaigprojet", "connexionbase/mesparam");

                            $requete = " SELECT idtache, nomtache
                                          FROM tache
                                          WHERE tache.idprojet = $idprojetplan ";

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

            <div class="element-multiple"><label class="title">Prédécesseur</label><div class="large"><select required data-no-selected="Nothing selected" name="predecesseur[]" multiple="multiple" >

                        <option value="0"></option>
                        <?php

                        $idcom = connexobjet("essaigprojet", "connexionbase/mesparam");

                        $requete = " SELECT numero, nomtache
                                          FROM tache
                                          WHERE tache.idprojet = $idprojetplan ";

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
                    </select></div></div>

            <div class="submit">
                <input type="submit" onclick=" if (confirm('Annuler??') == true) { history.back()}" value="Annuler" name="clicsubmit" />
                <input type="submit" value="Valider" name="clicsubmit"/>
            </div>

        </form>
        <br/>
        <br/>
        <hr size="20px" align="center" />
        <br/>

        <div class="panel panel-default">
            <div class="panel-heading">
                <strong>Liste des planifications</strong>
            </div>
            <div class="panel-body">
                <div class="table-responsive">
                    <table class="table table-striped table-bordered table-hover">

                        <!---- ECRITURE PHP RECHERCHE ET AFFICHAGE --------------------------------------------------->


                        <?php

                        include_once("connexionbase/connexion.inc.php");

                        $idcom = connexobjet("essaigprojet", "connexionbase/mesparam");
                        $recup =0;

                        /*
                         * REQUET D4INSERTION DANS LA TABLE PLANNIFICATION
                         *
                         * */
                        if (isset($_POST["clicsubmit"])) {

                            switch ($_POST["clicsubmit"]) {

                                case "Valider": {

                                    if (($_POST["choixtacheplan"] != 0) && ($_POST["predecesseur"] != 0)) {

                                        $idtache = $_POST["choixtacheplan"];
                                        $predecesseur = $_POST["predecesseur"];
                                        $idplan = "\N";


                                        $reqrecuperation = "SELECT nomtache, datedebT, datefinT, numero
                                                       FROM tache, planification
                                                          WHERE  idtache = $idtache";

                                        $resultrecuperation = $idcom->query($reqrecuperation);

                                        if ($resultrecuperation) {
                                            $nomtacheplan;
                                            $datedebplan;
                                            $datefinplan;
                                            $numeroplan;
                                            while ($lignerecuperation = $resultrecuperation->fetch_array(MYSQLI_NUM)) {
                                                // creation des variables
                                                $nomtacheplan = $lignerecuperation[0];
                                                $datedebplan = $lignerecuperation[1];
                                                $datefinplan = $lignerecuperation[2];
                                                $numeroplan = $lignerecuperation[3];
                                            }
                                        } else {
                                            echo "première lecture impossible";
                                        }

                                        $resultrecuperation->free();

                                        /*
                                         * INSERTIONNNNNNNNNNNNN
                                         *
                                         *
                                         * */

                                        foreach ($predecesseur as $nvpredecesseur) {

                                            $reqinsertion = " INSERT INTO planification VALUES
                                            ('$idplan',
                                                '$nvpredecesseur',
                                               '$idprojetplan',
                                                '$nomtacheplan',
                                                 '$numeroplan',
                                                   '$datedebplan',
                                                   '$datefinplan')";

                                            // ENVOI DE LA REQUETE A LA BASE
                                            $resultinsertion = $idcom->query($reqinsertion);

                                        }
                                        if (!$resultinsertion) {
                                            echo $idcom->errno;
                                            echo $idcom->error;

                                            echo "<script type = text/javascript>
                                                alert(' Erreur : " . $idcom->error . "') </script>";

                                        } else {
                                            echo "<script type = text/javascript>
                                                alert(' vous êtes bien enregistré. Votre identifiant est : " . $idcom->insert_id . "')</script>";
                                        }
                                    }
                                    $resultinsertion->free();

                                }
                                case "Annuler":
                                {
                                    echo "<script type = text/javascript>
                                             function confirmer(){ confirm('annulez??')}</script>";

                                }
                            }
                        }


                                    /*
                                     * REQUETE D4AFFICHAGE DANS LA TABLE
                                     *
                                     * */

                                    $requete = " SELECT numerotacheplan, nomtacheplan, datedebutplan, datefinplan, predecesseur, nomprojet
                                      FROM planification, projet
                                      WHERE planification.idprojet = $idprojetplan
                                      AND planification.idprojet = projet.idprojet";

                                    // Envoie de la requete à la base et recuperation du resultat

                                    $result = $idcom->query($requete);
                                    // verification du resultat

                                    if (!$result) {
                                        echo " Lecture impossible";
                                    } else {
                                        // recuperation du nombre de ligne
                                        $nbligne = $result->num_rows;

                                        //Ecriture du résultat dans le tableau

                                        echo "<thead>
                        <tr>
                            <th>Numero</th>
                            <th>Nom</th>
                            <th>Date de debut</th>
                            <th>Date de fin</th>
                            <th>Predecesseur</th>
                            <th>Projet</th>
                            <th></th>
                            <th></th>

                        </tr>
                        </thead>
                        ";


                                            while($ligne = $result->fetch_array(MYSQLI_NUM))
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
                &copy; 2018 YourCompany | By : <a href="#" target="_blank">DjospuntoDesign</a>
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
