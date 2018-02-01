<?php


//GET Project Posted  AND GET TOATL COUNT OF PROJECT AND TOTAL CANDIDATE APpLY TO THAT Project W.R.T USER or all Project list
  
include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

    $Keyword = $data->Keyword;
    $Skillset = $data->Skillset;

    $Keywords = explode(" ",$Keyword);
    $Key=[];
    for($j=1; $j< sizeof($Keywords);$j++){
        if(strlen($Keywords[$j]) > 1){
            $Key[$j] = "j1.JobTitle LIKE '%".$Keywords[$j]."%'";
        }
    }   
    $FinalKeywords = implode(" or ",$Key);

    $Skillsets = explode(" ",$Skillset);
    $Skill=[];
    for($j=1; $j< sizeof($Skillsets);$j++){
        if(strlen($Skillsets[$j]) > 1){
            $Skill[$j] = "j2.SkillSetID LIKE '%".$Skillsets[$j]."%'";
        }
    }   
    $FinalSkillsets = implode(" or ",$Skill);

    $sql1="SELECT j1.*,j2.* FROM jobpost j1 inner join jobpostskillset j2 where ($FinalSkillsets) and ($FinalKeywords) and j1.JobPostID = j2.JobPostID and j1.JobActive = 'Active' order by JobPostDate DESC";
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

?>