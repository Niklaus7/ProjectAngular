<?php


//GET Messages content of that message

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));


$SenderID = $data->SenderID;
$ReciverID = $data->ReciverID;

$sql1="SELECT * FROM messageboard where SenderID = '$SenderID' and ReceiverID = '$ReciverID ' ";


        $result1 = $conn->query($sql1);
        
        if($result1->num_rows > 0) 
        {
   
            while($row = $result1->fetch_assoc())
            {

                $output = $row;
                $id= $row['SenderID'];

                $sql2= "SELECT * FROM useraccount where UserAccountID = '$id'";
                $result2 = $conn->query($sql2);
                
                if($result2->num_rows > 0) 
                {
           
                    while($row2 = $result2->fetch_assoc())
                    {
                        $output['SenderName']=$row2['FirstName'];
                        //$output['data'] = true;
                    }
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