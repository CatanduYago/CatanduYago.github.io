<?php
require_once("librerias/conexion.php");

$conn = mysqli_connect($host, $usuario, $clave, $db) or die("Error en la conexion.");


$nom = $_REQUEST['nom'];
$ape = $_REQUEST['ape'];
$correo = $_REQUEST['correo'];
$coms = $_REQUEST['comentarios'];
$idio = $_REQUEST['idioriginal'];
$idid = $_REQUEST['iditraducir'];
$archivo = $_REQUEST['archivo'];

$strSQL = "INSERT INTO solicitud(nom, ape, correo, coms, idio, idid, archivo)";
$strSQL.= "VALUES('".$nom."','".$ape."','".$correo."','".$coms."','".$idio."','".$idid."','".$archivo."')";

$r=mysqli_query($conn,$strSQL);

if ($r){
    header("Location: admin.html");
   
}


