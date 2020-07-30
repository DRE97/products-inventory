<?php
include_once 'connect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)) {
  $request = json_decode($postdata);

  $nombre = $request->nombre;
  $referencia = $request->referencia;
  $precio = $request->precio;
  $peso = $request->peso;
  $categoria = $request->categoria;
  $stock = $request->stock;
  $ultima_venta = $request->ultima_venta;

  $sql = "INSERT INTO `productos` (`nombre`,`referencia`,`precio`,`peso`,`categoria`,`stock`,`fecha_venta`) VALUES (
    '$nombre',
    '$referencia',
    '$precio',
    '$peso',
    '$categoria',
    '$stock',
    '$ultima_venta')";

    try {
      $connect->query($sql);
      echo json_encode('Producto ingresado con exito');
    } catch (PDOException $e) {
      print "Error!: " . $e->getMessage() . "<br/>";
      die();
    }


}
