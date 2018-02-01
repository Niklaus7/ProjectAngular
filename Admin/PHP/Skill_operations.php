<?php


//GET All Messages w.r.t particular user

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

$type = $data->type;
if($type == "Save")
{
    $Skillname = $data->Skillname;
    $sql1 = "CALL usp_Insert_SkillSet(?)";

    $stmt1 = $conn->prepare($sql1);
    $stmt1->bind_param("s",$Skillname);
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
}
else if($type == "Edit"){
    $id = $data->id;
    $sql1="SELECT * FROM skillset where SkillSetID = $id";
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
}
else if($type == "Delete")
{
    $id = $data->id;
    $sql1="delete from skillset where SkillSetID = $id";
    
    $result1 = $conn->query($sql1);
    echo "deleted succssfully";
}
else{
    $Skillid = $data->Skillid;
    $Skillname = $data->Skillname;
    $sql1="update skillset set SkillSetName = '$Skillname' where SkillSetID = $Skillid";
    echo $sql1;

    $result1 = $conn->query($sql1);
    echo "updated succssfully";
}
?>