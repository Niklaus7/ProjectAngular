<?php


//GET All Messages w.r.t particular user

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

$UserPlanID = $data->UserPlanID;
$CreatorID = $data->CreatorID;

$AnnualSubs = $data->AnnualSubs;
$MonthSubs = $data->MonthSubs;
$Desc = $data->Desc;


$sql  = "SELECT * FROM `planconfiguration` WHERE `UserPlanID` = $UserPlanID and PlanConfiguredBy = $CreatorID";
$result = $conn->query($sql);

if ($result->num_rows > 0) 
{
    $data = false;
    $msg = 'error in saving data';
    $respone = array('data'=>$data,'msg'=>$msg);            
    echo json_encode($respone);
}
else
{           
            $sql3 = "insert into planconfiguration(`UserPlanID`, `PlanConfiguredBy`, `AnnualSubs`, `MonthSubs`, `Description`)
                                values($UserPlanID,$CreatorID,$AnnualSubs,$MonthSubs,'$Desc')";
                        if($conn->query($sql3))
                        {
                            $data = true;
                            $msg = 'data saved';
                            $respone = array('data'=>$data,'msg'=>$msg);            
                            echo json_encode($respone);
                        }
                        else
                        {
                            //echo $sql3.$conn->error;
                            $data = false;
                            $msg = 'error in saving data';
                            $respone = array('data'=>$data,'msg'=>$msg);            
                            echo json_encode($respone);
                        }
            
}


  




?>

