<?php


//GET JOBseeker info and list

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));


    $sql1="SELECT * FROM registeruserinforamtion";
    
    $result1 = $conn->query($sql1);
    
    if ($result1->num_rows > 0) 
    {
        while($row = $result1->fetch_assoc())
        {
            $output = $row;
            $UserID = $row['UserID'];
            $sql2="SELECT UserRoleName FROM usertype where UserTypeID = (select UserTypeID from useraccount where UserAccountID = '$UserID')";
            $result2 = $conn->query($sql2);
            
            if ($result2->num_rows > 0) 
            {
                while($row2 = $result2->fetch_assoc())
                {
                    $output['UserRoleName'] = $row2["UserRoleName"];               
                }
            }
            else
            {
                $data = false;
                $msg ='No data';
                $respone = array('data'=>$data,'msg'=>$msg);
                echo json_encode($respone);
            }
                
            $respone[]= $output; 
        }
        echo json_encode($respone);
    }
    else
    {
        $data = false;
        $msg ='No data';
        $respone = array('data'=>$data,'msg'=>$msg);
        echo json_encode($respone);
    }

?>