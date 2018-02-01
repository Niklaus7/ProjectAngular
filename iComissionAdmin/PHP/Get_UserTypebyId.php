<?php
include("db_connection.php");
date_default_timezone_set("Asia/Kolkata");
$data = json_decode(file_get_contents("php://input"));

$userTypeid = $data->userTypeid;

		$sql1="SELECT * FROM usertype where UserTypeID='$userTypeid'";
		$result1 = $conn->query($sql1);
		if ($result1->num_rows > 0) {
   
	 while($row=mysqli_fetch_array($result1))
{
  $array=$row;
$output[]=$array;
}
print(json_encode($output));

		}
		else
		{
			echo "error";
		}
?>