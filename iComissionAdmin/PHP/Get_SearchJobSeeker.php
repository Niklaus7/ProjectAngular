<?php
//search job by different filter

//SELECT * FROM `jobpost` WHERE `JobLocation` LIKE '%Pune%'
include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

///error in seraching data with keywords n exp 

$Keywords = $data->Keywords ;
$Experience = $data->Experience;
$JobSeekerType = $data->JobSeekerType;

$Keywordss = explode(",",$Keywords);
$FinalKey=[];
for($i=0; $i< sizeof($Keywordss);$i++){
    $FinalKey[$i] = "j2.SkillSetID LIKE '%".$Keywordss[$i]."%'";
}
$FinalKeywords = implode(" or ",$FinalKey);
$sql1="";
if($JobSeekerType == "Freshers"){
    $sql1="SELECT j1.*,j2.* FROM jobseekerprofile j1 inner join jobseekerskillset j2 on j2.JobSeekerID = j1.JobSeekerID where ($FinalKeywords) and j1.JobSeekerType = '$JobSeekerType' order by j1.FirstName asc";
}
else{
    $sql1="SELECT j1.*,j2.*,j3.* FROM jobseekerprofile j1 inner join jobseekerskillset j2 on j2.JobSeekerID = j1.JobSeekerID inner join jobseekerexperiencedetails j3 on j3.JobSeekerID = j1.JobSeekerID where ($FinalKeywords) and j3.TotalExp_Year <= $Experience and j1.JobSeekerType = '$JobSeekerType' order by j1.FirstName asc";
}
// echo $sql1;
$result1 = $conn->query($sql1);

if ($result1->num_rows > 0) 
{
    while($row = $result1->fetch_assoc())
    {
        $output = $row;

        $jobseekerid = $row["JobSeekerID"];
        $sql9 = "SELECT ProfileImage from jobseekerprofileimage where JobSeekerID = '$jobseekerid'";
        $result9 = $conn->query($sql9);
        
        if($result9->num_rows > 0) 
        {
            while($row9 = $result9->fetch_assoc())
            {                       
                $output['ProfileImage']   = $row9['ProfileImage'];
            }
            
        }

        $respone[]= $output; 
    }
    echo json_encode($respone);
}
else
{
    // $data = false;
    // $msg ='No data';
    // $respone = array('data'=>$data,'msg'=>$msg);
    // echo json_encode($respone);
    echo "error";
}
    

// if($Keywords !='' && $Experience !="Experience in Year" && $JobSeekerType != 'undefined')
// {
//     //echo "with3";
    
//         // $sql1="SELECT * FROM jobseekerprofile where JobSeekerType = '$JobSeekerType' ";
            
//         //             $result1 = $conn->query($sql1);
                    
//         //             if ($result1->num_rows > 0) 
//         //             {
            
//         //                 while($row = $result1->fetch_assoc())
//         //                 {
//         //                     $output = $row;
//         //                     $id = $row['JobSeekerID'];
                        
//         //                     $jobseekertype = $row['JobSeekerType'];
                                        
//         //                                             $sql3="SELECT * FROM jobseekerskillset where  JobSeekerID =  $id  and SkillSetID LIKE '%$Keywords%'";
                                            
//         //                                             $result3 = $conn->query($sql3);
                                                    
//         //                                             if ($result3->num_rows > 0) 
//         //                                             {
                                            
//         //                                                 while($row3 = $result3->fetch_assoc())
//         //                                                 {
//         //                                                         $id1 = $row3['JobSeekerID'];
//         //                                                         echo $id1;
//         //                                                         $output['SkillSetID'] = $row3['SkillSetID'];
                                                                
//         //                                                         if( $jobseekertype == 'Freshers')
//         //                                                         {
//         //                                                             $output['TotalExp_Year'] = "0";
//         //                                                             $output['TotalExp_Month'] = "0";
//         //                                                             $output['JobTitle'] = "Freshers";
//         //                                                             $output['Salary'] = "0";
//         //                                                         }
//         //                                                         else
//         //                                                         {
//         //                                                             $sql4 = "SELECT * FROM jobseekerexperiencedetails where  JobSeekerID =  $id1 and TotalExp_Year = $Experience ";
//         //                                                             $result4 = $conn->query($sql4);
                                                    
//         //                                                             if($result4->num_rows > 0) 
//         //                                                             {
//         //                                                                 while($row4 = $result4->fetch_assoc())
//         //                                                                 {                       
//         //                                                                     $output['TotalExp_Year'] = $row4['TotalExp_Year'];;
//         //                                                                     $output['TotalExp_Month'] =  $row4['TotalExp_Month'];                                                                    
//         //                                                                     $output['JobTitle'] = $row4['JobTitle'];   
//         //                                                                     $output['Salary']   = $row4['Salary'];
//         //                                                                 }
                                                                        
//         //                                                             }
                                                                    
//         //                                                         }
            
                                                            
//         //                                                 }
//         //                                             }
                                                
                                
//         //                     $respone[]= $output; 
//         //                 }
                        
//         //                 echo json_encode($respone);
            
//         //             }        
    
// }
// else if($Keywords !='' && $Experience !="Experience in Year" && $JobSeekerType == 'undefined')
// {
//     echo "JobSeekerType -no";
// }
// else if($Keywords !='' && $Experience =="Experience in Year" && $JobSeekerType != 'undefined')
// {
//     echo "Experience -no";
// }
// else if($Keywords !='' && $Experience =="Experience in Year" && $JobSeekerType == 'undefined')
// {
//     echo "Keywords yes";
// }
// else if($Keywords =='' && $Experience !="Experience in Year" && $JobSeekerType != 'undefined')
// {
//     echo "Keywords no";
// }
// else if($Keywords =='' && $Experience !="Experience in Year" && $JobSeekerType == 'undefined')
// {
//     echo "Experience yes";
  
// }
// else if($Keywords =='' && $Experience =="Experience in Year" && $JobSeekerType != 'undefined')
// {
//     //echo "JobSeekerType yes----working";

//     $sql1="SELECT * FROM jobseekerprofile where JobSeekerType = '$JobSeekerType' ";
    
//             $result1 = $conn->query($sql1);
            
//             if ($result1->num_rows > 0) 
//             {
       
//                 while($row = $result1->fetch_assoc())
//                 {
//                     $output = $row;
//                     $id = $row['JobSeekerID'];
//                     $jobseekertype = $row['JobSeekerType'];
    
                            
//                             $sql2="SELECT * FROM jobseekereducatindetails where  JobSeekerID =  $id ";
                    
//                             $result2 = $conn->query($sql2);
                            
//                             if ($result2->num_rows > 0) 
//                             {
                       
//                                 while($row2 = $result2->fetch_assoc())
//                                 {
                                    
//                                     $output['HighestQualification'] = $row2['HighestQualification'];
//                                     $output['PassoutYear'] = $row2['PassoutYear'];
//                                     $output['CPI'] = $row2['CPI'];
    
//                                             $sql3="SELECT * FROM jobseekerskillset where  JobSeekerID =  $id ";
                                    
//                                             $result3 = $conn->query($sql3);
                                            
//                                             if ($result3->num_rows > 0) 
//                                             {
                                       
//                                                 while($row3 = $result3->fetch_assoc())
//                                                 {
//                                                         $output['SkillSetID'] = $row3['SkillSetID'];
    
//                                                         if( $jobseekertype == 'Freshers')
//                                                         {
//                                                                 $output['TotalExp_Year'] = "0";
//                                                                 $output['TotalExp_Month'] ="0";                                                                $output['JobTitle'] = "Freshers";
//                                                                 $output['Salary'] = "0";
//                                                         }
//                                                         else
//                                                         {
//                                                             $sql4 = "SELECT * FROM jobseekerexperiencedetails where  JobSeekerID =  $id ";
//                                                             $result4 = $conn->query($sql4);
                                            
//                                                             if($result4->num_rows > 0) 
//                                                             {
//                                                                 while($row4 = $result4->fetch_assoc())
//                                                                 {                       
//                                                                     $output['TotalExp_Year'] = $row4['TotalExp_Year'];
//                                                                     $output['TotalExp_Month'] = $row4['TotalExp_Month'];
//                                                                     $output['JobTitle'] = $row4['JobTitle'];   
//                                                                     $output['Salary']   = $row4['Salary'];
//                                                                 }
                                                                
//                                                             }
//                                                             else
//                                                             {
//                                                                 echo $conn->error();
//                                                                 $data = false;
//                                                                 $msg ='No data';
//                                                                 $respone = array('data'=>$data,'msg'=>$msg);
//                                                                 echo json_encode($respone);
//                                                             }
//                                                         }
//                                                 }
//                                             }
//                                             else
//                                             {
//                                                 $data = false;
//                                                 $msg ='No data';
//                                                 $respone = array('data'=>$data,'msg'=>$msg);
//                                                 echo json_encode($respone);   
//                                             }
                                    
    
//                                 }
//                             }
//                             else
//                             {
//                                 $data = false;
//                                 $msg ='No data';
//                                 $respone = array('data'=>$data,'msg'=>$msg);
//                                 echo json_encode($respone);
//                             }
                   
                    
                        
//                     $respone[]= $output; 
//                 }
                
//                 echo json_encode($respone);
    
//             }
//             else
//             {
//                 $data = false;
//                 $msg ='No data';
//                 $respone = array('data'=>$data,'msg'=>$msg);
//                 echo json_encode($respone);
//             }
// }
// else
// {
//     //working

//     $sql1="SELECT * FROM jobseekerprofile";
    
//             $result1 = $conn->query($sql1);
            
//             if ($result1->num_rows > 0) 
//             {
       
//                 while($row = $result1->fetch_assoc())
//                 {
//                     $output = $row;
//                     $id = $row['JobSeekerID'];
//                     $jobseekertype = $row['JobSeekerType'];
    
                            
//                             $sql2="SELECT * FROM jobseekereducatindetails where  JobSeekerID =  $id ";
                    
//                             $result2 = $conn->query($sql2);
                            
//                             if ($result2->num_rows > 0) 
//                             {
                       
//                                 while($row2 = $result2->fetch_assoc())
//                                 {
                                    
//                                     $output['HighestQualification'] = $row2['HighestQualification'];
//                                     $output['PassoutYear'] = $row2['PassoutYear'];
//                                     $output['CPI'] = $row2['CPI'];
    
//                                             $sql3="SELECT * FROM jobseekerskillset where  JobSeekerID =  $id ";
                                    
//                                             $result3 = $conn->query($sql3);
                                            
//                                             if ($result3->num_rows > 0) 
//                                             {
                                       
//                                                 while($row3 = $result3->fetch_assoc())
//                                                 {
//                                                         $output['SkillSetID'] = $row3['SkillSetID'];
    
//                                                         if( $jobseekertype == 'Freshers')
//                                                         {
//                                                             $output['TotalExp_Year'] = "0";
//                                                             $output['TotalExp_Month'] = "0";
//                                                                 $output['JobTitle'] = "Freshers";
//                                                                 $output['Salary'] = "0";
//                                                         }
//                                                         else
//                                                         {
//                                                             $sql4 = "SELECT * FROM jobseekerexperiencedetails where  JobSeekerID =  $id ";
//                                                             $result4 = $conn->query($sql4);
                                            
//                                                             if($result4->num_rows > 0) 
//                                                             {
//                                                                 while($row4 = $result4->fetch_assoc())
//                                                                 {                       
//                                                                     $output['TotalExp_Year'] = $row4['TotalExp_Year'];;
//                                                                     $output['TotalExp_Month'] =  $row4['TotalExp_Month'];                                                                    $output['JobTitle'] = $row4['JobTitle'];   
//                                                                     $output['Salary']   = $row4['Salary'];
//                                                                 }
                                                                
//                                                             }
//                                                             else
//                                                             {
//                                                                 //echo $conn->error();
//                                                                 $data = false;
//                                                                 $msg ='No data';
//                                                                 $respone = array('data'=>$data,'msg'=>$msg);
//                                                                 echo json_encode($respone);
//                                                             }
//                                                         }
//                                                 }
//                                             }
//                                             else
//                                             {
//                                                 $data = false;
//                                                 $msg ='No data';
//                                                 $respone = array('data'=>$data,'msg'=>$msg);
//                                                 echo json_encode($respone);   
//                                             }
                                    
    
//                                 }
//                             }
//                             else
//                             {
//                                 $data = false;
//                                 $msg ='No data';
//                                 $respone = array('data'=>$data,'msg'=>$msg);
//                                 echo json_encode($respone);
//                             }
                   
                    
                        
//                     $respone[]= $output; 
//                 }
                
//                 echo json_encode($respone);
    
//             }
//             else
//             {
//                 $data = false;
//                 $msg ='No data';
//                 $respone = array('data'=>$data,'msg'=>$msg);
//                 echo json_encode($respone);
//             }
// }
?>