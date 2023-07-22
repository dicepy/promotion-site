<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */
$txt = '';
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$promo = $_POST['user_promo'];
$token = "";
$chat_id = "-1001956222497";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Промокод: ' => $promo,
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