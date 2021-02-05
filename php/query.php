<?php
include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$_POST = json_decode(file_get_contents("php://input"), true);
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['id'])) ? $_POST['id'] : '';
$nombre = ucwords(strtolower((isset($_POST['nombre'])) ? $_POST['nombre'] : ''));
$apellidoP = ucwords(strtolower((isset($_POST['apellidoP'])) ? $_POST['apellidoP'] : ''));
$apellidoM = ucwords(strtolower((isset($_POST['apellidoM'])) ? $_POST['apellidoM'] : ''));
$correo = (isset($_POST['correo'])) ? $_POST['correo'] : '';
$movil = (isset($_POST['movil'])) ? $_POST['movil'] : '';
$nTarjeta = (isset($_POST['nTarjeta'])) ? $_POST['nTarjeta'] : '';

switch($opcion){
    case 1:
        $consulta = "INSERT INTO listado (nombre, apellidoPat, apellidoMat, mail, telefono, tarjeta) VALUES('$nombre', '$apellidoP', '$apellidoM', '$correo', '$movil', '$nTarjeta') ";	
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                
        break;
    case 2:
        $consulta = "UPDATE listado SET nombre='$nombre', apellidoPat='$apellidoP', apellidoMat='$apellidoM', mail='$correo', telefono='$movil', tarjeta='$nTarjeta' WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;        
    case 3:
        $consulta = "DELETE FROM listado WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                           
        break;         
    case 4:
        $consulta = "SELECT * FROM listado";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
}
print json_encode($data, JSON_UNESCAPED_UNICODE);
$conexion = NULL;