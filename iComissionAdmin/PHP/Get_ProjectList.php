<?php


//GET Project Posted  AND GET TOATL COUNT OF PROJECT AND TOTAL CANDIDATE APpLY TO THAT Project W.R.T USER or all Project list
  
include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));


$ProjectPostedBy = $data->ProjectPostedBy;
$ShowData = $data->ShowData;

if($ProjectPostedBy =='null')
{
    $UserId = $data->UserId;
    if($ShowData){
        $sql1="SELECT * FROM projectpost where ProjectPostBy !='$UserId' and AssignmentActive = 'Active' order by ProjectDateTime  DESC ";
    }
    else{
        $sql1="SELECT * FROM projectpost where ProjectPostBy !='$UserId' and AssignmentActive = 'Active' order by ProjectDateTime  DESC limit 10";
    }
    
            $result1 = $conn->query($sql1);
            
            if ($result1->num_rows > 0) 
            {
       
                while($row = $result1->fetch_assoc())
                {
                    $output[] = $row;
                }
                echo json_encode($output);
            }
            else
            {
                $data = false;
                $msg ='No data';
                $respone = array('data'=>$data,'msg'=>$msg);
                echo json_encode($respone);
            }
    
}//get all Project
else
{
    if($ShowData == "All"){
        $sql1="SELECT * FROM projectpost where ProjectPostBy = $ProjectPostedBy and AssignmentActive = 'Active' order by ProjectDateTime  DESC";
    }
    else{
        $sql1="SELECT * FROM projectpost where ProjectPostBy = $ProjectPostedBy order by ProjectDateTime  DESC limit 10";
    }
            $result1 = $conn->query($sql1);
            
            if ($result1->num_rows > 0) 
            {
       
                while($row = $result1->fetch_assoc())
                {
                    $output = $row;

                    $id = $row['ProjectPostID'];
    
                    
                    $sql2 ="SELECT COUNT(ProjectApplyActivityID) As NumberOFCandidate FROM projectapplyactivity where ProjectPostID = $id ";
                    
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
                        $noofcandidate = 0;
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
    
    

}//get Project post by specific user*/


?>