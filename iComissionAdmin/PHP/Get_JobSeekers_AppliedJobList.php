<?php


//GET JOBseeker applied job 

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));


$JobSeekerID = $data->JobSeekerID ;

$sql1="SELECT * FROM jobapplyactivity where UserID = $JobSeekerID ";

$result1 = $conn->query($sql1);
          
	if ($result1->num_rows > 0) 
    {
   
	        while($row = $result1->fetch_assoc())
            {
                $output = $row;
                
                $JobID = $row['JobPostID'];

                    
                        $sql2 = "SELECT * FROM jobpost where JobPostID =  $JobID";

                        $result2 = $conn->query($sql2);
                                
                            if ($result2->num_rows > 0) 
                            {
                                while($row2 = $result2->fetch_assoc())
                                {
                                    $output['JobTitle'] = $row2['JobTitle'];
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





?>