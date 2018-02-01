<?php
//SAVE DATA WHEN USER POST NEW JOB OB JOB PORTAL

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

date_default_timezone_set("Asia/Kolkata");



//$QuestionPostedBy = $data->QuestionPostedBy ;


$QuestionID = $data->QuestionID;

$sql = "SELECT * from forumanswer where ForumQuestionID =  $QuestionID";
$result = $conn->query($sql);
if($result->num_rows > 0)
{
     while($row = $result->fetch_assoc())
     {
         $output = $row;
         $AnsID = $row['ForumAnswerID'];
         $UserId = $row['AnswerBy'];//answer given by

         $sql4 = "SELECT * from forumanswercomment where ForumAnswerID = '$AnsID'";
         $result4=$conn->query($sql4);
         if ($result4->num_rows > 0) 
         {
        
            while($row4 = $result4->fetch_assoc())
            {
              $output1 = $row4;
              $CommentUserID = $row4['CommentedBy'];
              $sql1="SELECT UserTypeID,FirstName,UserAccountID FROM useraccount where UserAccountID = $CommentUserID";
              $result1 = $conn->query($sql1);
              if ($result1->num_rows > 0) 
              {
             
                 while($row1 = $result1->fetch_assoc())
                 {
                     $output1["CommnetUserName"] = $row1['FirstName'];
                     $UserTypeId =  $row1["UserTypeID"];
     
                     $sql2 = "SELECT UserRoleName FROM usertype where UserTypeID='$UserTypeId'";
                     $result2 = $conn->query($sql2);
                     while($row2=mysqli_fetch_array($result2))
                     {
                       $UserRoleName = $row2["UserRoleName"];
                     }
                    // $output["AnswerUserRoleName"] = $UserRoleName;
                     if($UserRoleName=="AssignmentSeeker")
                     {
                         $sql3 = "SELECT ProfileImage FROM assignmentseekerprofileimage where AssignmentSeekerID='$CommentUserID'";
                         $result3 = $conn->query($sql3);
                         while($row3=mysqli_fetch_array($result3))
                         {
     
                           $profileimage = $row3["ProfileImage"];
     
                           
                              
                           
                         }
                         $output1["CommentUserprofileimage"] = $profileimage;
                     }
                     else if($UserRoleName=='User')
                     {
                         $sql6 = "SELECT ProfileImage FROM jobseekerprofileimage where JobSeekerID='$CommentUserID'";
                         $result6 = $conn->query($sql6);
                         while($row6=mysqli_fetch_array($result6))
                         {
                           $profileimage = $row6["ProfileImage"];
                         }
                         $output1["Commnetprofileimage"] = $profileimage;
                     }      
                  }
              }
              else
              {
                echo "error";
              }
              $output[]=$output1;
            }
              
            
            
         }
         $sql1="SELECT UserTypeID,FirstName,UserAccountID FROM useraccount where UserAccountID = $UserId";
         $result1 = $conn->query($sql1);
         if ($result1->num_rows > 0) 
         {
        
            while($row1 = $result1->fetch_assoc())
            {
                $output["AnswerUserName"] = $row1['FirstName'];
                $UserTypeId =  $row1["UserTypeID"];

                $sql2 = "SELECT UserRoleName FROM usertype where UserTypeID='$UserTypeId'";
                $result2 = $conn->query($sql2);
                while($row2=mysqli_fetch_array($result2))
                {
                  $UserRoleName = $row2["UserRoleName"];
                }
               // $output["AnswerUserRoleName"] = $UserRoleName;
                if($UserRoleName=="AssignmentSeeker")
                {
                    $sql3 = "SELECT ProfileImage FROM assignmentseekerprofileimage where AssignmentSeekerID='$UserId'";
                    $result3 = $conn->query($sql3);
                    while($row3=mysqli_fetch_array($result3))
                    {

                      $profileimage = $row3["ProfileImage"];

                      
                         
                      
                    }
                    $output["AnswerUserprofileimage"] = $profileimage;
                }
                else if($UserRoleName=='User')
                {
                    $sql6 = "SELECT ProfileImage FROM jobseekerprofileimage where JobSeekerID='$UserId'";
                    $result6 = $conn->query($sql6);
                    while($row6=mysqli_fetch_array($result6))
                    {
                      $profileimage = $row6["ProfileImage"];
                    }
                    $output["Answerprofileimage"] = $profileimage;
                }

            }
         }
          else
          {
            echo "error";
          }
      
        
        
     
          $response[]=$output;
     }
    echo  json_encode($response);
}
else
{
        echo "error";
}

?>