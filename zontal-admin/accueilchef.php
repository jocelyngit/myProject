
<?php
/*
 *
 * Demarrage de la seesion
 * */
session_start();

//echo $_SESSION["identifiant"];
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
    <title>Accueil-chef</title>
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
                        <li><a href="cheftache.php">taches</a></li>
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
                <h4 class="page-head-line">Accueil chef de projet</h4>
            </div>

        </div>

        <div class="col-md-6">
            <div class="alert alert-info">
                This is a free bootstrap admin template with basic pages you need to craft your project.
                Use this template for free to use for personal and commercial use.
                <br />
                <strong> Some of its features are given below :</strong>
                <ul>
                    <li>
                        Responsive Design Framework Used
                    </li>
                    <li>
                        Easy to use and customize
                    </li>
                    <li>
                        Font awesome icons included
                    </li>
                    <li>
                        Clean and light code used.
                    </li>
                </ul>

            </div>
            <div class="alert alert-success">
                <strong> Instructions To Use:</strong>
                <ul>
                    <li>
                        Lorem ipsum dolor sit amet ipsum dolor sit ame
                    </li>
                    <li>
                        Aamet ipsum dolor sit ame
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet ipsum dolor
                    </li>
                    <li>
                        Cpsum dolor sit ame
                    </li>
                </ul>

            </div>

        </div>
        <img src="assets/img/logiproject.jpg" height="720px" width="450px" style="margin-top: 0; float: right; background-position: top right" />

    </div>


</div>





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