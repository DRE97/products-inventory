<?php

include_once 'connect.php';

$sql = 'SELECT * FROM `productos`';

$gsent = $connect->prepare($sql);
$gsent->execute();

$response = $gsent->fetchAll();

echo json_encode($response);
