<?php

//SAVE jon seeker profile info if jobseeker is freshers

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

date_default_timezone_set("Asia/Kolkata");



$JobSeekerID =  $data->JobSeekerID;
$FirstName = $data->FirstName;
$DOB = date("Y-m-d", strtotime($data->DOB)) ;
$Address = $data->Address;
$Location = $data->Location;
$Gender= $data->Gender;
$Contact= $data->Contact;
$PassportNo= $data->Passportno;
$Email= $data->Email;
$JobSeekerType= $data->JobSeekerType;
    

$HighestQualification =$data->HighestQualification; 
$InstituteName = $data->InstituteName;
$CourseType =$data->CourseType;
$PassoutYear =$data->PassoutYear;
$CPI=$data->CPI;

$Skill =  $data->Skill;
$SkillExp = $data->SkillExp;

$ResumeFile =$data->ResumeFile;
$ResumeFileExt =$data->ResumeFileExt;

$ProfileImage =$data->ProfileImage;
$ProfileImageExt =$data->ProfileImageExt;

define('UPLOAD_DIR', 'JobSeeker_Resume/');				
$FileData_data = base64_decode($ResumeFile);
$FileData_file = UPLOAD_DIR . uniqid() . '.'.$ResumeFileExt;
$success=file_put_contents($FileData_file, $FileData_data);
$FileData_file=$FileData_file;

define('UPLOAD_DIR1', 'JobSeeker_Profile/');				
$FileData_data1 = base64_decode($ProfileImage);
$FileData_file1 = UPLOAD_DIR1 . $JobSeekerID . 'Profile.'.$ProfileImageExt;
$success1=file_put_contents($FileData_file1, $FileData_data1);
$FileData_file1=$FileData_file1;

/*
    
CREATE  PROCEDURE usp_Insert_JobSeekerSkillSet(`In_JobSeekerID` int(5), `In_SkillSetID` varchar(40),`In_SkillExp` int(5))
BEGIN
		INSERT INTO jobseekerskillset (`JobSeekerID`, `SkillSetID`,`SkillExp`) 
        VALUES (`In_JobSeekerID`, `In_SkillSetID`,`In_SkillExp`);
       
END
*/

$sql0 = "CALL usp_Insert_JobSeekerProfileInfo(?,?,?,?,?,?,?,?,?,?)";

$stmt0 = $conn->prepare($sql0);

$stmt0->bind_param("isssssisss",$JobSeekerID,$FirstName,$DOB, 
                                    $Address,$Location,$Gender,
                                        $Contact,$PassportNo,$Email,
                                            $JobSeekerType);

if($stmt0->execute())
{
    $sql3= "select MAX(JobSeekerID) AS JobSeekerID FROM jobseekerprofile"; 

    $result1 = $conn->query($sql3);

    $value = mysqli_fetch_object($result1);
    
    $value->JobSeekerID;

        $sql1 = "CALL usp_Insert_JobSeekerEducatinDetails(?,?,?,?,?,?)";

        $stmt1 = $conn->prepare($sql1);

        $stmt1->bind_param("isssss",$value->JobSeekerID,$HighestQualification,$InstituteName,
                                        $CourseType,$PassoutYear,$CPI);

        if($stmt1->execute())
        {
            
                
                    $sql2 = "CALL usp_Insert_JobSeekerResume(?,?)";
                    $stmt2 = $conn->prepare($sql2);
                    $stmt2->bind_param("is",$value->JobSeekerID, $FileData_file);

                    if($stmt2->execute())
                    {

                        $sql5 = "CALL usp_Insert_JobSeekerProfile(?,?)";
                        $stmt5 = $conn->prepare($sql5);
                        $stmt5->bind_param("is",$value->JobSeekerID, $FileData_file1);
                        
                        if($stmt5->execute())
                        {
                            $sql4 = "CALL usp_Insert_JobSeekerSkillSet(?,?,?)";
                            $stmt4 = $conn->prepare($sql4);
                            $stmt4->bind_param('iss',$value->JobSeekerID,$Skill,$SkillExp);
    
                            if($stmt4->execute())
                            {
                                $data = true;
                                $msg = 'data saved';
                                $respone = array('data'=>$data,'msg'=>$msg);            
                                echo json_encode($respone);
                                //    $count++;
                            }
                            else
                            {
                                  //echo "  in php Error: " . $sql . "<br>" . $conn->error;
                                    $data = false;
                                    $msg = 'error in saving data in JobSeekerSkillSet';
                                    $respone = array('data'=>$data,'msg'=>$msg);            
                                    echo json_encode($respone);
                            }
                        }
                        else
                        {
                              //echo "  in php Error: " . $sql . "<br>" . $conn->error;
                                $data = false;
                                $msg = 'error in saving data in JobSeekerSkillSet';
                                $respone = array('data'=>$data,'msg'=>$msg);            
                                echo json_encode($respone);
                        }
                    }
                    else
                    {
                        $data = false;
                        $msg ='error in saving data  of JobSeekerResume';
                        $respone = array('data'=>$data,'msg'=>$msg);
                        echo json_encode($respone);
                    }
        }
        else
        {
            $data = false;
            $msg ='error in saving data  of JobSeekerEducatinDetails';
            $respone = array('data'=>$data,'msg'=>$msg);
            echo json_encode($respone);
        }

}
else
{
    
    $data = false;
    $msg ='error in saving data  of jobseekerprofile';
    $respone = array('data'=>$data,'msg'=>$msg);
    echo json_encode($respone);
}




?>