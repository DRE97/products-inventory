<?php

$link = 'mysql:host=localhost;dbname=inventario';
$usuario = 'root';
$pass = '';

try {
  $connect = new PDO($link, $usuario, $pass);
  //echo 'conectado';

} catch (PDOException $e) {
  print "Error!: " . $e->getMessage() . "<br/>";
  die();
}
