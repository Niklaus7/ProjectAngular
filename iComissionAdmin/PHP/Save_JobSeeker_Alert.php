<?php

//includes db_connection php for database connection
include("db_connection.php");
require("class.phpmailer.php");
$data = json_decode(file_get_contents("php://input"));

$JobalertName = $data->JobalertName;
$UserID = $data->UserID;
$skills = $data->skills;
$location = $data->location;
$MinExp = $data->MinExp;
$MaxExp = $data->MaxExp;
$salary = $data->salary;
$industry = $data->industry;
$preference = $data->preference;

$sql0 = "CALL usp_Insert_JobSeekerAlert(?,?,?,?,?,?,?,?,?)";

$stmt0 = $conn->prepare($sql0);

$stmt0->bind_param("isssiiiss",$UserID,$JobalertName,$skills,$location,
                            $MinExp,$MaxExp,$salary,
                            $industry,$preference);

if($stmt0->execute())
{

    $sql2         = "SELECT UserName,FirstName FROM useraccount where UserAccountID = $UserID";
    $result2      = $conn->query($sql2);
    if ($result2->num_rows > 0) {
        while ($row2 = $result2->fetch_assoc()) {
            $Email = $row2["UserName"];
            $FirstName = $row2["FirstName"];
        }
    }

    $joblocation = $location;
    $Salary = $salary;
    $keywords = $skills;

    $JobLocations = explode(",",$joblocation);
    $FinalLoc=[];
    for($i=0; $i< sizeof($JobLocations);$i++){
        $FinalLoc[$i] = "j1.JobLocation LIKE '%".$JobLocations[$i]."%'";
    }
    $FinalLocation = implode(" or ",$FinalLoc);

    $keywordss = explode(",",$keywords);
    $keywrds=[];
    for($j=0; $j< sizeof($keywordss);$j++){
        $keywrds[$j] = "j2.SkillSetID LIKE '%".$keywordss[$j]."%'";
    }
    $Finalkeywords = implode(" or ",$keywrds);

    $sql1 = "SELECT j1.*,j2.* FROM jobpost j1 inner join jobpostskillset j2 on j1.JobPostID = j2.JobPostID WHERE ($Finalkeywords) and ($FinalLocation) and j1.MinExp = '$MinExp' and j1.MaxExp = '$MaxExp' and j1.MinSal >= '$Salary' order by j1.JobPostDate DESC";
    
    $result1 = $conn->query($sql1);
    
    $bindJob = "";
    if ($result1->num_rows > 0) 
    {
        while($row = $result1->fetch_assoc())
        {
            $JobPostID = $row["JobPostID"];
            $jobtitle = $row["JobTitle"];
            $MinExp = $row["MinExp"];
            $MaxExp = $row["MaxExp"];
            $MinSal = $row["MinSal"];
            $MaxSal = $row["MaxSal"];
            $JobLocation = $row["JobLocation"];
            $JobIndustry = $row["JobIndustry"];
            $SkillSetID = $row["SkillSetID"];

            $sql3         = "SELECT CompanyName FROM company where JobPostID = $JobPostID";
            $result3      = $conn->query($sql3);
            if ($result3->num_rows > 0) {
                while ($row3 = $result3->fetch_assoc()) {
                    $CompanyName = $row3["CompanyName"];
                }
            }
            
            $bindJob = "<tr class='m_6683775198893794464jdTpl' style='border:0;border-collapse:collapse'>
                                    <td class='m_6683775198893794464one-column' style='padding-top:10px;padding-bottom:0px;background-color:#ffffff'>
                                        <table width='100%' style='border-spacing:0;font-family:sans-serif;color:#333333'>
                                            <tbody>
                                                <tr>
                                                    <td class='m_6683775198893794464contents' style='width:100%;padding:0px 0px 10px 0px;text-align:left;border-bottom:1px solid #eee'>
                                                        <p style='Margin:0;font-size:14px;Margin-bottom:2px;color:#0964ca;padding:0;text-decoration:none'>
                                                            <a href='#'
                                                                style='text-decoration:none' target='_blank' data-saferedirecturl='#'>
                                                                $jobtitle ($MinExp - $MaxExp yrs.)
                                                            </a>
                                                        </p>
                                                        <p style='Margin:0;font-size:13px;Margin-bottom:1px;padding:0'>
                                                        <b>Salary:</b>
                                                           $ $MinSal - $MaxSal / year.
                                                        </p>
                                                        <p style='Margin:0;font-size:13px;Margin-bottom:1px;padding:0'>
                                                        <b>Company:</b>
                                                            $CompanyName
                                                        </p>
                                                        <p style='Margin:0;font-size:13px;Margin-bottom:1px;color:#8c8c8c;padding:0'>
                                                        <b>Job Location:</b>
                                                            $JobLocation
                                                        </p>
                                                        <p class='m_6683775198893794464fadeFont' style='Margin:0;Margin-bottom:0px;color:#8c8c8c;font-size:13px;padding:0'>
                                                            <b>Keyskills:</b>
                                                            $SkillSetID
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>";
        }
        $EmailID = $Email;
        $subject = $FirstName.", check out the relevent jobs based on your job alert";
        
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
                                                            <td style='font-family:Helvetica,arial,sans-serif;font-size:14.5px;color:#666666;text-align:left;line-height:20px;border-collapse:collapse;padding-top: 20px'>
                                                                <table width='100%' align='center' cellspacing='0' cellpadding='0' border='0' class='m_-6580639260561129619devicewidthinner' style='border-collapse:collapse'>
                                                                    <tbody>
        
                                                                        <tr>
                                                                            <td style='font-family:Helvetica;font-size:24px;color:#494949;text-align:left;line-height:20px;font-weight:bold;border-collapse:collapse' align='left'>
                                                                                Hi $FirstName,
                                                                            </td>
                                                                        </tr>
        
                                                                        <tr>
                                                                            <td style='font-family:Helvetica,arial,sans-serif;font-size:14.5px;color:#666666;text-align:left;line-height:20px;border-collapse:collapse;padding: 30px 0px;' align='left'>
                                                                            <table>
                                                                            <tr>
                                                                                <td class='m_6683775198893794464one-column' style='padding-top:0;padding-bottom:0;padding-right:0;padding-left:0'>
                                                                                    <table width='100%' style='border-spacing:0;font-family:sans-serif;color:#333333'>
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class='m_6683775198893794464pad10 m_6683775198893794464contents' style='width:100%;padding-top:10px;padding-bottom:10px;text-align:left'>
                                                                                                    <p style='Margin:0;font-size:14px;Margin-bottom:8px'>Here are some recommended jobs which are also applied by other jobssekers from your industry with same job skills</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                $bindJob
                                                                                </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                            </td>
                                                                        </tr>
    
                                                                        <tr>
                                                                            <td style='font-family:Helvetica,arial,sans-serif;font-size:14.5px;color:#666666;text-align:left;line-height:20px;border-collapse:collapse' align='left'>
                                                                                So, Let's see the jobs recommended for you on <a href='http://www.procstart.com'>ProcStart</a>
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

    }

    echo "JobAlert Created successfully";
}
else{
    echo "error";
}

?>