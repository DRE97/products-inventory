<?php

include_once 'connect.php';

$postdata = file_get_contents("php://input");
$id = json_decode($postdata);

$sql = "SELECT * FROM `productos` WHERE `id` = $id";

$gsent = $connect->prepare($sql);
$gsent->execute();

$response = $gsent->fetchAll();

echo json_encode($response);
