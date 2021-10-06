<?php
session_start();

include("connexionbase/connexion.inc.php");
$idcom = connexobjet("essaigprojet", "connexionbase/mesparam");

$type = empty($_GET["type"])? "choixphaseT" : $_GET["type"];

if ($type === 'choixphaseT')
{
    $table = 'phases';
    $foreign = 'idprojet';
}
else
{
    throw new Exception (   'unknow type', $type);
}

//REQUETE

$reqprep = $idcom->prepare( " SELECT  DISTINCT idphase, nomphase
           FROM phases, projet
           WHERE phases.idprojet = ?");

$reqprep->bind_param("i", $_GET["filter"]);

$reqprep->execute();

$reqprep->bind_result($idphase, $nomphase);

while($reqprep->fetch())
{
    header( "content-type: application/json");
    echo $idphase," ", $nomphase;
}
?>