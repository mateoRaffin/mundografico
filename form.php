<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = htmlspecialchars($_POST['nombre'], ENT_QUOTES, 'UTF-8');
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $mensaje = htmlspecialchars($_POST['mensaje'], ENT_QUOTES, 'UTF-8');

    $mensaje_correo = "Este mensaje fue enviado por " . $nombre . ",\r\n";
    $mensaje_correo .= "Su e-mail es: " . $email . ",\r\n";
    $mensaje_correo .= "Mensaje: " . $mensaje . ",\r\n";
    // $mensaje_correo .= "Enviado el " . date('d/m/Y', time());

    $destinatario = 'raffinmn36@gmail.com';
    $asunto = 'Este email fue enviado desde la web';

    // Cabeceras para asegurar que el correo se envíe correctamente
    $headers = 'From: ' . $email . "\r\n" .
               'Reply-To: ' . $email . "\r\n" .
               'MIME-Version: 1.0' . "\r\n" .
               'Content-Type: text/plain; charset=UTF-8' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    // Enviar el correo
    mail($destinatario, $asunto, $mensaje_correo, $headers);

    // Redirección después de enviar el correo
    header('Location: index.html');
    exit();
}
?>
