<?php
//UPDATE DATA WHEN USER REPOSTS DEACTIVATED JOB

include("db_connection.php");
$data = json_decode(file_get_contents("php://input"));

date_default_timezone_set("Asia/Kolkata");

$JobID = $data->jobID;

$JobPostedBy = $data->jobPostedBy;

$JobTitle = $data->jobtitle; 

$JobDescription = $data->jobdescription;

$NoOfVacancy = $data->NoOfVacancy;

$MinExp = $data->minexp ;

$MaxExp = $data->maxexp;

$MinSal = $data->minsalary;

$MaxSal = $data->maxsalary;

$JobLocation = $data->joblocation;

$JobIndustry = $data->industry;

$JobFunctionalArea = $data->functionalarea;

$UGQual = $data->upspec;

$PGQual = $data->pgspec;

$JobPostDate = date("Y-m-d", strtotime($data->jobPostDateTime));

$JobActive = "Active";

$JobAprrovedstatus = "No";


$Skill= $data->Keywords ;

$sql = "update jobpost set JobTitle = '$JobTitle', JobDescription = '$JobDescription', NoOfVacancy =  $NoOfVacancy, MinExp = $MinExp, MaxExp = $MaxExp, MinSal = $MinSal, MaxSal = $MaxSal, JobLocation = '$JobLocation', JobIndustry = '$JobIndustry', JobFunctionalArea = '$JobFunctionalArea', UGQual = '$UGQual', PGQual = '$PGQual', JobPostDate = '$JobPostDate', JobActive = '$JobActive' where JobPostID = $JobID and JobPostedBy = $JobPostedBy";

if ($conn->query($sql)) 
{
    $data = true;
    $msg ='Reposted Job';
    $respone = array('data'=>$data,'msg'=>$msg);
    echo json_encode($respone); 
} 
else 
{
        $data = false;
        $msg ='error in reposting job';
        $respone = array('data'=>$data,'msg'=>$msg);
        echo json_encode($respone);    
}


?>