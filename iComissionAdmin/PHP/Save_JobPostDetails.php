<?php
//SAVE DATA WHEN USER POST NEW JOB OB JOB PORTAL

include("db_connection.php");
require("class.phpmailer.php");
$data = json_decode(file_get_contents("php://input"));

date_default_timezone_set("Asia/Kolkata");



$JobPostedBy = $data->jobPostedBy ;

$JobTitle = $data->jobtitle; 

//not get data at controller
$JobDescription = $data->jobdescription;

$NoOfVacancy = $data->NoOfVacancy;

$MinExp = $data->minexp ;

$MaxExp = $data->maxexp;

$MinSal = $data->minsalary;

$MaxSal = $data->maxsalary;

$JobLocation = $data->joblocation;

$JobIndustry = $data->industry;

$JobFunctionalArea = $data->functionalarea;

$UGQual = $data->upspec;

$PGQual = $data->pgspec;

$JobPostDate = $data->jobPostDateTime;

//give appropriate value
$JobActive = "Inactive";

$JobAprrovedstatus = "No";


$Skill= $data->Keywords ;

$lat = $data->lat;
$lng = $data->lng;
$officelocation = $data->officelocation;

if($officelocation == "Yes"){
    $sql9 ="SELECT officelocation,lat,lng FROM registeruserinforamtion where UserID = $JobPostedBy";
    $result9 = $conn->query($sql9);
    if ($result9->num_rows > 0)
    {
        while($row9 = $result9->fetch_assoc())
        {  
            $Officeloationselected = $row9['officelocation'];
            $Latselected = $row9['lat'];
            $Lngselected = $row9['lng'];
        }
    }
}
else{
           $Officeloationselected = $JobLocation;
           $Latselected = $lat;
           $Lngselected = $lng;
}

//not stored in db 
//$data->currency;
//$data->saldetails

// $CompanyName = $data->companyname;

// $AboutCompany = $data->aboutcompany;

// $CompanyWebSite= $data->companywebsite;

// $ContactPersonName = $data->companycontactpersonname;

// $CompanyAddress = $data->companyaddress;

// $ContactPersonPhNo = $data->companycontactPersonPhNo;

//to split json array
/*foreach($Skill as $key => $value) 
{
   echo $value->SkillSetID.",";
}*/

    $sql3 ="SELECT CompanyName,CompanyURL,AboutCompany,AuthorizedPersonEmail,AuthorizedPersonName,CompanyRegisteredAddress,AuthorizedPersonContact FROM registeruserinforamtion where UserID = $JobPostedBy";
    $result3 = $conn->query($sql3);
    if ($result3->num_rows > 0)
    {
        while($row3 = $result3->fetch_assoc())
        {  
            $CompanyName = $row3['CompanyName'];
            $AboutCompany = $row3['AboutCompany']; 
            $CompanyWebSite = $row3['CompanyURL'];
            $ContactPersonName = $row3['AuthorizedPersonName'];
            $AuthorizedPersonEmail = $row3['AuthorizedPersonEmail'];
            $CompanyAddress = $row3['CompanyRegisteredAddress'];
            $ContactPersonPhNo = $row3['AuthorizedPersonContact'];
        }
    }

    
$sql0 = "CALL usp_Insert_JobPost(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

$stmt0 = $conn->prepare($sql0);

$stmt0->bind_param("issiiiiissssssssss",$JobPostedBy, $JobTitle, $JobDescription, $NoOfVacancy, 
                                     $MinExp, $MaxExp, $MinSal, $MaxSal,
                                     $Officeloationselected, $JobIndustry, $JobFunctionalArea, $UGQual,
                                     $PGQual, $JobPostDate, $JobActive, $JobAprrovedstatus, $Latselected, $Lngselected);

if($stmt0->execute())
{

    $EmailID = $AuthorizedPersonEmail;
    $subject = "Thank you for posting your job with us.";
    
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
                                                                            Hi $ContactPersonName,
                                                                        </td>
                                                                    </tr>
    
    
                                                                    <tr>
                                                                        <td width='100%' height='40' style='border-collapse:collapse'></td>
                                                                    </tr>
    
    
                                                                    <tr>
                                                                        <td style='font-family:Helvetica,arial,sans-serif;font-size:14.5px;color:#666666;text-align:left;line-height:20px;border-collapse:collapse' align='left'>
                                                                            Thanks for getting started with Procstart and posting a job on our portal! Please wait for jobpost approval from ProcStart team and will inform you on mail regarding youe job post status. Once your job post is been approved by Procstart, will be available on ProcStart portal.
                                                                            <a style='color:#5bbc2e' href='' target='_blank' ></a>
                                                                        </td>
                                                                    </tr>
    
    
                                                                    <tr>
                                                                        <td width='100%' height='40' style='border-collapse:collapse'></td>
                                                                    </tr>
    
    
                                                                    <tr>
                                                                        <td style='font-family:Helvetica,arial,sans-serif;font-size:14.5px;color:#666666;text-align:left;line-height:20px;border-collapse:collapse' align='left'>
                                                                            Thanks again, Lets continue with <a href='http://www.procstart.com'>ProcStart</a>
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
        <img width='1px' height='1px' alt='' src='https://ci6.googleusercontent.com/proxy/Cvg78OrVnb_ElP8s78E_bit9zEilihHg441LmUh9D7YGC9PsKbY1uq4_NmNZ88s1TOcJrJnnof1BoqNTTgCtcqwFMwSigFyh6YCzF5SAdN2wXixmdAAUKD5rSXHgxXtmNzRNSxAIyrsya1nZ57H_4CC8XEFRPUd3oeMAxdyNZzvThd-ihYZPNJmQ-eGn4hfwveea39WkCw_NZTXMp9UBUeSIY4zSVQNpDV4bsLDA4Mq_OSyifWTK-JAdt0YRzdC2sduPNcymfRqJhXETdGqGJeGFQKEQoGxRovaWfv8_7Lj8FA1Mrlshbs7dSsmbzRp5tF4BPXA-J6qURYKrIO2grNmqYn3j5CCVq4GV0lQsrELQN19YFb_TbpV2udf14zHdccQ_tBaSTw8Q-KAazQ_7FNeTsPPsAwMo98fn5E34zQYO8zwweG_pHvhPsi0Hg6QaX0gbu7sxwRweFQh_mnM=s0-d-e1-ft#http://email.mg.upwork.com/o/eJxNj81ugzAQhJ8GbkHr9R8cfIC2eY3IxmtiFQOyoVXfviTNoZfZw8y3mvEGGFiu60Sl2IkuZV8zmUoPFeJ0RH-eivenBh9QA-tAQfAgfOfG0DrNnEAhpOtwVIKsxweg3-u78Z452SKoAHaUbGyRS-AUuk4hI3R1NAhMQ8sBOqa4ajiXp0rB5YBw_Xgb-mvf95WANDXH9r3mz2ZcU51NWu922eweZ8YBz8CUbJz_TAqUaRmpvEYchfJt-TfkCV-e9KvrbnZK22x3OhMlTsuxVXj9ohzDz40er38BvZBXEQ' class='CToWUd'>
    </div>
                            </body>
                            
                            </html>
    ";
    $mail->AltBody="This is text only alternative body.";
    $mail->Send();


    $sql3= "select MAX(JobPostID) AS JobPostID FROM jobpost"; 

    $result1 = $conn->query($sql3);

    $value = mysqli_fetch_object($result1);
    
    $value->JobPostID;

        $sql1 = "CALL usp_Insert_JobPostCompany(?,?,?,?,?,?,?)";

        $stmt1 = $conn->prepare($sql1);
        $stmt1->bind_param("isssssi",$value->JobPostID, $CompanyName, $AboutCompany, $CompanyWebSite, 
                                     $CompanyAddress, $ContactPersonName, $ContactPersonPhNo);
        if($stmt1->execute())
        {
                
                    $sql2 = "CALL usp_Insert_JobPostSkillSet(?,?)";
                    $stmt2 = $conn->prepare($sql2);
                    $stmt2->bind_param("is",$value->JobPostID, $Skill);

                    if($stmt2->execute())
                    {
                        $data = true;
                        $msg ='saved data';
                        $respone = array('data'=>$data,'msg'=>$msg);
                        echo json_encode($respone);   
                    }
                    else
                    {
                        $data = false;
                        $msg ='error in saving data  of JobPostSkillSet';
                        $respone = array('data'=>$data,'msg'=>$msg);
                        echo json_encode($respone);
                    }
        }
        else
        {
            $data = false;
            $msg ='error in saving data  of jobPostCompany';
            $respone = array('data'=>$data,'msg'=>$msg);
            echo json_encode($respone);
        }

}
else
{
    $data = false;
    $msg ='error in saving data  of job post';
    $respone = array('data'=>$data,'msg'=>$msg);
    echo json_encode($respone);
}




?>