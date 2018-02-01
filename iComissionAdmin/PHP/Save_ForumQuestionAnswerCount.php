<?php
//SAVE DATA WHEN USER POST NEW JOB OB JOB PORTAL

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

date_default_timezone_set("Asia/Kolkata");



$QuestionID = $data->QuestionID ;

$AnswerCount = $data->AnswerCount; 


$sql = "update forumquestion set AnswerCount = AnswerCount + $AnswerCount where ForumQuestionID = $QuestionID ";


if ($conn->query($sql)) 
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