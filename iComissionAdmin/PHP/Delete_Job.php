<?php

    include("db_connection.php");
    $data = json_decode(file_get_contents("php://input"));
    $JobId = $data->JobId;
    $sql1="Update jobpost set JobActive='Inactive' where JobPostID = '$JobId'";

    $result1 = $conn->query($sql1);
    echo "deleted succssfully";

?>