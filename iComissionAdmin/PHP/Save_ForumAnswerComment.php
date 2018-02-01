<?php
//SAVE DATA WHEN USER POST NEW JOB OB JOB PORTAL

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

date_default_timezone_set("Asia/Kolkata");



$AnswerID = $data->AnswerID ;

$QuestionID = $data->QuestionID;



$PostDate = $data->PostDateTime;

$CommentPostedBy = $data->CommentPostedBy;
$Comment1 = $data->comment;

$sql0 = "CALL usp_Insert_PostForumAnswerComment(?,?,?,?,?)";

$stmt0 = $conn->prepare($sql0);

$stmt0->bind_param("iiiss",$QuestionID,$AnswerID,$CommentPostedBy,$Comment1,$PostDate);

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
    $msg ='error in saving data';
    $respone = array('data'=>$data,'msg'=>$msg);
    echo json_encode($respone);
}
?>