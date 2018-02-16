<?php


//GET Project Posted  AND GET TOATL COUNT OF PROJECT AND TOTAL CANDIDATE APpLY TO THAT Project W.R.T USER or all Project list
  
include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

    $Keyword = $data->Keyword;
    // $UserId = $data->UserId;

    $Keywords = explode(" ",$Keyword);
    $Key=[];
    for($j=1; $j< sizeof($Keywords);$j++){
        if(strlen($Keywords[$j]) > 1){
            $Key[$j] = "ProjectName LIKE '%".$Keywords[$j]."%'";
        }
    }   
    $FinalKeywords = implode(" or ",$Key);

    $sql1="SELECT * FROM projectpost where ($FinalKeywords) and AssignmentActive = 'Active' order by ProjectDateTime  DESC";
    
    $result1 = $conn->query($sql1);
    
    if ($result1->num_rows > 0) 
    {

        while($row = $result1->fetch_assoc())
        {
            $output = $row;
            $PostedById = $row["ProjectPostBy"];
            $sql3="SELECT CompanyName FROM registeruserinforamtion where UserID = '$PostedById'";
            $result3 = $conn->query($sql3);
            while($row3=mysqli_fetch_array($result3)) 
            {
                $output["CompanyName"]= $row3["CompanyName"];
               
            }
            $output1[]=$output;
        }
        echo json_encode($output1);
    }
    else
    {
        echo "error";
    }


?>