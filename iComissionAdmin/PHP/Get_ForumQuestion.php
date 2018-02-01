<?php
//SAVE DATA WHEN USER POST NEW JOB OB JOB PORTAL

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

date_default_timezone_set("Asia/Kolkata");



//$QuestionPostedBy = $data->QuestionPostedBy ;


$QuestionID = $data->QuestionID;
if($QuestionID == 'null')
{
  $sql0 = "SELECT * FROM  forumquestion   order by QuestionDate";
  $result0 = $conn->query($sql0);
  
  if ($result0->num_rows > 0) 
  {
  
    while($row0 = $result0->fetch_assoc())
    {
  
                 $output = $row0;
                 $QuestionID = $row0['ForumQuestionID'];
                 $UserId = $row0['QuestionBy'];//usercountID
  
                 $sql4 = "SELECT count(ForumQuestionID) As NumberOFAnswer from forumanswer where ForumQuestionID =  $QuestionID";
                 $result4 = $conn->query($sql4);
                 if($result4->num_rows > 0)
                 {
                      while($row4 = $result4->fetch_assoc())
                      {
                          
                          $output['NumberOFAnswer'] = $row4['NumberOFAnswer'];
                          $sql1="SELECT UserTypeID,FirstName,UserAccountID FROM useraccount where UserAccountID = $UserId";
                          $result1 = $conn->query($sql1);
                          if ($result1->num_rows > 0) 
                          {
                         
                             while($row1 = $result1->fetch_assoc())
                             {
                                 $output["UserName"] = $row1['FirstName'];
                                 $UserTypeId =  $row1["UserTypeID"];
           
                                 $sql2 = "SELECT UserRoleName FROM usertype where UserTypeID='$UserTypeId'";
                                 $result2 = $conn->query($sql2);
                                 while($row2=mysqli_fetch_array($result2))
                                 {
                                   $UserRoleName = $row2["UserRoleName"];
                                 }
                                 $output["UserRoleName"] = $UserRoleName;
                                 if($UserRoleName=="AssignmentSeeker")
                                 {
                                     $sql3 = "SELECT ProfileImage FROM assignmentseekerprofileimage where AssignmentSeekerID='$UserId'";
                                     $result3 = $conn->query($sql3);
                                     while($row3=mysqli_fetch_array($result3))
                                     {
                                       $profileimage = $row3["ProfileImage"];
                                     }
                                     $output["profileimage"] = $profileimage;
                                 }
                                 else if($UserRoleName=='User')
                                 {
                                     $sql6 = "SELECT ProfileImage FROM jobseekerprofileimage where JobSeekerID='$UserId'";
                                     $result6 = $conn->query($sql6);
                                     while($row6=mysqli_fetch_array($result6))
                                     {
                                       $profileimage = $row6["ProfileImage"];
                                     }
                                     $output["profileimage"] = $profileimage;
                                 }
           
                             }
                          }
                           else
                           {
                             echo "error";
                           }
                          
                      }
                 }
                
                $response[]=$output;
    }
    echo json_encode($response);
  }
  else
  {
      echo "error";
  }
}
else
{
  $sql0 = "SELECT * FROM  forumquestion where ForumQuestionID = $QuestionID  order by QuestionDate";
  $result0 = $conn->query($sql0);
  
  if ($result0->num_rows > 0) 
  {
  
    while($row0 = $result0->fetch_assoc())
    {
  
                 $output = $row0;
                 $QuestionID = $row0['ForumQuestionID'];
                 $UserId = $row0['QuestionBy'];//usercountID
  
                 $sql4 = "SELECT count(ForumQuestionID) As NumberOFAnswer from forumanswer where ForumQuestionID =  $QuestionID";
                 $result4 = $conn->query($sql4);
                 if($result4->num_rows > 0)
                 {
                      while($row4 = $result4->fetch_assoc())
                      {
                          
                          $output['NumberOFAnswer'] = $row4['NumberOFAnswer'];
                          $sql1="SELECT UserTypeID,FirstName,UserAccountID FROM useraccount where UserAccountID = $UserId";
                          $result1 = $conn->query($sql1);
                          if ($result1->num_rows > 0) 
                          {
                         
                             while($row1 = $result1->fetch_assoc())
                             {
                                 $output["UserName"] = $row1['FirstName'];
                                 $UserTypeId =  $row1["UserTypeID"];
           
                                 $sql2 = "SELECT UserRoleName FROM usertype where UserTypeID='$UserTypeId'";
                                 $result2 = $conn->query($sql2);
                                 while($row2=mysqli_fetch_array($result2))
                                 {
                                   $UserRoleName = $row2["UserRoleName"];
                                 }
                                 $output["UserRoleName"] = $UserRoleName;
                                 if($UserRoleName=="AssignmentSeeker")
                                 {
                                     $sql3 = "SELECT ProfileImage FROM assignmentseekerprofileimage where AssignmentSeekerID='$UserId'";
                                     $result3 = $conn->query($sql3);
                                     while($row3=mysqli_fetch_array($result3))
                                     {
                                       $profileimage = $row3["ProfileImage"];
                                       
                                     }
                                     $output["profileimage"] = $profileimage;
                                 }
                                 else if($UserRoleName=='User')
                                 {
                                     $sql6 = "SELECT ProfileImage FROM jobseekerprofileimage where JobSeekerID='$UserId'";
                                     $result6 = $conn->query($sql6);
                                     while($row6=mysqli_fetch_array($result6))
                                     {
                                       $profileimage = $row6["ProfileImage"];
                                     }
                                     $output["profileimage"] = $profileimage;
                                 }
           
                             }
                          }
                           else
                           {
                             echo "error";
                           }
                          
                      }
                 }
                
                $response[]=$output;
    }
    echo json_encode($response);
  }
  else
  {
      echo "error";
  }
}



?>