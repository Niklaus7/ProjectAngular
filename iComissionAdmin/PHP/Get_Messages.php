<?php


//GET All Messages w.r.t particular user

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));


$ReceiverID = $data->ReceiverID;
/*
$sql1="SELECT * FROM messageboard where ReceiverID = '$ReceiverID' ";


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
*/





$sql1="SELECT distinct SenderID FROM messageboard where ReceiverID = '$ReceiverID' ";

        $result1 = $conn->query($sql1);
        
        if($result1->num_rows > 0) 
        {
   
            while($row = $result1->fetch_assoc())
            {
                 $output= $row;
                 $Sid = $row['SenderID'];
                    
                    $sql2="SELECT `Message`, `MessageTime`, `Status` FROM messageboard where ReceiverID = '$ReceiverID' and SenderID = '  $Sid ' ORDER BY MessageTime ASC ";
                    $result2 = $conn->query($sql2);
                    if($result2->num_rows > 0) 
                    {
                        while($row2 = $result2->fetch_assoc())
                        {
                            $output[]=$row2;

                            $sql3= "SELECT * FROM useraccount where UserAccountID = '$Sid'";
                            $result3 = $conn->query($sql3);
                            
                            if($result3->num_rows > 0) 
                            {
                       
                                while($row3 = $result3->fetch_assoc())
                                {
                                    $output['SenderName']=$row3['FirstName'];
                                }
                            }
                        }
                    }
                    $respone[]= $output; 
            }
            echo json_encode($respone);
        }
?>