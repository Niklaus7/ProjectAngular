<?php


//GET All Messages w.r.t particular user

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

$ReceiverID = $data->ReceiverID;
$SenderID = $data->SenderID;
$MessageText = $data->MessageText;
$MessageTime = $data->MessageTime;
$Status = 0;

$sql1 = "CALL usp_Insert_Messages(?,?,?,?,?)";

        $stmt1 = $conn->prepare($sql1);
        $stmt1->bind_param("iissi",$SenderID,$ReceiverID,$MessageText,$MessageTime,$Status);
        if($stmt1->execute())
        {
                
            $data = true;
            $msg ='saved data';
            $respone = array('data'=>$data,'msg'=>$msg);
            echo json_encode($respone);
        }
        else
        {
            $data = false;
            $msg ='error in saving data  of message';
            $respone = array('data'=>$data,'msg'=>$msg);
            echo json_encode($respone);
        }



      




?>