<?php
//SAVE DATA WHEN USER POST NEW JOB OB JOB PORTAL

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

date_default_timezone_set("Asia/Kolkata");

$NoOfVacancy = $data->NoOfVacancy ;
$JobPostBy = $data->JobPostBy;
$JobID = $data->JobID;


$sql = "update jobpost set NoOfVacancy = $NoOfVacancy where JobPostID = $JobID and JobPostedBy = $JobPostBy";


if ($conn->query($sql)) 
{
    $data = true;
    $msg ='updated vacancies';
    $respone = array('data'=>$data,'msg'=>$msg);
    echo json_encode($respone); 
} 
else 
{
        $data = false;
        $msg ='error in saving data';
        $respone = array('data'=>$data,'msg'=>$msg);
        echo json_encode($respone);    
}

?>