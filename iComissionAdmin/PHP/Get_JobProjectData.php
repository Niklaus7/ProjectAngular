<?php
//search job by different filter like job location exp,salary

//SELECT * FROM `jobpost` WHERE `JobLocation` LIKE '%Pune%'
include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

$Location = $data->Location;

    $sql9 = "SELECT * FROM jobpost where JobActive = 'Active' and JobLocation like '%$Location%'";
    //$sql1 = "SELECT j1.*,j2.* FROM jobpost j1 inner join jobpostskillset j2 WHERE (j2.SkillSetID LIKE '%$keywords%' or j2.SkillSetID ='') and (j1.JobLocation LIKE '%$joblocation%' or j1.JobLocation = '') and (j1.MinExp = '$Experience' or j1.MinExp='') and (j1.MinSal = '$Salary' or j1.MinSal='') and j1.JobPostID = j2.JobPostID order by j1.JobPostDate DESC";
    //echo $sql1;
    $result9 = $conn->query($sql9);
    
    if ($result9->num_rows > 0) 
    {
        while($row = $result9->fetch_assoc())
        {
            $output = $row;

            $id = $row['JobPostID'];
            $JobPostedBy = $row['JobPostedBy'];

            $sql3 ="SELECT CompanyName,CompanyURL,CompanyLogo FROM registeruserinforamtion where UserID = $JobPostedBy";
            $result3 = $conn->query($sql3);
            if ($result3->num_rows > 0)
            {
                while($row3 = $result3->fetch_assoc())
                {  
                    // $Lat = $row3['Lat'];
                    // $Lng = $row3['Lng']; 
                    $CompanyName = $row3['CompanyName'];
                    $CompanyURL = $row3['CompanyURL'];
                    $CompanyLogo = $row3['CompanyLogo'];
                }
            }

            // $sql5 ="SELECT COUNT(JobPostID) As NumberOFjobs FROM jobpost where JobActive = 'Active' and JobLocation like '%$Location%' and JobPostedBy = $JobPostedBy";
            // $result5= $conn->query($sql5);
            // if ($result5->num_rows > 0) 
            // {
            //     while($row5 = $result5->fetch_assoc())
            //     {
            //         $NumberOFjobs = $row5['NumberOFjobs'];
            //     }
            // }
            
            // $sql2 ="SELECT COUNT(JobApplyActivityID) As NumberOFCandidate FROM jobapplyactivity where JobPostID = $id ";
            
            // $result2 = $conn->query($sql2);

            // if ($result2->num_rows > 0) 
            // {
            //     while($row2 = $result2->fetch_assoc())
            //     {
            //         $noofcandidate = $row2['NumberOFCandidate'];
            //     }
            // }
            // else
            // {
            //     $data = false;
            //     $msg ='No data';
            //     $respone = array('data'=>$data,'msg'=>$msg);
            //     echo json_encode($respone);
            // }
            // $output['NumberOFCandidate_Applied'] =  $noofcandidate; 
            // $output['Lat'] =  $Lat; 
            // $output['Lng'] =  $Lng;
            $output['CompanyName'] =  $CompanyName; 
            $output['CompanyURL'] =  $CompanyURL;
            $output['CompanyLogo'] =  $CompanyLogo; 
            // $output['NumberOFjobs'] =  $NumberOFjobs;

            $respone[]= $output; 
                                                                                                        
        }
        $output1['Jobdata']=$respone;
        
    }

    $sql1 = "SELECT * FROM projectpost where AssignmentActive = 'Active' and ProjectLocation like '%$Location%'";
    //$sql1 = "SELECT j1.*,j2.* FROM jobpost j1 inner join jobpostskillset j2 WHERE (j2.SkillSetID LIKE '%$keywords%' or j2.SkillSetID ='') and (j1.JobLocation LIKE '%$joblocation%' or j1.JobLocation = '') and (j1.MinExp = '$Experience' or j1.MinExp='') and (j1.MinSal = '$Salary' or j1.MinSal='') and j1.JobPostID = j2.JobPostID order by j1.JobPostDate DESC";
    //echo $sql1;
    $result1 = $conn->query($sql1);
    
    if ($result1->num_rows > 0) 
    {
        while($row = $result1->fetch_assoc())
        {
            $output2 = $row;
            $id = $row['ProjectPostID'];
            $ProjectPostedBy = $row['ProjectPostBy'];

            $sql3 ="SELECT CompanyName,CompanyURL,CompanyLogo FROM registeruserinforamtion where UserID = $ProjectPostedBy";
            $result3 = $conn->query($sql3);
            if ($result3->num_rows > 0)
            {
                while($row3 = $result3->fetch_assoc())
                {  
                    // $Lat = $row3['Lat'];
                    // $Lng = $row3['Lng']; 
                    $CompanyName = $row3['CompanyName'];
                    $CompanyURL = $row3['CompanyURL'];
                    $CompanyLogo = $row3['CompanyLogo'];
                }
            }

            // $sql5 ="SELECT COUNT(ProjectPostID) As NumberOFProjects FROM projectpost where AssignmentActive = 'Active' and ProjectLocation like '%$Location%' and ProjectPostBy = $ProjectPostedBy";
            // $result5= $conn->query($sql5);
            // if ($result5->num_rows > 0) 
            // {
            //     while($row5 = $result5->fetch_assoc())
            //     {
            //         $NumberOFProjects = $row5['NumberOFProjects'];
            //     }
            // }

            // $sql2 ="SELECT COUNT(ProjectApplyActivityID) As NumberOFCandidate FROM projectapplyactivity where ProjectPostID = $id ";
            
            // $result2 = $conn->query($sql2);

            // if ($result2->num_rows > 0) 
            // {
            //     while($row2 = $result2->fetch_assoc())
            //     {
            //         $noofcandidate = $row2['NumberOFCandidate'];
            //     }
            // }
            // else
            // {
            //     $data = false;
            //     $msg ='No data';
            //     $respone = array('data'=>$data,'msg'=>$msg);
            //     echo json_encode($respone);
            // }

            // $output['NumberOFCandidate_Applied'] =  $noofcandidate; 
            // $output2['Lat'] =  $Lat; 
            // $output2['Lng'] =  $Lng;
            $output2['CompanyName'] =  $CompanyName; 
            $output2['CompanyURL'] =  $CompanyURL;
            $output2['CompanyLogo'] =  $CompanyLogo; 
            // $output2['NumberOFProjects'] =  $NumberOFProjects;

            $respone1[]= $output2; 
        }
        $output1['Projectdata']=$respone1;
    } 

    if ($result9->num_rows == 0 || $result1->num_rows == 0){
        echo "error";
    }
    else{
        echo json_encode($output1);
    }
?>