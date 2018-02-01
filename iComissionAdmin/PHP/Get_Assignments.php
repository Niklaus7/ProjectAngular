<?php

//GET SKILL SET


include("db_connection.php");

        $sql1="SELECT distinct(ProjectName) FROM projectpost ";

		$result1 = $conn->query($sql1);
		
	    if ($result1->num_rows > 0) 
        {
            $Finalkeywords=[];
            $count = 0;
        while($row = $result1->fetch_assoc())
        {
                    $Finalkeywords[$count] = $row["ProjectName"];
                    $count++;
        }
        
        echo json_encode($Finalkeywords);

		}
		else
		{
			echo "error";
		}
    
?>