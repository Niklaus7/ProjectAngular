<?php
//SAVE DATA WHEN USER POST NEW JOB OB JOB PORTAL

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

date_default_timezone_set("Asia/Kolkata");



$QuestionPostedBy = $data->QuestionPostedBy ;

$QuestionTitle = $data->QuestionTitle; 

$QuestionDescription = $data->QuestionDescription;

$Skill= $data->Keywords ;

$QuestionPostDate = $data->QuestionPostDateTime;
$LikeCount=0;
$ViewCount=0;
$AnswerCount=0;
$sql0 = "CALL usp_Insert_PostForumQuestion(?,?,?,?,?,?,?,?)";

$stmt0 = $conn->prepare($sql0);

$stmt0->bind_param("issssiii",$QuestionPostedBy,$QuestionTitle,$QuestionDescription,$Skill,$QuestionPostDate,$LikeCount,$ViewCount,$AnswerCount);

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