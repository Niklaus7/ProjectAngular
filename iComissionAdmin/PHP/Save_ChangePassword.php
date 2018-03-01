<?php
include("db_connection.php");
$data = json_decode(file_get_contents("php://input"));
date_default_timezone_set("Asia/Kolkata");

$UserID = $data->UserID;
$OldPassword = $data->OldPassword;
$NewPassword = $data->NewPassword;

$sql1="SELECT * FROM useraccount where UserAccountID = '$UserID'";
$result1 = $conn->query($sql1);

if ($result1->num_rows > 0) 
{

    while($row = $result1->fetch_assoc())
    {
        $passwd = $row['Password'];
        if($passwd==$OldPassword)
        {
            $sql2 = "UPDATE useraccount 
                                                set `Password`= '$NewPassword'
                                                where UserAccountID = $UserID";
                if($conn->query($sql2))
                {
                    $data = true;
                    $msg = 'Password Updated';
                    $respone = array('data'=>$data,'msg'=>$msg);            
                    echo json_encode($respone);
                }
                else
                {
                    echo $sql2.$conn->error;
                }
        }
        else
        {
            echo "error";
        }
                // $output[] = $row;
        
                
    }
    
    

}
else
{
    echo "error";
}


?>