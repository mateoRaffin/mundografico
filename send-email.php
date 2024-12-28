<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitizar y validar los datos
    $nombre = filter_var(trim($_POST['nombre']), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $mensaje = filter_var(trim($_POST['mensaje']), FILTER_SANITIZE_STRING);

    // Validar campos obligatorios
    if (empty($nombre) || empty($email) || empty($mensaje)) {
        echo "Todos los campos son obligatorios.";
        exit;
    }

    // Validar formato del email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "El formato del email no es válido.";
        exit;
    }

    // Configurar los datos del correo.
    $to = "info@mundo-grafico.com";
    $subject = "Nuevo mensaje de contacto";
    $body = "Nombre: $nombre\nEmail: $email\nMensaje: $mensaje";
    $headers = "From: $email";

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        // Redirigir al index.html
        header("Location: /pages/gracias.html");
        exit; // Asegura que no se ejecuten más líneas de código.
    } else {
        echo "Hubo un error al enviar el mensaje. Inténtelo más tarde.";
    }
} else {
    echo "Método no permitido.";
}
?>
