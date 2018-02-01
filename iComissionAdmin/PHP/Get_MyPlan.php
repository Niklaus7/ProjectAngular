<?php


//GET All Messages w.r.t particular user

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));


$CreatorID = $data->CreatorID;



$sql  = "SELECT * from usermembershipplan where CreatedBy = $CreatorID";
$result = $conn->query($sql);

if($result->num_rows > 0) 
{
    while($row = $result->fetch_assoc())
    {
        $output= $row;
        $UserPlanID = $row['UserPlanID'];
        $PlanTypeID = $row['PlanTypeID'];

            $sql1 = "SELECT * From membershipplantypes where PlanTypeID = $PlanTypeID";
            $result1 = $conn->query($sql1);
            if($result1->num_rows>0)
            {
                while($row1=$result1->fetch_assoc())
                {
                    $output['PlanDesc']=$row1;

                    
                }
            }
            $sql2 = "SELECT * From membershipplanfeatures where UserPlanID =$UserPlanID";
            $result2 = $conn->query($sql2);
            if($result2->num_rows>0)
            {
                while($row2=$result2->fetch_assoc())
                {
                    $output['PlanFeatures']=$row2;
                    
                }
            }
            $sql3 = "SELECT * from planconfiguration where UserPlanID =$UserPlanID";
            $result3 = $conn->query($sql3);
            if($result3->num_rows>0)
            {
                while($row3=$result3->fetch_assoc())
                {
                    $output['PlanconfigurationDestails']=$row3;
                    
                }
            }
           
            $response[]=$output;
        
    }
    echo json_encode($response);
}
else
{
    echo "error";
}



  




?>