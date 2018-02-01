<?php

//SAVE job seeker data when aplly to particular job

include("db_connection.php");
require("class.phpmailer.php");
$data = json_decode(file_get_contents("php://input"));

date_default_timezone_set("Asia/Kolkata");



$JobSeekerID    = $data->JobSeekerID;
$JobPostID      = $data->JobID;
$ApplyDate      = $data->ApplyDate;
$JobApplyStatus = 'yes';


$sql    = "SELECT * FROM jobapplyactivity where JobPostID = $JobPostID and UserID = $JobSeekerID";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    $data    = false;
    $msg     = 'Already applied to job';
    $respone = array(
        'data' => $data,
        'msg' => $msg
    );
    echo json_encode($respone);
} else {
    $sql0  = "CALL usp_Insert_JobSeekerAplliedJob(?,?,?,?)";
    $stmt0 = $conn->prepare($sql0);
    
    $stmt0->bind_param("iiss", $JobSeekerID, $JobPostID, $ApplyDate, $JobApplyStatus);
    
    if ($stmt0->execute()) {
        // $data = true;
        // $msg = 'data saved';
        // $respone = array('data'=>$data,'msg'=>$msg); 
        
        $sql1    = "SELECT JobPostedBy,JobTitle FROM jobpost where JobPostID = $JobPostID";
        $result1 = $conn->query($sql1);
        if ($result1->num_rows > 0) {
            while ($row1 = $result1->fetch_assoc()) {
                $JobPostedBy  = $row1["JobPostedBy"];
                $JobPosttitle = $row1["JobTitle"];
                $sql2         = "SELECT UserName,FirstName FROM useraccount where UserAccountID = $JobPostedBy";
                $result2      = $conn->query($sql2);
                if ($result2->num_rows > 0) {
                    while ($row2 = $result2->fetch_assoc()) {
                        $Email     = $row2["UserName"];
                        $FirstName = $row2["FirstName"];
                    }
                }
            }
        }
        
        $sql2         = "SELECT JobSeekerType FROM jobseekerprofile where JobSeekerID = $JobSeekerID";
        $result2      = $conn->query($sql2);
        if ($result2->num_rows > 0) {
            while ($row2 = $result2->fetch_assoc()) {
                $JobSeekerType = $row2["JobSeekerType"];
            }
        }
        $sql9          = "";
        $experienceDiv = "";
        if ($JobSeekerType == "Freshers") {
            $sql9 = "select s1.Firstname,s1.Contact,s2.SkillSetID from jobseekerprofile s1 inner join jobseekerskillset s2 on s1.JobSeekerID = s2.JobSeekerID  where s1.JobSeekerID = $JobSeekerID";
            
            $experienceDiv = "<span class='m_-6567725409445039519mb_text' style='font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:14px;line-height:19px;color:#898f9c'><span style='color:#808080'><b>Experience:</b> Fresher</span></span>";
        } else {
            $sql9 = "select s1.Firstname,s1.Contact,s2.SkillSetID,s3.TotalExp_Year,s3.TotalExp_Month from jobseekerprofile s1 inner join jobseekerskillset s2 on s1.JobSeekerID = s2.JobSeekerID inner join jobseekerexperiencedetails s3 on s2.JobSeekerID=s3.JobSeekerID where s1.JobSeekerID = $JobSeekerID";
            
            $experienceDiv = "<span class='m_-6567725409445039519mb_text' style='font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:14px;line-height:19px;color:#898f9c'><span style='color:#808080'><b>Experience:</b> $TotalExp_Year Year $TotalExp_Month Months</span></span>";
        }
        $result9 = $conn->query($sql9);
        if ($result9->num_rows > 0) {
            while ($row9 = $result9->fetch_assoc()) {
                $firstname      = $row9["Firstname"];
                $contact        = $row9["Contact"];
                $SkillSet       = $row9["SkillSetID"];
                $TotalExp_Year  = $row9["TotalExp_Year"];
                $TotalExp_Month = $row9["TotalExp_Month"];

                $contact = substr($contact, 0, 6) . 'XXXX';
            }
        }
        
        $EmailID = $Email;
        $subject = "ProcStart job applied notification";
        
        $mail    = new PHPMailer();
        $subject = $subject;
        $mail->IsSMTP();
        $mail->SMTPDebug  = 0;
        $mail->SMTPAuth   = TRUE;
        $mail->SMTPSecure = "tls";
        $mail->Port       = 25; //enter mail server port
        $mail->Username   = "ktorase@obstin.in"; //Enter your mail server username
        $mail->Password   = "obstin@55"; //enter your mail server password
        $mail->Host       = "mail.obstin.in"; //enter youe mail server
        $mail->Mailer     = "Obstin"; //enter mailer
        $mail->SetFrom("ktorase@obstin.in", "Obstin.in");
        $mail->AddReplyTo("ktorase@obstin.in", "Obstin.in");
        $mail->AddAddress($EmailID);
        $mail->Subject  = $subject;
        $mail->WordWrap = 80;
        $mail->IsHTML(true);
        $mail->Body    = " 
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
            <div class='adM'>
        
        
        
            </div><div class='m_-6580639260561129619block'>
                <div class='adM'>
        
                </div>
                <table width='100%' bgcolor='#f2f2f2' cellpadding='0' cellspacing='0' border='0' id='m_-6580639260561129619backgroundTable' style='width:100%!important;line-height:100%!important;border-collapse:collapse;margin:0;padding:0'>
                    <tbody>
                        <tr>
                            <td style='border-collapse:collapse'>
                                <table width='542' cellpadding='0' cellspacing='0' border='0' align='center' class='m_-6580639260561129619devicewidth' style='display:block;border-collapse:collapse'>
                                    <tbody style='display:table;width:100%'>
                                        <tr>
                                            <td style='border-collapse:collapse'>
        
                                                <table width='100%' cellpadding='0' cellspacing='0' border='0' align='center' class='m_-6580639260561129619devicewidth' style='border-collapse:collapse'>
                                                    <tbody>
                                                        <tr>
                                                            <td valign='middle' width='100%' align='center' style='border-collapse:collapse;padding:40px 0' class='m_-6580639260561129619logo'>
                                                                <div class='m_-6580639260561129619imgpop'>
                                                                    <a href='' style='text-emphasis:none' target='_blank' >
                                                                        <img src='http://www.procstart.com/images/logo.png' alt='Upwork' width='30%' height='auto' border='0' style='display:block;outline:none;text-decoration:none;border:none' class='m_-6580639260561129619logo CToWUd'>
                                                                    </a>
                                                                </div>
                                                            </td>
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
            <div class='m_-6580639260561129619block'>
        
                <table width='100%' bgcolor='#f2f2f2' cellpadding='0' cellspacing='0' border='0' id='m_-6580639260561129619backgroundTable' style='width:100%!important;line-height:100%!important;border-collapse:collapse;margin:0;padding:0'>
                    <tbody>
                        <tr>
                            <td style='border-collapse:collapse'>
                                <table bgcolor='#ffffff' width='542' align='center' cellspacing='0' cellpadding='0' border='0' class='m_-6580639260561129619devicewidth' style='border-collapse:collapse'>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table width='502' align='center' cellspacing='0' cellpadding='0' border='0' class='m_-6580639260561129619devicewidthinner' style='border-collapse:collapse'>
                                                    <tbody style='border-collapse:collapse'>
        
                                                        <tr>
                                                            <td width='100%' height='40' style='border-collapse:collapse'></td>
                                                        </tr>
        
        
                                                        <tr>
                                                            <td style='font-family:Helvetica,arial,sans-serif;font-size:14.5px;color:#666666;text-align:left;line-height:20px;border-collapse:collapse'>
                                                                <table width='100%' align='center' cellspacing='0' cellpadding='0' border='0' class='m_-6580639260561129619devicewidthinner' style='border-collapse:collapse'>
                                                                    <tbody>
        
                                                                        <tr>
                                                                            <td style='font-family:Helvetica;font-size:24px;color:#494949;text-align:left;line-height:20px;font-weight:bold;border-collapse:collapse' align='left'>
                                                                                Hi $FirstName,
                                                                            </td>
                                                                        </tr>
        
        
                                                                        <tr>
                                                                            <td width='100%' height='40' style='border-collapse:collapse'></td>
                                                                        </tr>
        
        
                                                                        <tr>
                                                                            <td style='font-family:Helvetica,arial,sans-serif;font-size:14.5px;color:#666666;text-align:left;line-height:20px;border-collapse:collapse' align='left'>
                                                                                This is the jobapply notification mail to your posted job, below user have shown interest in your job post $JobPosttitle. Please find below details of user.
                                                                                <a style='color:#5bbc2e' href='' target='_blank' ></a>
                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                        <td>
                                                                        <div id=':lq' class='ii gt adP adO'>
                                                                        <div id=':ly' class='a3s aXjCH m15fb437953046f31'>
                                                                            <u></u>
                                                                            <div style='margin:0;padding:0' dir='ltr' bgcolor='#ffffff'>
                                                                                <table border='0' width='100%;' cellspacing='0' cellpadding='0' id='m_-6567725409445039519email_table' style='border-collapse:collapse'>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td id='m_-6567725409445039519email_content' style='font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;background:#ffffff'>
                                                                                                <table border='0' width='100%' cellspacing='0' cellpadding='0' style='border-collapse:collapse'>
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td height='20' style='line-height:20px' colspan='3'>
                                                                                                                <table border='0' width='100%' cellspacing='0' cellpadding='0' style='border-collapse:collapse'>
                                                                                                                    <tbody>
                                                                                                                        <tr>
                                                                                                                            <td height='28' style='line-height:28px'>&nbsp;</td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td><span class='m_-6567725409445039519mb_text' style='font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823'><a href='#' style='color:#3b5998;text-decoration:none' target='_blank' data-saferedirecturl='#'>XXXX XXXX</a> has applied for the jobpost <a>'$JobPosttitle'</a>.</span></td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td height='14' style='line-height:14px'>&nbsp;</td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td>
                                                                                                                                <table border='0' width='100%' cellspacing='0' cellpadding='0' style='border-collapse:collapse'>
                                                                                                                                    <tbody>
                                                                                                                                        <tr>
                                                                                                                                            <td style='font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;border:solid 1px #e5e5e5;border-radius:2px;padding:10px;display:block'>
                                                                                                                                                <table border='0' width='100%' cellspacing='0' cellpadding='0' align='left' class='m_-6567725409445039519ib_t' style='border-collapse:collapse;width:100%;min-width:420px'>
                                                                                                                                                    <tbody>
                                                                                                                                                        <tr class='m_-6567725409445039519ib_row'>
                                                                                                                                                            <td width='100%' valign='middle' style='padding-right:10px' class='m_-6567725409445039519ib_mid'>
                                                                                                                                                                <table border='0' cellspacing='0' cellpadding='0' style='border-collapse:collapse; width: 100%'>
                                                                                                                                                                    <tbody>
                                                                                                                                                                        <tr>
                                                                                                                                                                            <td><a href='#' style='color:#141823;text-decoration:none;font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;font-weight:bold'>XXXX XXXX</a></td>
                                                                                                                                                                        </tr>
                                                                                                                                                                        <tr>
                                                                                                                                                                            <td>
                                                                                                                                                                                <span class='m_-6567725409445039519mb_text' style='font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:14px;line-height:19px;color:#898f9c'><span style='color:#808080'><b>Contact:</b> $contact</span></span>
                                                                                                                                                                            </td>
                                                                                                                                                                            <td>
                                                                                                                                                                            <span class='m_-6567725409445039519mb_text' style='font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:14px;line-height:19px;color:#898f9c'><span style='color:#808080'><b>Skills:</b> $SkillSet</span></span>
                                                                                                                                                                            </td>
                                                                                                                                                                        </tr>
                                                                                                                                                                        <tr>
                                                                                                                                                                        <td>
                        $experienceDiv                                                                                                                                   </td>
                                                                                                                                                                        </tr>
                                                                                                                                                                    </tbody>
                                                                                                                                                                </table>
                                                                                                                                                            </td>
                                                                                                                                                        </tr>
                                                                                                                                                    </tbody>
                                                                                                                                                </table>
                                                                                                                                                <table border='0' cellspacing='0' cellpadding='0' style='border-collapse:collapse'>
                                                                                                                                                    <tbody>
                                                                                                                                                        <tr>
                                                                                                                                                            <td height='1' style='line-height:1px'>&nbsp;</td>
                                                                                                                                                        </tr>
                                                                                                                                                    </tbody>
                                                                                                                                                </table>
                                                                                                                                            </td>
                                                                                                                                        </tr>
                                                                                                                                    </tbody>
                                                                                                                                </table>
                                                                                                                            </td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td height='14' style='line-height:14px'>&nbsp;</td>
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
                                                                            <div class='yj6qo'></div>
                                                                            <div class='adL'>
                                                                    
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                        </td>
                                                                        </tr>
        
        
                                                                        <tr>
                                                                            <td width='100%' height='40' style='border-collapse:collapse'></td>
                                                                        </tr>
        
        
                                                                        <tr>
                                                                            <td style='font-family:Helvetica,arial,sans-serif;font-size:14.5px;color:#666666;text-align:left;line-height:20px;border-collapse:collapse' align='left'>
                                                                                Thanks again, Lets start with <a href='http://www.procstart.com'>ProcStart</a>
                                                                            </td>
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
                                                <div class='m_-6580639260561129619block'>
                                                
                                                        <table cellspacing='0' cellpadding='0' width='100%' border='0' align='center' bgcolor='#f2f2f2'>
                                                            <tbody>
                                                                <tr>
                                                
                                                
                                                                    <td valign='middle' align='center' width='100%' style='padding-top:30px'>
                                                                        <span style='font-family:Helvetica,Arial,Sans serif;font-weight:bold;line-height:18pt;font-size:13pt;color:#7d7d7d'>
                                                                            Download our mobile app on <br>
                                                                              <a href='' style='color:#37a000;text-decoration:none' target='_blank'>iPhone</a> or
                                                                            <a href='' style='color:#37a000;text-decoration:none' target='_blank' >Android</a>
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <table cellspacing='0' cellpadding='0' width='100%' border='0' align='center' bgcolor='#f2f2f2'>
                                                            <tbody>
                                                                <tr>
                                                
                                                
                                                
                                                                    <td valign='middle' align='center' width='100%' height='25' style='padding:30px 0'>
                                                
                                                                        <table cellspacing='0' cellpadding='0' width='177' border='0'>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td width='25'>
                                                                                    </td>
                                                                                    <td width='13'>&nbsp;</td>
                                                                                    <td width='25'>
                                                                                        <a href='' title='Facebook' target='_blank' data-saferedirecturl='#'>
                                                                                            <img src='https://ci4.googleusercontent.com/proxy/hlwsVwlaQOf8_bebzfYvJL2OTUWA-J6jsmTPHderT0bZA6ndlcTmHJhQF6VEZ9HfPK-smpjA7M_UGqLCr-uVNGpVmrmfE9judDw1aB_H3OxSb7hRqcj31w=s0-d-e1-ft#https://www.upwork.com/images/emails/upwork-facebook-social@2x.png' height='25' width='25' alt='Facebook' style='border:0;outline:none;display:block' class='CToWUd'>
                                                                                        </a>
                                                                                    </td>
                                                                                    <td width='13'>&nbsp;</td>
                                                                                    <td width='25'>
                                                                                        <a href='' title='Google+' target='_blank' data-saferedirecturl='#'>
                                                                                            <img src='https://ci6.googleusercontent.com/proxy/BMoTiSom4jklbjVTk_CREAA53RISVmkvE-GxJynLra4l4TtSqwISvxr0GMEHXq5vHsdmmH83U7SyXF2rBtPQLCUFUtHNJT-DoeH_obE5U64retbask8=s0-d-e1-ft#https://www.upwork.com/images/emails/upwork-google-social@2x.png' height='25' width='25' alt='Google+' style='border:0;outline:none;display:block' class='CToWUd'>
                                                                                        </a>
                                                                                    </td>
                                                                                    <td width='13'>&nbsp;</td>
                                                                                    <td width='25'>
                                                                                        <a href='' title='LinkedIn' target='_blank' data-saferedirecturl='#'>
                                                                                            <img src='https://ci3.googleusercontent.com/proxy/QKPI-g58WgKol8CwF1QdqFhFYn9xj4lbrPyWkPjpwbJvM9hfXvxfYf8KpmVyTX03tL0NeB3atKvpXdNh4pqpZt8cYg9JgE_lqI7Cm_usFGKzneWD8UI73Q=s0-d-e1-ft#https://www.upwork.com/images/emails/upwork-linkedin-social@2x.png' height='25' width='25' alt='LinkedIn' style='border:0;outline:none;display:block' class='CToWUd'>
                                                                                        </a>
                                                                                    </td>
                                                                                    <td width='13'>&nbsp;</td>
                                                                                    <td width='25'>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                
                                                                    </td>
                                                
                                                
                                                
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <table cellspacing='0' cellpadding='0' width='100%' border='0' align='center' bgcolor='#f2f2f2'>
                                                            <tbody>
                                                                <tr>
                                                
                                                
                                                
                                                                    <td valign='top' align='center' width='100%' style='padding-bottom:15px'>
                                                
                                                                        <table width='502' class='m_-6580639260561129619devicewidthinner' border='0' cellspacing='0' cellpadding='0' align='center'>
                                                
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align='center' style='padding:10px 10px 0px 10px'>
                                                                                        <span style='font-family:Arial,Helvetica,Sans serif;font-size:10px;line-height:12px;color:#494949'>
                                                                                            © 2017 ProctStart Inc.
                                                                                        </span>
                                                                                    </td>
                                                                                </tr>
                                                
                                                                            </tbody>
                                                                        </table>
                                                
                                                                    </td>
                                                
                                                
                                                
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                
                                                    </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
        
            </div>
            
        </div>
                                </body>
                                
                                </html>
        ";
        $mail->AltBody = "This is text only alternative body.";
        
        if (!$mail->Send()) {
            echo $mail->ErrorInfo;
        } else {
            
            echo "Thank you for requesting information";
            
        }
        
        
        echo json_encode($respone);
        
    } else {
        
        $data    = false;
        $msg     = 'error in saving data  of JobSeekerAplliedJob';
        $respone = array(
            'data' => $data,
            'msg' => $msg
        );
        echo json_encode($respone);
    }
    
}






?>