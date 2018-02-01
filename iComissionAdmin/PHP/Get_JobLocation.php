<?php
include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));
 //$bname = mysql_real_escape_string($data->bname);
 //$bauthor = mysql_real_escape_string($data->bphone);

	$sql="SELECT distinct JobLocation FROM jobpost";
	getdata($sql,'JobLocation');

	$sql1="SELECT distinct JobIndustry FROM jobpost";
	getdata($sql1,'JobIndustry');


function getdata($sql2,$arrname){
	include("db_connection.php");

	global $output;

    $result1 = $conn->query($sql2);
		if ($result1->num_rows > 0) {
   
	 	while($row=mysqli_fetch_array($result1)) 
		{
			$array=$row;
			$output1[]=$array;
		}
		$output[$arrname]=$output1;
	}
}

print(json_encode($output));

?>