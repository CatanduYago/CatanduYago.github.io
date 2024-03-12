<?php
require_once("librerias/conexion.php");

$conn = mysqli_connect($host, $usuario, $clave, $db) or die("Error en la conexion.");

$nom=$_REQUEST['nom'];

$strSQL = "DELETE FROM solicitud WHERE nom=$nom";

$r = mysqli_query($conn, $strSQL);
if ($r){
    header("Location: admin.html");
} 