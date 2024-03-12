<?php 

require_once("librerias/conexion.php");

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
    header("Location: traducir.html?mensaje=exitoso");
   
} else {
    print "<p>Ha ocurrido un error inesperado</p>";
}
