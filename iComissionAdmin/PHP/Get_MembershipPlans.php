<?php
include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

	$sql="SELECT * FROM membershipplan";

	$result = $conn->query($sql);
	 while($row=mysqli_fetch_array($result)) 
	{
		$array=$row;
		$output[]=$array;	
	}

print(json_encode($output));

?>