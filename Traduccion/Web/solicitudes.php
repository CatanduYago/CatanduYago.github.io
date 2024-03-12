<!-- Aquí va un php de una tabla para que el traductor pueda descargar el
archivo y ver el correo y nombre de las solicitudes -->

<?php
require_once("librerias/conexion.php");

$conn = mysqli_connect($host, $usuario, $clave, $db) or die("Error en la conexion.");

$idio= $_REQUEST["idioriginal"];

$strSQL="SELECT nom,correo,idid,archivo FROM solicitud WHERE idio='$idio'";

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
    print "<th>Correo</th>";
    print "<th>Idioma Deseado</th>";
    print "<th>Archivo</th>";
    print "<th>Descargar</th>";
    print "</tr>";
    print "<tbody>";
    while ($row = mysqli_fetch_array($r)) {
        print "<tr>";
        print "<td>" . $row["nom"] . "</td>";
        print "<td>" . $row["correo"] . "</td>";
        print "<td>" . $row["idid"] . "</td>";
        print "<td>" . $row["archivo"] . "</td>";
        print "<td> <a href='fakedownload.php'><img src='/Web/img/descargas.png' style='width: 20px;'></a> </td>";
        print "</tr>";
    }
    print "</tbody>";
    print "</table>";
} else {
    print "<p>Error al ejecutar la consulta</p>";
}
