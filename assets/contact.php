<?php
  // Configuración del correo electrónico
  $to = 'jade.rq01@gmail.com'; 
  $subject = 'Formulario de contacto';

  // Recopilar datos del formulario
  $name = $_POST['name'];
  $email = $_POST['email'];
  $number = $_POST['number'];
  $message = $_POST['message'];

  // Crear el cuerpo del correo electrónico
  $body = "Nombre: $name\n";
  $body .= "Correo: $email\n";
  $body .= "Teléfono: $number\n";
  $body .= "Mensaje: $message\n";

  // Enviar el correo electrónico
  $headers = 'From: ' . $email . "\r\n" .
             'Reply-To: ' . $email . "\r\n";
  mail($to, $subject, $body, $headers);

  echo "¡Gracias por contactarnos! Su mensaje ha sido enviado correctamente.";
  // Redirigir al usuario a una página de agradecimiento
  header('Location: thank-you.html');
  exit;
?>