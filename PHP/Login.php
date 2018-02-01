<?php

//Check all users login php file

//includes db_connection php for database connection
include("db_connection.php");
date_default_timezone_set("Asia/Kolkata");
$data = json_decode(file_get_contents("php://input"));

//Get username, password sent from js call to Login
$username = $data->username;
$password = $data->password;

		//query to check the user with these credentilas exists or not
		$sql1="SELECT UserTypeID,FirstName,UserAccountID FROM useraccount where UserName='$username' and Password='$password'";
		$result1 = $conn->query($sql1);
		if ($result1->num_rows > 0) {
   
			while($row=mysqli_fetch_array($result1))
			{
				$array=$row;
				//if exists get the Role name from usertype table using UserTypeID of that user
				$UserTypeId =  $row["UserTypeID"];
				$sql2 = "SELECT UserRoleName FROM usertype where UserTypeID='$UserTypeId'";
				$result2 = $conn->query($sql2);
				while($row1=mysqli_fetch_array($result2))
				{
					$UserRoleName = $row1["UserRoleName"];
				}
				$array["UserRoleName"] = $UserRoleName;
				$UserAccountID =  $row["UserAccountID"];
				$profileimage="";
				$IsJobSeeker="";
				//And in addition, if user has completed the Jobseeker Profile, based on this we will redirect the user after login directly to jobseeker profile to complete
				$sql4 = "SELECT JobSeekerID FROM jobseekerprofile where JobSeekerID='$UserAccountID'";
				$result4 = $conn->query($sql4);
				if ($result4->num_rows > 0) 
				{
					//if record exists with the UserAccountID, means user has completed the jobseeker profile
					$IsJobSeeker = "Yes";
					$sql6 = "SELECT ProfileImage FROM jobseekerprofileimage where JobSeekerID='$UserAccountID'";
					$result6 = $conn->query($sql6);
					while($row6=mysqli_fetch_array($result6))
					{
						$profileimage = $row6["ProfileImage"];
					}
					$array["profileimage"] = $profileimage;
				}
				else{
					//else user has not completed the jobseeker profile
					$IsJobSeeker = "No";
					$sql99 = "SELECT CompanyLogo FROM registeruserinforamtion where UserID='$UserAccountID'";
					$result99 = $conn->query($sql99);
					while($row99=mysqli_fetch_array($result99))
					{
						$profileimage = $row99["CompanyLogo"];
					}
					$array["CompanyLogo"] = $profileimage;
				}
				$array["IsJobSeeker"] = $IsJobSeeker;
				$array["profileimage"] = $profileimage;

				$sql5 = "SELECT UserID FROM registeruserinforamtion where UserID='$UserAccountID'";
				$result5 = $conn->query($sql5);
				if ($result5->num_rows > 0) 
				{
					$ProfileComplete = "Yes";
				}
				else{
					$ProfileComplete = "No";
				}
				$array["ProfileComplete"] = $ProfileComplete;

				$output[]=$array;
			}
			print(json_encode($output));
		}
		else
		{
			echo "error"; //error message
		}
?>