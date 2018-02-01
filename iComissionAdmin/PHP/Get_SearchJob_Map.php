<?php
//search job by different filter like job location exp,salary

//SELECT * FROM `jobpost` WHERE `JobLocation` LIKE '%Pune%'
include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

$searchtype = $data->searchtype;
if($searchtype == 'Default'){

    $joblocation = $data->joblocation ;
    $Experience = $data->Experience;
    $Salary = $data->Salary;
    $keywords = $data->keywords;

    $JobLocations = explode(",",$joblocation);
    $FinalLoc=[];
    for($i=0; $i< sizeof($JobLocations);$i++){
        $FinalLoc[$i] = "j1.JobLocation LIKE '%".$JobLocations[$i]."%'";
    }
    $FinalLocation = implode(" or ",$FinalLoc);

    $keywordss = explode(",",$keywords);
    $keywrds=[];
    for($j=0; $j< sizeof($keywordss);$j++){
        $keywrds[$j] = "j2.SkillSetID LIKE '%".$keywordss[$j]."%'";
    }
    $Finalkeywords = implode(" or ",$keywrds);

    $sql1 = "SELECT j1.*,j2.*,group_concat(j1.JobPostID) as JobPostsID,count(j1.JobPostID) as NumberOFjobs FROM jobpost j1 inner join jobpostskillset j2 WHERE ($Finalkeywords) and ($FinalLocation) and j1.MinExp = '$Experience' and j1.MinSal = '$Salary' and j1.JobPostID = j2.JobPostID and j1.JobActive = 'Active' group by j1.JobPostedBy DESC";
    //$sql1 = "SELECT j1.*,j2.* FROM jobpost j1 inner join jobpostskillset j2 WHERE (j2.SkillSetID LIKE '%$keywords%' or j2.SkillSetID ='') and (j1.JobLocation LIKE '%$joblocation%' or j1.JobLocation = '') and (j1.MinExp = '$Experience' or j1.MinExp='') and (j1.MinSal = '$Salary' or j1.MinSal='') and j1.JobPostID = j2.JobPostID order by j1.JobPostDate DESC";
    //echo $sql1;
            $result1 = $conn->query($sql1);
            
            if ($result1->num_rows > 0) 
            {
       
                while($row = $result1->fetch_assoc())
                {
                    $output = $row;
    
                    $id = $row['JobPostID'];
                    $JobPostedBy = $row['JobPostedBy'];

                    $sql3 ="SELECT Lat,Lng,CompanyName,CompanyURL,CompanyLogo FROM registeruserinforamtion where UserID = $JobPostedBy";
                    $result3 = $conn->query($sql3);
                    if ($result3->num_rows > 0)
                    {
                        while($row3 = $result3->fetch_assoc())
                        {  
                            $Lat = $row3['Lat'];
                            $Lng = $row3['Lng']; $CompanyName = $row3['CompanyName'];
                            $CompanyURL = $row3['CompanyURL'];
                            $CompanyLogo = $row3['CompanyLogo'];
                        }
                    }

                    // $sql5 ="SELECT COUNT(JobPostID) As NumberOFjobs FROM jobpost where JobPostedBy = $JobPostedBy";
                    // $result5= $conn->query($sql5);
                    // if ($result5->num_rows > 0) 
                    // {
                    //     while($row5 = $result5->fetch_assoc())
                    //     {
                    //         $NumberOFjobs = $row5['NumberOFjobs'];
                    //     }
                    // }
                    
                    $sql2 ="SELECT COUNT(JobApplyActivityID) As NumberOFCandidate FROM jobapplyactivity where JobPostID = $id ";
                    
                    $result2 = $conn->query($sql2);

                    if ($result2->num_rows > 0) 
                    {
                        while($row2 = $result2->fetch_assoc())
                        {
                            $noofcandidate = $row2['NumberOFCandidate'];
                        }
                    }
                    else
                    {
                        $data = false;
                        $msg ='No data';
                        $respone = array('data'=>$data,'msg'=>$msg);
                        echo json_encode($respone);
                    }
                    $output['NumberOFCandidate_Applied'] =  $noofcandidate; 
                    $output['Lat'] =  $Lat; 
                    $output['Lng'] =  $Lng;
                    $output['CompanyName'] =  $CompanyName; 
                    $output['CompanyURL'] =  $CompanyURL;
                    $output['CompanyLogo'] =  $CompanyLogo; 
                    // $output['NumberOFjobs'] =  $NumberOFjobs;

                    $respone[]= $output; 
                                                                                                             
                }
                echo json_encode($respone);
    
            }
            else
            {
                // $data = false;
                // $msg ='No data';
                // $respone = array('data'=>$data,'msg'=>$msg);
                echo "error";
            }

}
else if($searchtype == 'Advanced'){
    $joblocation = $data->joblocation;
    $Experience = $data->Experience;
    $Salary = $data->Salary;
    $keywords = $data->keywords;
    $industry = $data->jobindustry;
    
    $JobLocations = explode(",",$joblocation);
    $FinalLoc=[];
    for($i=0; $i< sizeof($JobLocations);$i++){
        $FinalLoc[$i] = "j1.JobLocation LIKE  '%".$JobLocations[$i]."%'";
    }
    $FinalLocation = implode(" or ",$FinalLoc);

    $keywordss = explode(",",$keywords);
    $keywrds=[];
    for($j=0; $j< sizeof($keywordss);$j++){
        $keywrds[$j] = "j2.SkillSetID LIKE '%".$keywordss[$j]."%'";
    }
    $Finalkeywords = implode(" or ",$keywrds);

    $industrys = explode(",",$industry);
    $indtry=[];
    for($j=0; $j< sizeof($industrys);$j++){
        $indtry[$j] = "j1.JobIndustry LIKE '%".$industrys[$j]."%'";
    }
    $Finalindustrys = implode(" or ",$indtry);

    $sql1 = "SELECT j1.*,j2.*,group_concat(j1.JobPostID),count(j1.JobPostID) as NumberOFjobs FROM jobpost j1 inner join jobpostskillset j2 WHERE ($Finalkeywords) and ($FinalLocation) and j1.MinExp = '$Experience' and j1.MinSal = '$Salary' and ($Finalindustrys) and j1.JobPostID = j2.JobPostID and j1.JobActive = 'Active' group by j1.JobPostedBy DESC";
    //echo $sql1;
            $result1 = $conn->query($sql1);
            
            if ($result1->num_rows > 0) 
            {
       
                while($row = $result1->fetch_assoc())
                {
                    $output = $row;
    
                    $id = $row['JobPostID'];
                    $JobPostedBy = $row['JobPostedBy'];
                    
                    $sql3 ="SELECT Lat,Lng,CompanyName,CompanyURL,CompanyLogo FROM registeruserinforamtion where UserID = $JobPostedBy";
                    $result3 = $conn->query($sql3);
                    if ($result3->num_rows > 0)
                    {
                        while($row3 = $result3->fetch_assoc())
                        {  
                            $Lat = $row3['Lat'];
                            $Lng = $row3['Lng'];
                            $CompanyName = $row3['CompanyName'];
                            $CompanyURL = $row3['CompanyURL'];
                            $CompanyLogo = $row3['CompanyLogo'];
                        }
                    }

                    // $sql5 ="SELECT COUNT(JobPostID) As NumberOFjobs FROM jobpost where JobPostID = $id ";
                    // $result5= $conn->query($sql5);
                    // if ($result5->num_rows > 0) 
                    // {
                    //     while($row5 = $result5->fetch_assoc())
                    //     {
                    //         $NumberOFjobs = $row5['NumberOFjobs'];
                    //     }
                    // }
                    
                    $sql2 ="SELECT COUNT(JobApplyActivityID) As NumberOFCandidate FROM jobapplyactivity where JobPostID = $id ";
                    
                    $result2 = $conn->query($sql2);

                    if ($result2->num_rows > 0) 
                    {
                        while($row2 = $result2->fetch_assoc())
                        {
                            $noofcandidate = $row2['NumberOFCandidate'];
                        }
                    }
                    else
                    {
                        $data = false;
                        $msg ='No data';
                        $respone = array('data'=>$data,'msg'=>$msg);
                        echo json_encode($respone);
                    }
                    $output['NumberOFCandidate_Applied'] =  $noofcandidate; 
                    $output['Lat'] =  $Lat; 
                    $output['Lng'] =  $Lng;
                    $output['CompanyName'] =  $CompanyName; 
                    $output['CompanyURL'] =  $CompanyURL;
                    $output['CompanyLogo'] =  $CompanyLogo; 
                    // $output['NumberOFjobs'] =  $NumberOFjobs;
                    
                    $respone[]= $output; 
                                                                                                             
                }
                echo json_encode($respone);
    
            }
            else
            {
                // $data = false;
                // $msg ='No data';
                // $respone = array('data'=>$data,'msg'=>$msg);
                echo "error";
            }
}
?>