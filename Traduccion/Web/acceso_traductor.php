<?php

require_once("librerias/conexion.php");

$nom_usu = $_REQUEST['usuario'];
$contra = $_REQUEST['contrasena'];

$strSQL = "SELECT * FROM usuarios WHERE nom_usu = '$nom_usu' AND contra = '$contra' AND tipo = '2'";


$r=mysqli_query($conn,$strSQL);

if ($r->num_rows > 0){
    header("Location: consulta.html"); 

} else {
    header("Location: accesotraductor.html"); 
}


