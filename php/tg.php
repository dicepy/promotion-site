<?php 

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$comment = $_POST['user_comment'];
$pagefrom = $_POST['pagefrom'];
$token = "token";
$chat_id = "-662471046";
$arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => '+' .$phone,
    'Комментарий:' => $comment,
    'Страница заявки: ' => $pagefrom
  );
  
  foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
  };
  
  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
    header('Location: index.html');
  } else {
    echo "Error";
  }
?>