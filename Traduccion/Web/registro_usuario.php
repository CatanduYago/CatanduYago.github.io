<?php 

require_once("librerias/conexion.php");


$nom_usu = $_POST['usuario'];
$contra = $_POST['contrasena'];
$correo = $_POST['correo'];
$tipo = '1';

$strSQL="INSERT INTO usuarios(nom_usu,contra,correo,tipo)";

$strSQL.="VALUES('".$nom_usu."','".$contra."','".$correo."','".$tipo."')";

$r=mysqli_query($conn,$strSQL);

if ($r){
    header("Location: acceder.html");
} else {
    print "<p>Ha ocurrido un error inesperado</p>";
}
