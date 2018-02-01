<?php


//GET All Messages w.r.t particular user

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

$UserPlanID = $data->UserPlanID;
$CreatorID = $data->CreatorID;




$sql  = "DELETE FROM `usermembershipplan` WHERE `UserPlanID` = $UserPlanID and CreatedBy = $CreatorID";
if ($conn->query($sql)) 
{
  $sql1 = "DELETE FROM `membershipplanfeatures` WHERE `UserPlanID` = $UserPlanID";
  if($conn->query($sql1))
  {
    $sql2 = "DELETE FROM `planconfiguration` WHERE `UserPlanID` = $UserPlanID";
    if($conn->query($sql2))
    {
        $data = true;
        $msg = 'deleted data';
        $respone = array('data'=>$data,'msg'=>$msg);            
        echo json_encode($respone);
    }
  }
}
else
{
    $data = false;
    $msg = 'error in deleting data';
    $respone = array('data'=>$data,'msg'=>$msg);            
    echo json_encode($respone);
}


  




?>

