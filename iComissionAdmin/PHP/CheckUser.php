<?php

//includes db_connection php for database connection
include("db_connection.php");
$data = json_decode(file_get_contents("php://input"));

$Email = $data->Email;

$sql="SELECT UserAccountID FROM useraccount where UserName = '$Email'";
$result = $conn->query($sql);
if($result->num_rows > 0)
{
    echo "Already exists";
}
else
{
    echo "Success";
}

?>