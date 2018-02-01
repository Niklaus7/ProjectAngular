<?php


//GET JOB POSTED  AND GET TOATL COUNT OF Job AND TOTAL CANDIDATE APpLY TO THAT JOB W.R.T USER

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));


$JobId = $data->JobId ;

$sql1= "SELECT * FROM jobpost where JobPostID = $JobId";

        $result1 = $conn->query($sql1);
        
	    if ($result1->num_rows > 0) 
        {
   
	        while($row = $result1->fetch_assoc())
            {
                $output = $row;

                $id = $row['JobPostID'];
                $JobPostedBy = $row['JobPostedBy'];

                $sql6 ="SELECT Lat,Lng,CompanyURL,CompanyLogo FROM registeruserinforamtion where UserID = $JobPostedBy";
                $result6 = $conn->query($sql6);
                if ($result6->num_rows > 0)
                {
                    while($row6 = $result6->fetch_assoc())
                    {  
                        $output['Lat'] = $row6['Lat'];
                        $output['Lng'] = $row6['Lng'];
                        $output['CompanyURL'] = $row6['CompanyURL'];
                        $output['CompanyLogo'] = $row6['CompanyLogo'];
                    }
                }

                
                        $sql2 ="SELECT * from company where JobPostID = $id ";
                
                        $result2 = $conn->query($sql2);

                        if ($result2->num_rows > 0) 
                        {
                   
                            while($row2 = $result2->fetch_assoc())
                            {
                               
                                $jid = $row2['JobPostID'];
                                $output['CompanyName'] = $row2['CompanyName'];
                                $output['AboutCompany'] = $row2['AboutCompany'];
                                $output['CompanyWebSite'] = $row2['CompanyWebSite'];
                                $output['CompanyAddress'] = $row2['CompanyAddress'];
                                $output['ContactPersonName'] = $row2['ContactPersonName'];
                                $output['ContactPersonPhNo'] = $row2['ContactPersonPhNo'];

                                $sql3 ="SELECT * from jobpostskillset where JobPostID =  $id ";
                                
                                        $result3 = $conn->query($sql3);
                
                                        if ($result3->num_rows > 0) 
                                        {
                                            
                                            while($row3 = $result3->fetch_assoc())
                                            {
                                               
                                             
                                                $output['Skillset']  = $row3['SkillSetID'];
                                            }                           
                                           
                                        }
                                             
                                        
                            }                           
                            
                        }
                        else
                        {
                            echo "error";
                        }

                        

                        
                        
                        

                      
                        //$output['skillset']  = $skillset; 
                        $respone[]= $output; 
                                                                                                         
            }

            echo json_encode($respone);

		}
		else
		{
            // $data = false;
            // $msg ='No data';
            // $respone = array('data'=>$data,'msg'=>$msg);
            // echo json_encode($respone);
            echo "error";
		}

?>