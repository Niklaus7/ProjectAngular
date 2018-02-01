<?php


//GET JOB POSTED  AND GET TOATL COUNT OF PROJECT AND TOTAL CANDIDATE APLLY TO THAT JOB W.R.T USER or all job list

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

$sql1="SELECT count(JobPostID) as total, MONTHNAME(JobPostDate) as month,YEAR(JobPostDate) as year FROM jobpost where JobPostDate < Now() and JobPostDate > DATE_ADD(Now(), INTERVAL- 12 MONTH) group by MONTHNAME(JobPostDate) order by JobPostDate";
    $result1 = $conn->query($sql1);
    
    if ($result1->num_rows > 0) 
    {
        while($row = $result1->fetch_assoc())
        {
            $output = $row;
            $month = $row["month"];
            $year = $row["year"];

            $sql6 ="SELECT count(JobPostID) as activetotal, MONTHNAME(JobPostDate) as month,YEAR(JobPostDate) as year FROM jobpost where YEAR(JobPostDate) = '$year' and MONTHNAME(JobPostDate) = '$month' and JobActive = 'Active' and JobPostDate < Now() and JobPostDate > DATE_ADD(Now(), INTERVAL- 12 MONTH) group by MONTHNAME(JobPostDate) order by JobPostDate";
            $result6 = $conn->query($sql6);
            if ($result6->num_rows > 0)
            {
                while($row6 = $result6->fetch_assoc())
                {  
                    $output['activetotal'] = $row6['activetotal'];
                }
            }
            else{
                $output['activetotal'] = "0";
            }

            $sql9 ="SELECT count(JobPostID) as inactivetotal, MONTHNAME(JobPostDate) as month,YEAR(JobPostDate) as year FROM jobpost where YEAR(JobPostDate) = '$year' and MONTHNAME(JobPostDate) = '$month' and JobActive = 'Inactive' and JobPostDate < Now() and JobPostDate > DATE_ADD(Now(), INTERVAL- 12 MONTH) group by MONTHNAME(JobPostDate) order by JobPostDate";
            $result9 = $conn->query($sql9);
            if ($result9->num_rows > 0)
            {
                while($row9 = $result9->fetch_assoc())
                {  
                    $output['inactivetotal'] = $row9['inactivetotal'];
                }
            }
            else{
                $output['inactivetotal']  = "0";
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