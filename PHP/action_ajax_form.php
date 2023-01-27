<?php
require_once 'credentials.php';

$name = htmlspecialchars($_POST['name']) ?? '';
$email = htmlspecialchars($_POST['email']) ?? '';
$text = htmlspecialchars($_POST['text']) ?? '';

if ($name && $email &&  $text) {

  $result = array(
    'name' => $name,
    'email' => $email,
    'text' => $text,
  );

  // Формирование письма на SMTP

  echo json_encode($result);
}