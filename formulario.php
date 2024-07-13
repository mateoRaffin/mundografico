<?php

if(isset($_POST["enviar"])){
    $nombre=$_POST["nombre"];
    $email=$_POST["email"];
    $mensaje=$_POST["mensaje"];

    $destinatario="consultas@mundo-grafico.com";
    $asunto="Nuevo mensaje de $email";

    $contenido="Nombre: $nombre \n";
    $contenido.="Email: $email \n";
    $contenido.="Mensaje: $mensaje";

    $header="From: mundo-grafico.com";

    $mail=mail($destinatario,$asunto,$contenido,$header);

    if($mail){
        echo "<script>alert('Muchas gracias! El correo se envió correctamente y responderemos a la brevedad.');</script>";
    }else{
        echo "<script>alert('No fue posible realizar esta operación, intente nuevamente más tarde.');</script>";
    }

}

?>