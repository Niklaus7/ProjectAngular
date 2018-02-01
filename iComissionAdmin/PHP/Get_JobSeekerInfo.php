<?php


//GET JOBseeker info and list

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));


$JobSeekerID = $data->JobSeekerID ;

if($JobSeekerID =='null')
{
    $sql1="SELECT * FROM jobseekerprofile";
    
            $result1 = $conn->query($sql1);
            
            if ($result1->num_rows > 0) 
            {
       
                while($row = $result1->fetch_assoc())
                {
                    $output = $row;
                    $id = $row['JobSeekerID'];
                    $jobseekertype = $row['JobSeekerType'];
                            
                            $sql2="SELECT * FROM jobseekereducatindetails where  JobSeekerID =  $id ";
                    
                            $result2 = $conn->query($sql2);
                            
                            if ($result2->num_rows > 0) 
                            {
                       
                                while($row2 = $result2->fetch_assoc())
                                {
                                    
                                    $output['HighestQualification'] = $row2['HighestQualification'];
                                    $output['PassoutYear'] = $row2['PassoutYear'];
                                    $output['CPI'] = $row2['CPI'];
    
                                            $sql3="SELECT * FROM jobseekerskillset where  JobSeekerID =  $id ";
                                    
                                            $result3 = $conn->query($sql3);
                                            
                                            if ($result3->num_rows > 0) 
                                            {
                                                while($row3 = $result3->fetch_assoc())
                                                {
                                                        $output['SkillSetID'] = $row3['SkillSetID'];
    
                                                        if( $jobseekertype == 'Freshers')
                                                        {
                                                            $sql4 = "SELECT ProfileImage FROM jobseekerprofileimage where JobSeekerID =  $id";
                                                            $result4 = $conn->query($sql4);
                                            
                                                            if($result4->num_rows > 0) 
                                                            {
                                                                while($row4 = $result4->fetch_assoc())
                                                                {   
                                                                    $output['ProfileImage']   = $row4['ProfileImage'];  
                                                                }
                                                            }
                                                                $output['TotalExp_Year'] = "0";
                                                                $output['TotalExp_Month'] ="0";                                                                $output['JobTitle'] = "Freshers";
                                                                $output['Salary'] = "0";
                                                        }
                                                        else
                                                        {
                                                            $sql9 = "SELECT j1.*,j2.ProfileImage FROM jobseekerexperiencedetails j1 inner join jobseekerprofileimage j2 on j1.JobSeekerID = j2.JobSeekerID";
                                                            $result9 = $conn->query($sql9);
                                            
                                                            if($result9->num_rows > 0) 
                                                            {
                                                                while($row9 = $result9->fetch_assoc())
                                                                {                       
                                                                    $output['TotalExp_Year'] = $row9['TotalExp_Year'];
                                                                    $output['TotalExp_Month'] = $row9['TotalExp_Month'];
                                                                    $output['JobTitle'] = $row9['JobTitle'];   
                                                                    $output['CompanyName'] = $row9['CompanyName'];   
                                                                    $output['Salary']   = $row9['Salary'];
                                                                    $output['ProfileImage']   = $row9['ProfileImage'];
                                                                }
                                                                
                                                            }
                                                            // else
                                                            // {
                                                            //     $data = false;
                                                            //     $msg ='No data';
                                                            //     $respone = array('data'=>$data,'msg'=>$msg);
                                                            //     echo json_encode($respone);
                                                            // }
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
                                    
    
                                }
                            }
                            else
                            {
                                $data = false;
                                $msg ='No data';
                                $respone = array('data'=>$data,'msg'=>$msg);
                                echo json_encode($respone);
                            }
                   
                    
                        
                    $respone[]= $output; 
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
}//get all job seeker info
else
{
    $sql1="SELECT * FROM jobseekerprofile where JobSeekerID = $JobSeekerID ";
    
            $result1 = $conn->query($sql1);
            
            if ($result1->num_rows > 0) 
            {
       
                while($row = $result1->fetch_assoc())
                {
                    $output = $row;
                    
                    $jobseekertype = $row['JobSeekerType'];
    
                            
                            $sql2="SELECT * FROM jobseekereducatindetails where  JobSeekerID =  $JobSeekerID ";
                    
                            $result2 = $conn->query($sql2);
                            
                            if ($result2->num_rows > 0) 
                            {
                       
                                while($row2 = $result2->fetch_assoc())
                                {
                                    
                                    /*$output['HighestQualification'] = $row2['HighestQualification'];
                                    $output['PassoutYear'] = $row2['PassoutYear'];
                                    $output['CPI'] = $row2['CPI'];*/
                                    $output['EducationDetails'] = $row2;
                                            $sql3="SELECT * FROM jobseekerskillset where  JobSeekerID = $JobSeekerID ";
                                    
                                            $result3 = $conn->query($sql3);
                                            
                                            if ($result3->num_rows > 0) 
                                            {
                                       
                                                while($row3 = $result3->fetch_assoc())
                                                {
                                                        //$output['SkillSetID'] = $row3['SkillSetID'];
                                                        $output['Skill'] = $row3;
    
                                                        if( $jobseekertype == 'Freshers')
                                                        {
                                                            $sql4 = "SELECT ProfileImage FROM jobseekerprofileimage where JobSeekerID =  $JobSeekerID";
                                                            $result4 = $conn->query($sql4);
                                            
                                                            if($result4->num_rows > 0) 
                                                            {
                                                                while($row4 = $result4->fetch_assoc())
                                                                {   
                                                                    $output['ProfileImage']   = $row4['ProfileImage'];  
                                                                }
                                                            }
                                                            $output['TotalExp_Year'] = "0";
                                                            $output['TotalExp_Month'] = "0";
                                                            $output['JobTitle'] = "Freshers";
                                                            $output['Salary']   = '0';
                                                        }
                                                        else
                                                        {
                                                            $sql9 = "SELECT j1.*,j2.ProfileImage FROM jobseekerexperiencedetails j1 inner join jobseekerprofileimage j2 on j1.JobSeekerID = j2.JobSeekerID";
                                                            $result9 = $conn->query($sql9);
                                            
                                                            if($result9->num_rows > 0) 
                                                            {
                                                                while($row9 = $result9->fetch_assoc())
                                                                {                       
                                                                    $output['TotalExp_Year'] = $row9['TotalExp_Year'];
                                                                    $output['TotalExp_Month'] = $row9['TotalExp_Month'];
                                                                    $output['JobTitle'] = $row9['JobTitle'];   
                                                                    $output['CompanyName'] = $row9['CompanyName'];   
                                                                    $output['Salary']   = $row9['Salary'];
                                                                    $output['ProfileImage']   = $row9['ProfileImage'];
                                                                }
                                                                
                                                            }
                                                            // else
                                                            // {
                                                            //     $data = false;
                                                            //     $msg ='No data';
                                                            //     $respone = array('data'=>$data,'msg'=>$msg);
                                                            //     echo json_encode($respone);
                                                            // }
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
                                    
    
                                }
                            }
                            else
                            {
                                $data = false;
                                $msg ='No data';
                                $respone = array('data'=>$data,'msg'=>$msg);
                                echo json_encode($respone);
                            }
                   
                    
                        
                    $respone[]= $output; 
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
}//get specific job seeker info



?>