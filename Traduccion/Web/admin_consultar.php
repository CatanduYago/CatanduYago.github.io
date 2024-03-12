<?php
require_once("librerias/conexion.php");

$conn = mysqli_connect($host, $usuario, $clave, $db) or die("Error en la conexion.");


$strSQL="SELECT * FROM solicitud";

$r = mysqli_query($conn, $strSQL);

if ($r) {
    print '<style>';
    print '
    @font-face {
        font-family: "Mukta";
        src: url("/Web/fuentes/Mukta-SemiBold.ttf") format("truetype");
    }
    th{
        font-family: "Mukta";
        border: 2px solid black;
        padding: 6px;
        margin: 5px;
        font-size: 18px;
        min-width:40px;
        background-color: #034464;
        color: #ffffff;
        text-align: center;
        width: auto;
    }
    tr {
        width: fit-content;
        text-align: center;
        }
    
    td {
        font-family: "Mukta";

        border: 2px solid black;
        padding: 6px;
        font-size: 15px;
        width: fit-content;
        text-align: center;
        margin: 0;
        background-color: #034464;
        color: #ffffff;
    
    }
    
    body {
        font-family: "Mukta";
        position: relative;
        background-color: #AFD1E1;
    }
    table {
        background-transparency:100%;
        padding: 20px;
        border-radius: 25px;
        width: auto;
        margin: auto;
    }
   
</style>';

print "<table>";
print "<tr>";
print "<th>Nombre</th>";
print "<th>Apellidos</th>";
print "<th>Correo</th>";
print "<th>Comentarios</th>";
print "<th>Idioma Original</th>";
print "<th>Idioma Deseado</th>";
print "<th>Archivo</th>";
print "</tr>";
print "<tbody>";
while ($row = mysqli_fetch_array($r)) {
    print "<tr>";
    print "<td>" . $row["nom"] . "</td>";
    print "<td>" . $row["ape"] . "</td>";
    print "<td>" . $row["correo"] . "</td>";
    print "<td>" . $row["coms"] . "</td>";
    print "<td>" . $row["idio"] . "</td>";
    print "<td>" . $row["idid"] . "</td>";
    print "<td>" . $row["archivo"] . "</td>";
    print "</tr>";
}
print "</tbody>";
print "</table>";




}