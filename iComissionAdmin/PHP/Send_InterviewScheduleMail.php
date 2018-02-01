<?php

//SAVE User registration info

//includes db_connection php for database connection
include("db_connection.php");
require("class.phpmailer.php");
date_default_timezone_set("Asia/Kolkata");
$data = json_decode(file_get_contents("php://input"));

//Get all data sent from js call to register user
$mailsubject = $data->mailsubject;
$EmailIds = $data->EmailIds;
$Names = $data->Names;
$MsgBody = $data->MsgBody;
$skypeId = $data->skypeId;

$namess = explode(",",$Names);
$emails = explode(",",$EmailIds);

for($i=0; $i< sizeof($emails) - 1;$i++){
    
    $EmailID = $emails[$i];
    $subject = $mailsubject;
    
    $mail = new PHPMailer();
    $subject = $subject;
    $mail->IsSMTP();
    $mail->SMTPDebug = 0;
    $mail->SMTPAuth = TRUE;
    $mail->SMTPSecure = "tls";
    $mail->Port     = 25; //enter mail server port
    $mail->Username = "ktorase@obstin.in";  //Enter your mail server username
    $mail->Password = "obstin@55"; //enter your mail server password
    $mail->Host     = "mail.obstin.in"; //enter youe mail server
    $mail->Mailer   = "Obstin"; //enter mailer
    $mail->SetFrom("ktorase@obstin.in", "Obstin.in");
    $mail->AddReplyTo("ktorase@obstin.in", "Obstin.in");
    $mail->AddAddress($EmailID);
    $mail->Subject = $subject;
    $mail->WordWrap   = 80;
    $mail->IsHTML(true);
    $mail->Body = " 
    <html>
                            <head>
                             <link rel='stylesheet' href='http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css'>
                            <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js'>
                            </script>
                              <script src='http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js'>
                            </script>
                            </head>
                            
                            <body>
                         
    <div style='width:100%!important;background:#f2f2f2;margin:0;padding:0' bgcolor='#f2f2f2'>
    <table width='100%' bgcolor='#f2f2f2' cellpadding='0' cellspacing='0' border='0' id='m_-6580639260561129619backgroundTable' style='width:100%!important;line-height:100%!important;border-collapse:collapse;margin:0;padding:0'>
    <tbody>
        <tr>
            <td style='border-collapse:collapse'>
                <table bgcolor='#ffffff' width='100%' cellspacing='0' cellpadding='0' border='0' class='m_-6580639260561129619devicewidth' style='border-collapse:collapse'>
                    <tbody>
                        <tr>
                            <td>
                                <table width='100%' cellspacing='0' cellpadding='0' border='0' class='m_-6580639260561129619devicewidthinner' style='border-collapse:collapse'>
                                    <tbody style='border-collapse:collapse'>

                                        <tr>
                                            <td width='100%' height='40' style='border-collapse:collapse'></td>
                                        </tr>


                                        <tr>
                                            <td style='font-family:Helvetica,arial,sans-serif;font-size:14.5px;color:#666666;text-align:left;line-height:20px;border-collapse:collapse'>
                                                <table width='100%' align='center' cellspacing='0' cellpadding='0' border='0' class='m_-6580639260561129619devicewidthinner' style='border-collapse:collapse'>
                                                    <tbody>

                                                        <tr>
                                                            <td style='font-family:Helvetica;font-size:18px;color:#494949;text-align:left;line-height:20px;font-weight:bold;border-collapse:collapse' align='left'>
                                                                Hi $namess[$i],
                                                            </td>
                                                            <td>
                                                            <a style='display: inline-block;width: 50px;height: 50px;' href='skype:$skypeId?chat'><img style='width: 100%' src='http://www.pngall.com/wp-content/uploads/2016/03/Skype-PNG-Pic.png' alt='skype_logo' /></a>
                                                            </td>
                                                        </tr>


                                                        <tr>
                                                            <td colspan='2' width='100%' height='40' style='border-collapse:collapse'></td>
                                                        </tr>


                                                        <tr>
                                                            <td colspan='2' style='font-family:Helvetica,arial,sans-serif;font-size:14.5px;color:#666666;text-align:left;line-height:20px;border-collapse:collapse' align='left'>
                                                                $MsgBody
                                                            </td>
                                                        </tr>


                                                        <tr>
                                                            <td colspan='2' width='100%' height='40' style='border-collapse:collapse'></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td width='100%' height='40' style='border-collapse:collapse'></td>
                                        </tr>


                                        <tr>
                                            <td style='font-family:Helvetica,arial,sans-serif;font-size:14.5px;color:#666666;text-align:left;line-height:20px;border-collapse:collapse' align='left'>
                                                <br>Thanks,<br>ProcStart Support
                                            </td>
                                        </tr>

                                        <tr>
                                            <td width='100%' height='40' style='border-collapse:collapse'></td>
                                        </tr>


                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
    </div>
                            </body>
                            
                            </html>
    ";
    $mail->AltBody="This is text only alternative body.";
    
    if(!$mail->Send())
    { 
        echo $mail->ErrorInfo;
        }
    else 
    {
         echo "Thank you for requesting information";    
    }
}
?>