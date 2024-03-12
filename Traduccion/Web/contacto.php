<?php 

require_once("librerias/conexion.php");

$nom = $_REQUEST['nom'];
$ape = $_REQUEST['ape'];
$correo = $_REQUEST['correo'];
$coms = $_REQUEST['comentarios'];
$archivo = $_REQUEST['archivo'];

$strSQL = "INSERT INTO contactos(nom, ape, correo, coms, archivo)";
$strSQL.= "VALUES('".$nom."','".$ape."','".$correo."','".$coms."','".$archivo."')";

$r=mysqli_query($conn,$strSQL);

if ($r){
    header("Location: contacto.html?contacto_exitoso");
   
} else {
    print "<p>Ha ocurrido un error inesperado</p>";
}