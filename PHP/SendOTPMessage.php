<?php


$data = json_decode(file_get_contents("php://input"));
 //$bname = mysql_real_escape_string($data->bname);
 //$bauthor = mysql_real_escape_string($data->bphone);

$txt_contact = $data->txt_contact;


$digits = 4;
$OTP= rand(pow(10, $digits-1), pow(10, $digits)-1);


$message="Hi, your PayMyCost OTP is ".$OTP."";
 
 $sms_text = urlencode($message);

		
$api_url='http://sms.amplusys.com/SecureApi.aspx?usr=kindaa&key=2427C646-AAD3-48BA-8712-A535F12FEB7A&smstype=TextSMS&to=91'.$txt_contact.'&msg='.$sms_text.'&rout=Transactional&from=kindaa';

 
		
		$response = file_get_contents( $api_url);
		
		
		echo $OTP;
	

?>