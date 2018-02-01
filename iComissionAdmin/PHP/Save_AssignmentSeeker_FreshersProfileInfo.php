<?php

//SAVE jon seeker profile info if Assignment Seeker is freshers

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

date_default_timezone_set("Asia/Kolkata");



$AssignmentSeekerID =  $data->AssignmentSeekerID;

$AssignmentBiddingType = $data->AssignmentBiddingType;

$FirstName = $data->FirstName;
$DOB = date("Y-m-d", strtotime($data->DOB)) ;
$Address = $data->Address;
$Location = $data->Location;
$Gender= $data->Gender;
$Contact= $data->Contact;
$PassportNo= $data->Passportno;
$Email= $data->Email;

$ProfileImage =$data->ProfileImage;
$ProfileImageExt =$data->ProfileImageExt;



$AssignmentSeekerType= $data->AssignmentSeekerType;



$Skill =  $data->Skill;
$SkillExp = $data->SkillExp;



$CompanyName =  $data->CompanyName;
$CompanyEmail =  $data->CompanyEmail;
$CompanyAddress =  $data->CompanyAddress;
$CompanyPhone =  $data->CompanyPhone;
$CompanyWebsite =  $data->CompanyWebsite;
$CompanyRegNo =  $data->CompanyRegNo;
$Aboutcompany =  $data->aboutcompany;
$Industry =  $data->Industry;
$Date =  $data->Date;
$Country =  $data->Country;
$State =  $data->State;
$PAN =  $data->PAN;
$TAN =  $data->TAN;
$Lat =  $data->Lat;
$Lng =  $data->Lng;

$CompanyLogo = $data->CompanyLogo;
$CompanyLogoFileExt = $data->CompanyLogoFileExt;

$IncorporationCert = $data->IncorporationCert;
$IncorporationCertFileExt = $data->IncorporationCertFileExt;



define('UPLOAD_DIR1', 'AssignmentSeeker_ProfileImages/');				
$FileData_data1 = base64_decode($ProfileImage);
$FileData_file1 = UPLOAD_DIR1 . $AssignmentSeekerID . 'Profile.'.$ProfileImageExt;
$success1=file_put_contents($FileData_file1, $FileData_data1);
$FileData_file1=$FileData_file1;

define('UPLOAD_DIR2', 'AssignmentSeeker_CompanyLogo/');				
$FileData_data2 = base64_decode($CompanyLogo);
$FileData_file2 = UPLOAD_DIR2 . $AssignmentSeekerID . 'CompanyLogo.'.$CompanyLogoFileExt;
$success2=file_put_contents($FileData_file2, $FileData_data2);
$FileData_file2=$FileData_file2;

define('UPLOAD_DIR3', 'AssignmentSeeker_IncorporationCert/');				
$FileData_data3 = base64_decode($IncorporationCert);
$FileData_file3 = UPLOAD_DIR3 . $AssignmentSeekerID . 'IncorporationCert.'.$IncorporationCertFileExt;
$success3=file_put_contents($FileData_file3, $FileData_data3);
$FileData_file3=$FileData_file3;

/*
    
CREATE  PROCEDURE usp_Insert_JobSeekerSkillSet(`In_JobSeekerID` int(5), `In_SkillSetID` varchar(40),`In_SkillExp` int(5))
BEGIN
		INSERT INTO jobseekerskillset (`JobSeekerID`, `SkillSetID`,`SkillExp`) 
        VALUES (`In_JobSeekerID`, `In_SkillSetID`,`In_SkillExp`);
       
END
*/

$sql0 = "CALL usp_Insert_AssignmentSeekerProfileInfo(?,?,?,?,?,?,?,?,?,?,?)";

$stmt0 = $conn->prepare($sql0);

$stmt0->bind_param("isssssissss",$AssignmentSeekerID,$FirstName,$DOB, 
                                    $Address,$Location,$Gender,
                                        $Contact,$PassportNo,$Email,
                                            $AssignmentSeekerType,$AssignmentBiddingType);

if($stmt0->execute())
{
        $sql1= "select MAX(AssignmentSeekerID) AS AssignmentSeekerID FROM assignmentseekerprofile"; 

        $result1 = $conn->query($sql1);

        $value = mysqli_fetch_object($result1);
        
        $value->AssignmentSeekerID;

                $sql2 = "CALL usp_Insert_AssignmentSeekerCompanyInfo(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

                $stmt2 = $conn->prepare($sql2);

                $stmt2->bind_param("isssisssssssssssss",$value->AssignmentSeekerID,$CompanyName,$CompanyAddress,
                                                                $CompanyEmail,$CompanyPhone,$CompanyWebsite,
                                                                    $CompanyRegNo,$Aboutcompany,$Industry,
                                                                        $Date,$FileData_file2,$FileData_file3,
                                                                        $Country,$State,$PAN,$TAN,$Lat,$Lng
                                                         

                                    );

                if($stmt2->execute())
                {
                    
                        
                            

                                $sql3 ="CALL usp_Insert_AssignmentSeekerProfileImage(?,?)";
                                $stmt3 = $conn->prepare($sql3);
                                $stmt3->bind_param("is",$value->AssignmentSeekerID, $FileData_file1);
                                
                                if($stmt3->execute())
                                {
                                    $sql4 = "CALL usp_Insert_AssignmentSeekerSkillSet(?,?,?)";
                                    $stmt4 = $conn->prepare($sql4);
                                    $stmt4->bind_param('iss',$value->AssignmentSeekerID,$Skill,$SkillExp);
            
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
                                            $msg = 'error in saving data in Assignment Seeker Skill Set';
                                            $respone = array('data'=>$data,'msg'=>$msg);            
                                            echo json_encode($respone);
                                    }
                                }
                                else
                                {
                                    //echo "  in php Error: " . $sql . "<br>" . $conn->error;
                                        $data = false;
                                        $msg = 'error in saving data in assignment Profile image';
                                        $respone = array('data'=>$data,'msg'=>$msg);            
                                        echo json_encode($respone);
                                }
                           
                }
                else
                {
                    $data = false;
                    $msg ='error in saving data  of assignment company info';
                    $respone = array('data'=>$data,'msg'=>$msg);
                    echo json_encode($respone);
                }

}
else
{
    
    $data = false;
    $msg ='error in saving data  of assignmentseekerprofile';
    $respone = array('data'=>$data,'msg'=>$msg);
    echo json_encode($respone);
}




?>