<?php


//GET All Messages w.r.t particular user

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

$PlanName = $data->PlanName;
$CreatorID = $data->CreatorID;

$NoOFBids = $data->NoOFBids;
$NoOfSkills = $data->NoOfSkills;



$UnlockRewards = $data->UnlockRewards;
$UnlimitedProjectBookmarks = $data->UnlimitedProjectBookmarks;
$CustomCoverPhoto = $data->CustomCoverPhoto;
$DailyWithdrawals= $data->DailyWithdrawals;
$PreferredAssignmentSeekerEligible =$data->PreferredAssignmentSeekerEligible;
$FreeProjectExtensions = $data->FreeProjectExtensions;
$HighValueProjectBidding = $data->HighValueProjectBidding;
$FreeSealedProjects = $data->FreeSealedProjects;
$FreeNDAProjects= $data->FreeNDAProjects;
$UnlimitedEmployerFollowings= $data->UnlimitedEmployerFollowings;
$UnlimitedExternalInvoicing = $data->UnlimitedExternalInvoicing;


$sql  = "SELECT * FROM `membershipplantypes` WHERE `PlanName` = '$PlanName'";
$result = $conn->query($sql);

if ($result->num_rows > 0) 
{
    while($row = $result->fetch_assoc())
    {
        $PlanTypeID = $row['PlanTypeID'];
        $q = "SELECT * from usermembershipplan where CreatedBy = $CreatorID and PlanTypeID = $PlanTypeID ";
        $result0 = $conn->query($q);
        if($result0->num_rows > 0)
        {
                   
            echo "error";
        }
        else
        {
            $sql1 = "insert into usermembershipplan(`PlanTypeID`, `CreatedBy`, `NoOfBids`, `NoOfSkills`) 
                        values($PlanTypeID,$CreatorID,$NoOFBids,$NoOfSkills)";
            if ($conn->query($sql1)) 
            {
                        $sql2= "select MAX(UserPlanID) AS UserPlanID FROM usermembershipplan"; 
                
                        $result2 = $conn->query($sql2);
                
                        $value = mysqli_fetch_object($result2);
                        
                        $value->UserPlanID;

                        $sql3 = "insert into membershipplanfeatures(`UserPlanID`,`UnlockRewards`,
                                                                    `UnlimitedProjectBookmarks`,
                                                                    `CustomCoverPhoto`, 
                                                                    `DailyWithdrawals`, 
                                                                    `PreferredAssignmentSeekerEligible`, 
                                                                    `FreeProjectExtensions`, 
                                                                    `HighValueProjectBidding`,
                                                                    `FreeSealedProjects`,
                                                                    `FreeNDAProjects`,
                                                                    `UnlimitedEmployerFollowings`, 
                                                                    `UnlimitedExternalInvoicing`)
                                values(
                                        $value->UserPlanID,$UnlockRewards,$UnlimitedProjectBookmarks,
                                        $CustomCoverPhoto,$DailyWithdrawals,$PreferredAssignmentSeekerEligible,
                                        $FreeProjectExtensions,$HighValueProjectBidding,$FreeSealedProjects,
                                        $FreeNDAProjects,$UnlimitedEmployerFollowings,$UnlimitedExternalInvoicing)";
                                        
                        if($conn->query($sql3))
                        {
                            $data = true;
                            $msg = 'data saved';
                            $respone = array('data'=>$data,'msg'=>$msg);            
                            echo json_encode($respone);
                        }
                        else
                        {
                            $data = false;
                            $msg = 'error in saving data';
                            $respone = array('data'=>$data,'msg'=>$msg);            
                            echo json_encode($respone);
                        }
            }
            else
            {
                $data = false;
                $msg = 'error in saving data';
                $respone = array('data'=>$data,'msg'=>$msg);            
                echo json_encode($respone);
            }
        }
        
    }
}


  




?>