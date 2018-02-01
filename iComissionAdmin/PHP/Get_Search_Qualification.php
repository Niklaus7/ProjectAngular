<?php

//SEARCH QUALIFICATION BY NAME 


include("db_connection.php");

$q=$_GET["q"];

        $sql1="SELECT * FROM jobqulaification  where (JobQualification LIKE '%".$q."%' ) ";

	    $result1 = $conn->query($sql1);
	    if ($result1->num_rows > 0) 
        {
   
	        while($row=mysqli_fetch_array($result1))
            {
                
                         $output[] = $row;
                        
                        
            }
            echo json_encode($output);

		}
		else
		{
			echo $q;
		}
	

?>