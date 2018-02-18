<?php


//GET JOB DEACTIVATED

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));


$JobPostedBy = $data->jobPostedBy;
$ShowData = $data->ShowData;

if($JobPostedBy =='null')
{
    if($ShowData == "All")
    {
        $sql1="SELECT * FROM jobpost where JobActive = 'Deactive' order by JobPostDate DESC limit 10";
    }
    else
    {
        $sql1="SELECT * FROM jobpost where JobActive = 'Deactive' order by JobPostDate DESC  limit 10";
    }
            $result1 = $conn->query($sql1);
            
            if ($result1->num_rows > 0) 
            {
       
                while($row = $result1->fetch_assoc())
                {
                    $output = $row;
    
                    $id = $row['JobPostID'];
                   
                    
                    $sql2 ="SELECT COUNT(JobApplyActivityID) As NumberOFCandidate FROM jobapplyactivity where JobPostID = $id ";
                    
                            $result2 = $conn->query($sql2);
    
                            if ($result2->num_rows > 0) 
                            {
                       
                                while($row2 = $result2->fetch_assoc())
                                {

                                    
                                    $noofcandidate = $row2['NumberOFCandidate'];
                                    $sql3 ="SELECT * from company where JobPostID = $id ";
                                    
                                            $result3 = $conn->query($sql3);
                        
                                            if ($result3->num_rows > 0) 
                                            {
                                       
                                                while($row3 = $result3->fetch_assoc())
                                                {
                                                   
                                                    
                                                    $output['CompanyName'] = $row3['CompanyName'];
                                                }
                                            }
                                            else
                                            {
                                                $output['CompanyName'] = "No Company Details";
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
                            $output['NumberOFCandidate_Applied'] =  $noofcandidate; 
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
    
}//get all job
else
{
    if($ShowData == "All"){
        $sql1="SELECT * FROM jobpost where JobPostedBy = $JobPostedBy and JobActive = 'Deactive' order by JobPostDate DESC";
    }
    else{
        $sql1="SELECT * FROM jobpost where JobPostedBy = $JobPostedBy order by JobPostDate DESC limit 10";
    }
            $result1 = $conn->query($sql1);
            
            if ($result1->num_rows > 0) 
            {
       
                while($row = $result1->fetch_assoc())
                {
                    $output = $row;
    
                    $id = $row['JobPostID'];
    
                    
                    $sql2 ="SELECT COUNT(JobApplyActivityID) As NumberOFCandidate FROM jobapplyactivity where JobPostID = $id ";
                    
                            $result2 = $conn->query($sql2);
    
                            if ($result2->num_rows > 0) 
                            {
                       
                                while($row2 = $result2->fetch_assoc())
                                {
                                    
                                    $noofcandidate = $row2['NumberOFCandidate'];
                                    $sql3 ="SELECT * from company where JobPostID = $id ";
                                    
                                            $result3 = $conn->query($sql3);
                        
                                            if ($result3->num_rows > 0) 
                                            {
                                       
                                                while($row3 = $result3->fetch_assoc())
                                                {
                                                   
                                                    
                                                    $output['CompanyName'] = $row3['CompanyName'];
                                                }
                                            }
                                            else
                                            {
                                                $output['CompanyName'] = "No Company Details";
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
                            $output['NumberOFCandidate_Applied'] =  $noofcandidate; 
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
    

}//get job by specific user


?>