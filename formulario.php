<?php

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "Su e-mail es: " . $email . "\r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . "\r\n"; 
$mensaje .= "Enviado el " . date('d/m/Y', time());

$destinatario = 'raffinmateonicolas@gmail.com';
$asunto = 'Este mail fue enviado desde la web';

mail($destinatario, $asunto, $mensaje, $header);

header('Location:index.html');

?>