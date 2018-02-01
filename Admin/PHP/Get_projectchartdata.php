<?php


//GET JOB POSTED  AND GET TOATL COUNT OF PROJECT AND TOTAL CANDIDATE APLLY TO THAT JOB W.R.T USER or all job list

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

$sql1="SELECT count(ProjectPostID) as total, MONTHNAME(ProjectDateTime) as month,YEAR(ProjectDateTime) as year FROM projectpost where ProjectDateTime < Now() and ProjectDateTime > DATE_ADD(Now(), INTERVAL- 12 MONTH) group by MONTHNAME(ProjectDateTime) order by ProjectDateTime";
    $result1 = $conn->query($sql1);
    
    if ($result1->num_rows > 0) 
    {
        while($row = $result1->fetch_assoc())
        {
            $output = $row;
            $month = $row["month"];
            $year = $row["year"];

            $sql6 ="SELECT count(ProjectPostID) as activetotal, MONTHNAME(ProjectDateTime) as month,YEAR(ProjectDateTime) as year FROM projectpost where YEAR(ProjectDateTime) = '$year' and MONTHNAME(ProjectDateTime) = '$month' and AssignmentActive = 'Active' and ProjectDateTime < Now() and ProjectDateTime > DATE_ADD(Now(), INTERVAL- 12 MONTH) group by MONTHNAME(ProjectDateTime) order by ProjectDateTime";
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

            $sql9 ="SELECT count(ProjectPostID) as inactivetotal, MONTHNAME(ProjectDateTime) as month,YEAR(ProjectDateTime) as year FROM projectpost where YEAR(ProjectDateTime) = '$year' and MONTHNAME(ProjectDateTime) = '$month' and AssignmentActive = 'Inactive' and ProjectDateTime < Now() and ProjectDateTime > DATE_ADD(Now(), INTERVAL- 12 MONTH) group by MONTHNAME(ProjectDateTime) order by ProjectDateTime";
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