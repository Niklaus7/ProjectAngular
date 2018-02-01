<?php
   $host="localhost";
  $uname="root";
  $pass="";
  $database = "icommissions"; 
$conn=new mysqli($host,$uname,$pass,$database);

if($conn->connect_error){
	die("connection failed :".$conn->connect_error);
}
?>