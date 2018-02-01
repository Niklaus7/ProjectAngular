<?php
//SAVE DATA WHEN USER POST NEW JOB OB JOB PORTAL

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

date_default_timezone_set("Asia/Kolkata");



$AnswerPostedBy = $data->AnswerPostedBy ;

$QuestionID = $data->QuestionID;

$AnswerDescription = $data->AnswerDescription;

$PostDate = $data->PostDateTime;

$sql0 = "CALL usp_Insert_PostForumAnswer(?,?,?,?)";

$stmt0 = $conn->prepare($sql0);

$stmt0->bind_param("iiss",$QuestionID,$AnswerPostedBy,$AnswerDescription,$PostDate);

if($stmt0->execute())
{
    $data = true;
    $msg ='saved data';
    $respone = array('data'=>$data,'msg'=>$msg);
    echo json_encode($respone);   
}
else
{
    $data = false;
    $msg ='error in saving data  of JobPostSkillSet';
    $respone = array('data'=>$data,'msg'=>$msg);
    echo json_encode($respone);
}
?>