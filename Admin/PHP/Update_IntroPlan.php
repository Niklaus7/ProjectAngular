<?php


//GET All Messages w.r.t particular user

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

$PlanID = $data->UserPlanID;
$CreatorID = $data->CreatorID;

$NoOFBids = $data->NoOFBids;
$NoOfSkills = $data->NoOfSkills;

$UnlockRewards = $data->UnlockRewards;
$UnlimitedProjectBookmarks = $data->UnlimitedProjectBookmarks;
$CustomCoverPhoto = $data->CustomCoverPhoto;

$AnnualSubs = $data->AnnualSubs;
$MonthSubs = $data->MonthSubs;
$Desc = $data->Desc;






  
$sql1 = "UPDATE usermembershipplan 
                                    set `NoOfBids`= $NoOFBids, `NoOfSkills`= $NoOfSkills 
                                    where CreatedBy = $CreatorID and UserPlanID = $PlanID ";
if($conn->query($sql1))
{
    $sql2 = "UPDATE membershipplanfeatures 
                                            set `UnlockRewards`= $UnlockRewards,
                                                `UnlimitedProjectBookmarks`= $UnlimitedProjectBookmarks, 
                                                `CustomCoverPhoto`= $CustomCoverPhoto  
                                            where  UserPlanID = $PlanID ";
    if($conn->query($sql2))
    {
        $sql4 = "SELECT * from planconfiguration where UserPlanID = $PlanID";
        $result0 = $conn->query($sql4);
        if($result0->num_rows > 0)
        {
                   
            $sql3 = "UPDATE planconfiguration 
                                                set `AnnualSubs`= $AnnualSubs, `MonthSubs`=$MonthSubs, `Description`= '$Desc' 
                                                where UserPlanID = $PlanID ";
            if($conn->query($sql3))
            {
                $data = true;
                $msg = 'data saved';
                $respone = array('data'=>$data,'msg'=>$msg);            
                echo json_encode($respone);
            }
            else
            {
                echo"error";
            }
        }
        else
        {
            $sql5 = "insert into  planconfiguration (`UserPlanID`, `PlanConfiguredBy`, `AnnualSubs`, `MonthSubs`, `Description`) values ($PlanID,$CreatorID,$AnnualSubs,$MonthSubs,'$Desc')";
            if($conn->query($sql5))
            {
                $data = true;
                $msg = 'data saved';
                $respone = array('data'=>$data,'msg'=>$msg);            
                echo json_encode($respone);
            }
            else
            {
                echo "error";
            }

        }
    }
    else
    {
        echo $sql2.$conn->error;
    }

}
else
{
    echo $sql1.$conn->error;
}




?>