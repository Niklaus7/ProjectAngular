<?php

//get data of no of candidaate apply to particular job


include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));


$JobId = $data->JobId ;

$sql1="SELECT * FROM jobapplyactivity where JobPostID = $JobId";

$result1 = $conn->query($sql1);
          
	if ($result1->num_rows > 0) 
    {
   
	        while($row = $result1->fetch_assoc())
            {

                         $output = $row;
                         $ID = $row['UserID'];

                         $sql2 ="SELECT * FROM jobseekerprofile where JobSeekerID = $ID";
                         
                                 $result2 = $conn->query($sql2);
                                 
                                 if ($result2->num_rows > 0) 
                                 {
                            
                                     while($row2 = $result2->fetch_assoc())
                                     {
                                         $output = $row2;
                                       
                                         $jobseekertype = $row2['JobSeekerType'];
                                         if( $jobseekertype == 'Freshers')
                                         {
                                             $output['TotalExp_Year'] = "0";
                                             $output['TotalExp_Month'] = "0";
                                             $output['JobTitle'] = "Freshers";
                                             $output['Salary'] = "0";
                                         }
                                         else
                                         {
                                             $sql4 = "SELECT * FROM jobseekerexperiencedetails where  JobSeekerID =  $ID ";
                                             $result4 = $conn->query($sql4);
                             
                                             if($result4->num_rows > 0) 
                                             {
                                                 while($row4 = $result4->fetch_assoc())
                                                 {                     
                                                     $Exp_year = $row4["TotalExp_Year"];
                                                     $Exp_month = $row4["TotalExp_Month"];
                                                     $Salary = $row4["Salary"];
                                                 }
                                                 
                                                 $output["TotalExp_Year"] = $Exp_year;
                                                 $output["TotalExp_Month"] = $Exp_month;
                                                 $output["Salary"] = $Salary;
                                             }
                                             else
                                             {
                                                 //echo $conn->error();
                                                 $data = false;
                                                 $msg ='No data';
                                                 $respone = array('data'=>$data,'msg'=>$msg);
                                                 echo json_encode($respone);
                                             }
                                         }

                                         $sql9    = "SELECT * FROM jobseekerprofileimage where JobSeekerID = $ID";
                                        $result9 = $conn->query($sql9);
                                        if($result9->num_rows > 0) 
                                        {
                                            while ($row9 = $result9->fetch_assoc()) {
                                                $output["ProfileImage"] = $row9["ProfileImage"];
                                            }
                                        }
                                        else
                                        {
                                            $output["ProfileImage"] = "No Profile Image";
                                        }
                                     }
                                }
                                else
                                {
                                    $data = false;
                                    $msg ='No data';
                                    $respone = array('data'=>$data,'msg'=>$msg);
                                    echo json_encode($respone);
                                }
                                /// to generate random code ofr username
                                $seed = str_split('ABCDEFGHIJKLMNOPQRSTUVWXYZ'); // and any other characters
                                shuffle($seed); // probably optional since array_is randomized; this may be redundant
                                $rand = '';
                                foreach (array_rand($seed, 4) as $k) $rand .= $seed[$k];
                                $output["UserEncodedName"] = $rand;
                        
                        $respone[] = $output;
            }       
            

            echo json_encode($respone);

	}
	else
	{
            $data = false;
            $msg ='No data';
            $respone = array('data'=>$data,'msg'=>$msg);
            echo json_encode($respone);
	}

?>