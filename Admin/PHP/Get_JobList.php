<?php


//GET JOB POSTED  AND GET TOATL COUNT OF PROJECT AND TOTAL CANDIDATE APLLY TO THAT JOB W.R.T USER or all job list

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));


$JobPostedBy = $data->jobPostedBy;
$ShowData = $data->ShowData;
$sql1 = "";
if($ShowData == "All")
{
    $sql1="SELECT * FROM jobpost order by JobPostDate DESC";
}
else if($ShowData == "AllInactive"){
    $sql1="SELECT * FROM jobpost where JobActive = 'Inactive' order by JobPostDate DESC";
}
else{
    $sql1="SELECT * FROM jobpost where JobActive = 'Inactive' order by JobPostDate DESC limit 10";
}
    
            $result1 = $conn->query($sql1);
            
            if ($result1->num_rows > 0) 
            {
       
                while($row = $result1->fetch_assoc())
                {
                    $output = $row;
    
                    $id = $row['JobPostedBy'];
                    if($ShowData == "Limited")
                    {
                        $sql6 ="SELECT CompanyName FROM registeruserinforamtion where UserID = $id";
                        $result6 = $conn->query($sql6);
                        if ($result6->num_rows > 0)
                        {
                            while($row6 = $result6->fetch_assoc())
                            {  
                                $output['CompanyName'] = $row6['CompanyName'];
                            }
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