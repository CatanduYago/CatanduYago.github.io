<?php 

require_once("librerias/conexion.php");

$nom_usu = $_REQUEST['usuario'];
$contra = $_REQUEST['contrasena'];


if ($nom_usu == "admin" && $contra == "8JEn,-QR;Z<T9(dO1pSO+Jdhi") {
    header("Location: admin.html");
    exit;
} else{

$strSQL = "SELECT * FROM usuarios WHERE nom_usu = '$nom_usu' AND contra = '$contra'";

$r=mysqli_query($conn,$strSQL);

if ($r ->num_rows > 0){ 
    header("Location: traducir.html");
    exit;
}else {
    header("Location: acceder.html");

}
}

