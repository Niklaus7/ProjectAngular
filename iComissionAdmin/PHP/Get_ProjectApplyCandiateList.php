<?php

//get data of no of candidaate apply to particular job


include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));


$ProjectId = $data->ProjectId;

$sql1="SELECT * FROM projectapplyactivity where ProjectPostID = $ProjectId";

$result1 = $conn->query($sql1);
          
	if ($result1->num_rows > 0) 
    {
   
	        while($row = $result1->fetch_assoc())
            {

                         $output = $row;
                         $ID = $row['UserID'];

                         $sql3= "SELECT * FROM useraccount where UserAccountID = '$ID'";
                         $result3 = $conn->query($sql3);
                         
                         if($result3->num_rows > 0) 
                         {
                    
                                while($row3 = $result3->fetch_assoc())
                                {
                                        $UserName = $row3['FirstName'];
                                        $usertype = $row3['UserTypeID'];

                                        $sql4= "SELECT * FROM usertype where UserTypeID = '$usertype'";
                                        $result4 = $conn->query($sql4);
                                        
                                        if($result4->num_rows > 0) 
                                        {
                                   
                                               while($row4 = $result4->fetch_assoc())
                                               {
                                                    $UserRoleName = $row4["UserRoleName"];
                                                    if($UserRoleName == 'AssignmentSeeker')
                                                    {
                                                        $sql5="SELECT * FROM assignmentseekercompanyinfo where  AssignmentSeekerID =  $ID ";
                                                        
                                                                $result5 = $conn->query($sql5);
                                                                
                                                                if ($result5->num_rows > 0) 
                                                                {
                                                           
                                                                    while($row5 = $result5->fetch_assoc())
                                                                    {
                                                                        
                                                                        /*$output['HighestQualification'] = $row2['HighestQualification'];
                                                                        $output['PassoutYear'] = $row2['PassoutYear'];
                                                                        $output['CPI'] = $row2['CPI'];*/
                                                                        $output['CompanyName'] = $row5['CompanyName'];
                                                                        $output['CompanyLogo'] = $row5['CompanyLogo'];
                                                                        $output['UserName'] =  $UserName;
                                                                    }
                                                                }
                                                    }
                                                    else
                                                    {
                                                        $sql2 ="SELECT * FROM registeruserinforamtion where UserID = $ID";
                                                        
                                                                $result2 = $conn->query($sql2);
                                                                
                                                                if ($result2->num_rows > 0) 
                                                                {
                                                           
                                                                    while($row2 = $result2->fetch_assoc())
                                                                    {
                                                                       $output["AuthorizedPersonName"] = $row2['AuthorizedPersonName'];
                                                                       $output["CompanyName"] = $row2['CompanyName'];
                                                                       $output["CompanyLogo"] = $row2['CompanyLogo'];
                                                                       $output["UserID"] = $row2['UserID'];
                                                                        
                                                                    }
                                                                   }
                                                               else
                                                               {
                                                                   // $data = false;
                                                                   // $msg ='No data';
                                                                   // $respone = array('data'=>$data,'msg'=>$msg);
                                                                   // echo json_encode($respone);
                                                               }
                                                    }
                                               }
                                        }
                                }
                         }    
//echo $ID;              
                                
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