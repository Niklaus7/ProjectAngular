<?php

//SAVE registration info

include("db_connection.php");
date_default_timezone_set("Asia/Kolkata");
$data = json_decode(file_get_contents("php://input"));

$Name = $data->Name;
$Email = $data->Email;
$Phone= $data->Phone;
$Designation= $data->Designation;
$Password= $data->Password;

$gender= $data->gender;
$registrationdate= $data->date("Y-m-d");
$RoleType= $data->RoleType;
$UserAccountcol="No";

$sql0 = "CALL usp_Insert_UserRegistration(?,?,?,?,?,?,?,?,?,?)";

$stmt0 = $conn->prepare($sql0);

$stmt0->bindParam("ississss",$RoleType,$Name,$UserAccountcol,
                            $Email,$Password,$Gender,
                            $ContactNo,$RegisterationDate,$IsActive,$ApprovedStatus);
if($stmt0->execute()){
    echo "registered successfully";
}
else
{
    $data = false;
    $msg ='error in saving data  of projectpost';
    $respone = array('data'=>$data,'msg'=>$msg);
    echo json_encode($respone);
}
?>