<?php

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

$JobSeekerID = $data->JobSeekerID;

$sql1="SELECT * FROM useraccount where UserAccountID = $JobSeekerID";

$result1 = $conn->query($sql1);

if ($result1->num_rows > 0) 
{
    while($row = $result1->fetch_assoc())
    {   
        $output[] = $row;
    }
    echo json_encode($output);
}
else
{
    echo "error";
}
?>