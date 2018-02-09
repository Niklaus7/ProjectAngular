<?php


//GET unread  Messages count w.r.t particular user
  


                                /*
                                    message status =0=unread
                                    message status =1=read
                                    */
include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));


$UserID = $data->UserID;

$sql1="SELECT * FROM messageboard where ReceiverID = '$UserID' and Status ='0' ";


        $result1 = $conn->query($sql1);
        
        if($result1->num_rows >= 0) 
        {
   
            $data = true;
            $Message_count = $result1->num_rows;
            $respone = array('data'=>$data,'Message_count'=>$Message_count);
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