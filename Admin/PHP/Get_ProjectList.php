<?php


//GET Project Posted  AND GET TOATL COUNT OF PROJECT AND TOTAL CANDIDATE APpLY TO THAT Project W.R.T USER or all Project list
  
include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));


$ProjectPostedBy = $data->ProjectPostedBy;
$ShowData = $data->ShowData;
$sql1 = "";
if($ShowData == "All")
{
    $sql1="SELECT * FROM projectpost order by ProjectDateTime  DESC";
}
else if($ShowData == "AllInactive"){
    $sql1="SELECT * FROM projectpost where AssignmentActive = 'Inactive' order by ProjectDateTime DESC";
}
else{
    $sql1="SELECT * FROM projectpost where AssignmentActive = 'Inactive' order by ProjectDateTime DESC limit 10";
}

            $result1 = $conn->query($sql1);
            
            if ($result1->num_rows > 0) 
            {
       
                while($row = $result1->fetch_assoc())
                {
                    $output = $row;

                    $id = $row['ProjectPostBy'];
    
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