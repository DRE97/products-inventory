<?php

include_once 'connect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)) {
  $request = json_decode($postdata);

  $id = $request->id;
  $nombre = $request->nombre;
  $referencia = $request->referencia;
  $precio = $request->precio;
  $peso = $request->peso;
  $categoria = $request->categoria;
  $stock = $request->stock;
  $ultima_venta = $request->ultima_venta;

  $sql = "UPDATE `productos` SET
    `nombre`='$nombre',
    `referencia`='$referencia',
    `precio`='$precio',
    `peso`='$peso',
    `categoria`='$categoria',
    `stock`='$stock',
    `fecha_venta`='$ultima_venta'
    WHERE `id` = $id
  ";

    try {
      $connect->query($sql);
      echo json_encode('Producto actualizado con exito');
    } catch (PDOException $e) {
      print "Error!: " . $e->getMessage() . "<br/>";
      die();
    }


}
