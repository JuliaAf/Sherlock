<?php
header('Content-Type: text/html; charset=utf-8');

session_start();

echo $_SESSION['fullmetal'];
echo '   ';

echo $token;
echo '   ';
echo $_POST['token'];

	$message ='<h2>Сообщение с Sherlock SPB</h2>
		<p>От <b>'.$_REQUEST['name'].'</b></p>
		<p>Email: <b>'.$_REQUEST['email'].'</b></p>
    <p>Сообщение : <b>'.$_REQUEST['message'].'</b></p>';


	include "class.phpmailer.php";

	$mail = new PHPMailer();
	$mail->From = "Sherlock SPB";
	$mail->FromName = "Sherlock SPB";
	$mail->AddAddress('a290288@gmail.com');
	$mail->IsHTML(true);
	$mail->Subject = "Sherlock SPB сообщение от ".$_REQUEST['name'];
	$mail->Body = $message;

	if (!$mail->Send()) print ('Mailer Error: '.$mail->ErrorInfo);

	echo "<script>alert(\"Ваша заявка отправлена.\");</script>";
	echo $r;

 ?>
