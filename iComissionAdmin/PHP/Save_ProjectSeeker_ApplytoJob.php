<?php

//SAVE job seeker data when aplly to particular job

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

date_default_timezone_set("Asia/Kolkata");

$ProjectSeekerID = $data->ProjectSeekerID;
$ProjectID =  $data->ProjectID;
$ApplyDate= $data->ApplyDate;
$Biddamount =  $data->Biddamount;
$Biddesr= $data->Biddesr;
$JobApplyStatus='yes';

$sql = "SELECT * FROM projectapplyactivity where ProjectPostID = $ProjectID and UserID = $ProjectSeekerID";

$result= $conn->query($sql);
if ($result->num_rows>0) 
{
    $data = false;
    $msg ='Already applied to job';
    $respone = array('data'=>$data,'msg'=>$msg);
    echo json_encode($respone);
}
else
{
    $sql0 = "CALL usp_Insert_ProjectSeekerAplliedJob(?,?,?,?,?,?)";
    $stmt0 = $conn->prepare($sql0);
    
    $stmt0->bind_param("iissis",$ProjectSeekerID,$ProjectID,$ApplyDate,$JobApplyStatus,$Biddamount,$Biddesr);
    
    if($stmt0->execute())
    {                                  
        $data = true;
        $msg = 'data saved';
        $respone = array('data'=>$data,'msg'=>$msg);            
        echo json_encode($respone);
    }
    else
    {
        $data = false;
        $msg ='error in saving data  of ProjectSeekerAplliedJob';
        $respone = array('data'=>$data,'msg'=>$msg);
        echo json_encode($respone);
    }
}
?>