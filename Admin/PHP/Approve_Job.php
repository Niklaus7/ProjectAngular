<?php

    include("db_connection.php");
    $data = json_decode(file_get_contents("php://input"));
    $JobId = $data->JobId;
    $Status = $data->Status;
    $sql1 = "";
    if($Status == "Active"){
        $sql1="Update jobpost set JobActive='Inactive', JobAprrovedstatus='Removed' where JobPostID = '$JobId'";
    }
    else{
        $sql1="Update jobpost set JobActive='Active', JobAprrovedstatus='Yes' where JobPostID = '$JobId'";
    }

    $result1 = $conn->query($sql1);
    echo "Approved succssfully";

?>