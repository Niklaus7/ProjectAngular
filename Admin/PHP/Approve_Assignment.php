<?php

    include("db_connection.php");
    $data = json_decode(file_get_contents("php://input"));
    $ProjectPostID = $data->ProjectPostID;
    $Status = $data->Status;
    $sql1 = "";
    if($Status == "Active"){
        $sql1="Update projectpost set AssignmentActive='Inactive', AssignmentAprrovedstatus='Removed' where ProjectPostID = '$ProjectPostID'";
    }
    else{
        $sql1="Update projectpost set AssignmentActive='Active', AssignmentAprrovedstatus='Yes' where ProjectPostID = '$ProjectPostID'";
    }

    $result1 = $conn->query($sql1);
    echo "Approved succssfully";

?>