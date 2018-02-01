<?php

//GET SKILL SET


include("db_connection.php");

        $sql1="SELECT distinct(SkillSetID) FROM jobpostskillset ";

		$result1 = $conn->query($sql1);
		
	    if ($result1->num_rows > 0) 
        {
            $Finalkeywords=[];
            $count = 0;
        while($row = $result1->fetch_assoc())
        {
            $keywordss = explode(",",$row["SkillSetID"]);
            
            for($j=0; $j< sizeof($keywordss);$j++){
                if (in_array($keywordss[$j], $Finalkeywords))
                {
                //do nothing
                }
                else
                {
                    $Finalkeywords[$count] = $keywordss[$j];
                    $count++;
                }
            }      
        }
        
        echo json_encode($Finalkeywords);

		}
		else
		{
			echo "error";
		}
    
?>