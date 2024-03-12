<?php
require_once("librerias/conexion.php");

$conn = mysqli_connect($host, $usuario, $clave, $db) or die("Error en la conexion.");


$nom = $_REQUEST['nom'];
$idio = $_REQUEST['idioriginal'];
$idid = $_REQUEST['iditraducir'];


$strSQL = "UPDATE solicitud SET idio = '$idio', idid = '$idid' WHERE nom = '$nom'";

$r=mysqli_query($conn,$strSQL);

if ($r){
    header("Location: admin.html");
}

$r = mysqli_query($conn, $strSQL);
