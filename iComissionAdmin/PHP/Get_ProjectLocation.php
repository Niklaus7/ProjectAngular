<?php
include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));
 //$bname = mysql_real_escape_string($data->bname);
 //$bauthor = mysql_real_escape_string($data->bphone);

	$sql="SELECT distinct ProjectType FROM projectpost";
	getdata($sql,'ProjectType');

	$sql1="SELECT distinct ProjectLocation FROM projectpost";
	getdata($sql1,'ProjectLocation');


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