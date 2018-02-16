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
            $id = $row['JobPostID'];
            $output = $row;
                $sql2 ="SELECT * from company where JobPostID = $id ";
            
                    $result2 = $conn->query($sql2);

                    if ($result2->num_rows > 0) 
                    {
               
                        while($row2 = $result2->fetch_assoc())
                        {
                           
                            
                            $output['CompanyName'] = $row2['CompanyName'];
                        }
                    }
                    else
                    {
                        $output['CompanyName'] = "No Company Details";
                    }
        }
        $output1[]=$output;
        echo json_encode($output1);
    }
    else
    {
        echo "error";
    }

?>