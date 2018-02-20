<?php

//SAVE job seeker profile info if jobseeker is experienced

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

date_default_timezone_set("Asia/Kolkata");



$JobSeekerID =  $data->JobSeekerID;
$FirstName = $data->FirstName ;
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

$TotalExp_Year = $data->TotalExp_Year;
$TotalExp_Month = $data->TotalExp_Month;
$Salary= $data->Salary;
$JobTitle= $data->jobtitle;
$JobDescripion = $data->JobDescripion;
$CompanyName = $data->companyname;
$Industry = $data->Industry;
$Department= $data->Department;
$JobFromDate = $data->JobFromDate;
$JobToDate= $data->JobToDate;

$Skill = $data->Skill;


$SkillExp = $data->SkillExp;


$ResumeFile=$data->ResumeFile;
$ResumeFileExt=$data->ResumeFileExt;

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
    
CREATE  PROCEDURE usp_Insert_JobSeekerExperienceDetails(`In_JobSeekerID` int(5), `In_TotalExp` varchar(10), `In_Salary` int(10), `In_JobTitle`varchar(15), `In_JobDescripion`varchar(20), `In_CompanyName`varchar(10), `In_Industry` varchar(10), `In_Department`varchar(10), `In_JobFromDate` varchar(10), `In_JobToDate` varchar(10))
BEGIN
		INSERT INTO jobseekerexperiencedetails (`JobSeekerID`, `TotalExp`, `Salary`, `JobTitle`, `JobDescripion`, `CompanyName`, `Industry`, `Department`, `JobFromDate`, `JobToDate`) 
        VALUES (`In_JobSeekerID`, `In_TotalExp`, `In_Salary`, `In_JobTitle`, `In_JobDescripion`, `In_CompanyName`, `In_Industry`, `In_Department`, `In_JobFromDate`, `In_JobToDate`);
       
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
                        $sql5 = "CALL usp_Insert_JobSeekerSkillSet(?,?,?)";
                        $stmt5 = $conn->prepare($sql5);
                        $stmt5->bind_param('iss',$value->JobSeekerID,$Skill,$SkillExp);

                        if($stmt5->execute())
                        {
                            $sql6 = "CALL usp_Insert_JobSeekerProfile(?,?)";
                            $stmt6 = $conn->prepare($sql6);
                            $stmt6->bind_param("is",$value->JobSeekerID, $FileData_file1);
        
                            if($stmt6->execute())
                            {    
                            
                            $sql2 = "CALL usp_Insert_JobSeekerResume(?,?)";
                            $stmt2 = $conn->prepare($sql2);
                            $stmt2->bind_param("is",$value->JobSeekerID, $FileData_file);

                                if($stmt2->execute())
                                {
                                    $count = 0;

                                    for( $i=0;$i<sizeof($JobTitle);$i++)
                                    {
                                                $sql4 = "CALL usp_Insert_JobSeekerExperienceDetails(?,?,?,?,?,?,?,?,?,?,?)";
                                        
                                                $stmt4 = $conn->prepare($sql4);
                                        
                                                $stmt4->bind_param("iiiisssssss",$value->JobSeekerID,$TotalExp_Year[$i],$TotalExp_Month[$i],
                                                                        $Salary[$i],
                                                                                $JobTitle[$i],$JobDescripion[$i],$CompanyName[$i],
                                                                                    $Industry[$i],$Department[$i],$JobFromDate[$i],$JobToDate[$i]);
                            
                            
                                                if($stmt4->execute())
                                                {
                                                    $count++;
                                                }
                                                else
                                                {
                                                    $data = false;
                                                    $msg ='error in saving data  of JobSeekerExperienceDetails';
                                                    $respone = array('data'=>$data,'msg'=>$msg);
                                                    echo json_encode($respone);
                                                }

                                    }
                                    if($count>0)
                                    {
                    
                                        $data = true;
                                        $msg = 'data saved';
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
                                $msg ='error in saving data  of JobSeekerResume';
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