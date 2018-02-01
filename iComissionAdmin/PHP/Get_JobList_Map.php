<?php


//GET JOB POSTED  AND GET TOATL COUNT OF PROJECT AND TOTAL CANDIDATE APLLY TO THAT JOB W.R.T USER or all job list

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));


$JobPostsId = $data->JobPostsId;

    $sql1="SELECT * FROM jobpost where JobPostID in($JobPostsId) and JobActive = 'Active'";
    //echo $sql1;
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
    



?>