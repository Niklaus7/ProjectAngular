<?php


//GET JOB POSTED  AND GET TOATL COUNT OF PROJECT AND TOTAL CANDIDATE APLLY TO THAT JOB W.R.T USER or all job list

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

$sql1="select count(JobPostID) as jobscount, (select count(JobPostID) from jobpost where JobActive= 'Active') as activejobcount, (select count(JobPostID) from jobpost where JobActive= 'Inactive') as inactivejobcount from jobpost where JobActive != 'Deactive'";
    $result1 = $conn->query($sql1);
    
    if ($result1->num_rows > 0) 
    {
        while($row = $result1->fetch_assoc())
        {
            $output = $row;

            $sql6 ="SELECT count(JobSeekerID) as jobseekercount FROM jobseekerprofile";
            $result6 = $conn->query($sql6);
            if ($result6->num_rows > 0)
            {
                while($row6 = $result6->fetch_assoc())
                {  
                    $output['jobseekercount'] = $row6['jobseekercount'];
                }
            }

            $sql9 = "select count(ProjectPostID) as projectsscount, (select count(ProjectPostID) from projectpost where AssignmentActive= 'Active') as activeprojectcount, (select count(ProjectPostID) from projectpost where AssignmentActive= 'Inactive') as inactiveprojectcount from projectpost";
            $result9 = $conn->query($sql9);
            if ($result9->num_rows > 0)
            {
                while($row9 = $result9->fetch_assoc())
                {  
                    $output['projectsscount'] = $row9['projectsscount'];
                    $output['activeprojectcount'] = $row9['projectsscount'];
                    $output['inactiveprojectcount'] = $row9['inactiveprojectcount'];
                }
            }

            $sql99 ="SELECT count(UserID) as projectseekercount FROM registeruserinforamtion";
            $result99 = $conn->query($sql99);
            if ($result99->num_rows > 0)
            {
                while($row99 = $result99->fetch_assoc())
                {  
                    $output['projectseekercount'] = $row99['projectseekercount'];
                }
            }

            $respone[]= $output; 
                                                                                                        
        }
        echo json_encode($respone);

    }
    else
    {
        // $data = false;
        // $msg ='No data';
        // $respone = array('data'=>$data,'msg'=>$msg);
        echo "error";
    }
    

?>