<?php

//GET SKILL SET


include("db_connection.php");

        $sql1="SELECT * FROM skillset ";

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