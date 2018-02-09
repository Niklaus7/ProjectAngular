<?php

//search project by flter like keywords,budget,date etc
include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));


$ProjectName = $data->ProjectName;
$ProjectLocation = $data->ProjectLocation;
$ProjectType = $data->ProjectType;
$MaxBudget = $data->MaxBudget;
$MinBudget = $data->MinBudget;

//$ProjectLocations = explode(",",$ProjectLocation);
// $FinalLoc=[];
// for($i=0; $i< sizeof($ProjectLocations);$i++){
//     $FinalLoc[$i] = "ProjectLocation LIKE '%".$ProjectLocations[$i]."%'";
// }
// $FinalLocation = implode(" or ",$FinalLoc);

//$ProjectTypes = explode(",",$ProjectType);
//$ProjType=[];
/*for($j=0; $j< sizeof($ProjectTypes);$j++){
    $ProjType[$j] = "ProjectType LIKE '%".$ProjectTypes[$j]."%'";
}
$FinalProjectType = implode(" or ",$ProjType);
ProjectType*/


if($ProjectName!='' && $ProjectType!='Assignment Type')
{
    $sql1="SELECT * FROM projectpost where ProjectName LIKE '%$ProjectName%' and ProjectLocation LIKE '%$ProjectLocation%' and ProjectType LIKE '%$ProjectTypes%'and AssignmentActive = 'Active' and ProjectBudget BETWEEN '$MinBudget' AND '$MaxBudget' order by ProjectDateTime  DESC ";
    //echo $sql1;
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
        echo "error";
    }
}
else if($ProjectName!='' && $ProjectType=='Assignment Type')
{
    $sql1="SELECT * FROM projectpost where ProjectName LIKE '%$ProjectName%' and ProjectLocation LIKE '%$ProjectLocation%' and  AssignmentActive = 'Active' and ProjectBudget BETWEEN '$MinBudget' AND '$MaxBudget' order by ProjectDateTime  DESC ";
    //echo $sql1;
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
        echo "error";
    }
}
else if($ProjectName=='' && $ProjectType!='Assignment Type')
{
    $sql1="SELECT * FROM projectpost where  ProjectLocation LIKE '%$ProjectLocation%' and ProjectType LIKE '%$ProjectTypes%'and AssignmentActive = 'Active' and ProjectBudget BETWEEN '$MinBudget' AND '$MaxBudget' order by ProjectDateTime  DESC ";
    //echo $sql1;
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
        echo "error";
    }
}
else
{
    $sql1="SELECT * FROM projectpost where  ProjectLocation LIKE '%$ProjectLocation%' and AssignmentActive = 'Active' order by ProjectDateTime  DESC ";
    //echo $sql1;
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
        echo $sql1.$conn->error;
    }
}
    
    

?>