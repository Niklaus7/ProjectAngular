<?php
include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));
 //$bname = mysql_real_escape_string($data->bname);
 //$bauthor = mysql_real_escape_string($data->bphone);

	$sql="SELECT distinct JobLocation FROM jobpost";

	$result = $conn->query($sql);
	 while($row=mysqli_fetch_array($result)) 
	{
		$array=$row;
		$output[]=$array;	
	}

print(json_encode($output));


?>