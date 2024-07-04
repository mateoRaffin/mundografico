<?php

$nombre = $_POST('name');
$email = $_POST('email');
$mensaje = $_POST('mensaje');

// Como me va a llegar el cuerpo del email a mi
$mensaje = "Este mensaje fue enviado por " . $nombre . ",/r/n";
$mensaje .= "Su e-mail es: " . $email . ",/r/n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . ",/r/n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$destinatario = 'raffinmn36@gmail.com';
$asunto = 'Este email fue enviado desde la web';

// funcion mail, ya viene en php
mail($destinatario, $asunto, utf8_decode($mensaje), $header);

// Redireccion al haber enviado el form
header('Location:index.html');

?>