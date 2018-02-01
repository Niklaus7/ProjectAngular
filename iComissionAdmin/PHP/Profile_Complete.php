<?php

//Check all users login php file

//includes db_connection php for database connection
include("db_connection.php");
date_default_timezone_set("Asia/Kolkata");
$data = json_decode(file_get_contents("php://input"));

$UserAccountID = $data->userTypeid;

$sql5 = "SELECT ProfileComplete FROM registeruserinforamtion where UserID='$UserAccountID'";
$result5 = $conn->query($sql5);
while($row=mysqli_fetch_array($result5)) 
{
    $ProfileComplete = $row["ProfileComplete"];
}
$array["ProfileComplete"] = $ProfileComplete;

$output[]=$array;
print(json_encode($output));

?>