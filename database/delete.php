<?php

include_once 'connect.php';

$postdata = file_get_contents("php://input");
$id = json_decode($postdata);
//print_r($id);

$sql = "DELETE FROM `productos` WHERE `id` = $id";


try {
  $connect->query($sql);
  echo json_encode('Producto eliminado con exito');
} catch (PDOException $e) {
  print "Error!: " . $e->getMessage() . "<br/>";
  die();
}
