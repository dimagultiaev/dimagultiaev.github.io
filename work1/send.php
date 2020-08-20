 <?php
 if (isset($_POST['action']))
 {
 	switch ($_POST['action']){

 		case 'question':{
			$recipient="evacar-diler@ukr.net";

 			if (isset($_POST['name']))
 				$name=$_POST['name'];

 			if (isset($_POST['tel']))
 				$tel=$_POST['tel'];

 			if (isset($_POST['products']))
 				$products=$_POST['products'];


 			$subject='EvaCar';
 			$message='

 			<html>
	<head>
		<meta charset="UTF-8">
		<style>

			tbody td {
				padding: 10px 0px 10px 50px;
			}
			tbody tr:hover {
				background: #d7e0e8;
				cursor: pointer;
			}

		</style>
	</head>
	<body>
		<table style="width: 100%;" border="0">
			<tbody>
			<tr>
					<td style="font-weight: 600; font-family: sans-serif; font-size: 15px; width: 140px;">Имя:</td>
					<td style="font-size: 15px;">'.$name.' </td>
				</tr>
				<tr>
					<td style="font-weight: 600; font-family: sans-serif; font-size: 15px; width: 140px;">Телефон:</td>
					<td style="font-size: 15px;">'.$tel.' </td>
				</tr>
				<tr>
					<td style="font-weight: 600; font-family: sans-serif; font-size: 15px; width: 140px;">Коврик:</td>
					<td style="font-size: 15px;">'.$products.' </td>
				</tr>

				<tr class="last" style="background:#fff !important;">
					<td style="padding: 10px 0; background:#fff;" colspan="2">&nbsp;</td>
				</tr>

			</tbody>
		</table>
	</body>
	</html>';
 			$headers  = 'MIME-Version: 1.0' . "\r\n";
 			$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
 			$headers .= 'From: no-replay@evacar.com.ua/' . "\r\n" .'X-Mailer: PHP/' . phpversion();
 			break;
 		}
 		default: header('Location: /');
 	} 
 	mail($recipient,$subject,$message,$headers);
 	echo($name .$email .$message);
 	header('Location: /');
 }


 ?> 