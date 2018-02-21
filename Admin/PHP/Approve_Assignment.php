<?php

    include("db_connection.php");
    $data = json_decode(file_get_contents("php://input"));
    $ProjectPostID = $data->ProjectPostID;
    $SecurityDeposite = $data->SecurityDeposite;
    $Status = $data->Status;
    $PaymentStatus = "No";
    $sql1 = "";
    if($Status == "Active")
    {
        $sql1="Update projectpost set AssignmentActive='Inactive', AssignmentAprrovedstatus='Removed' where ProjectPostID = '$ProjectPostID'";
    }
    else{
        $sql1="Update projectpost set AssignmentActive='Active', AssignmentAprrovedstatus='Yes' where ProjectPostID = '$ProjectPostID'";
    }

    if($conn->query($sql1))
    {
        $sql2 = "insert into ProjectSecurityDepositeInfo(ProjectID,SecurityDepositeAmount,PaymentStatus)
                            values($ProjectPostID,$SecurityDeposite,'$PaymentStatus')";
        if($conn->query($sql2))
        {
            $data = true;
            $msg = 'data saved';
            $respone = array('data'=>$data,'msg'=>$msg);            
            echo json_encode($respone);
        }
        else
        {
            $data = false;
            $msg = 'error in saving data';
            $respone = array('data'=>$data,'msg'=>$msg);            
            echo json_encode($respone);
        }
    }
    else
    {
        $data = false;
        $msg = 'error in saving data';
        $respone = array('data'=>$data,'msg'=>$msg);            
        echo json_encode($respone);
    }

?>