<?php

    include("db_connection.php");
    $data = json_decode(file_get_contents("php://input"));
    $JobId = $data->JobId;
    $sql1="Update jobpost set JobActive='Deactive',JobAprrovedstatus='No' where JobPostID = '$JobId'";
    if($conn->query($sql1))
    {
        $sql2 =  "DELETE FROM `jobapplyactivity` WHERE `JobPostID` = $JobId";
        if($conn->query($sql2))
        {
            $data = true;
            $msg = 'deleted data';
            $respone = array('data'=>$data,'msg'=>$msg);            
            echo json_encode($respone);
        }
    }
        

?>