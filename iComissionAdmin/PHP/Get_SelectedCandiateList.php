<?php

    include("db_connection.php");

    $data = json_decode(file_get_contents("php://input"));

    $JobSeekerIds = $data->JobSeekerIds;
    $JobSeekerIdss = explode(",",$JobSeekerIds);
    $FinalJobSeekerIds=[];
    for($i=0; $i< sizeof($JobSeekerIdss)-1;$i++)
    {
        $FinalJobSeekerIds[$i] = "'".$JobSeekerIdss[$i]."'";
    }
   
    $Ids = implode(",",$FinalJobSeekerIds);

    
    
        $sql2 ="SELECT * FROM jobseekerprofile where JobSeekerID in ($Ids)";
        
        $result2 = $conn->query($sql2);
                
            if($result2->num_rows > 0) 
            {
        
                    while($row2 = $result2->fetch_assoc())
                    {
                        $output = $row2;
                    
                        $jobseekertype = $row2['JobSeekerType'];
                        if( $jobseekertype == 'Freshers')
                        {
                            $output['TotalExp_Year'] = "0";
                            $output['TotalExp_Month'] = "0";
                            $output['JobTitle'] = "Freshers";
                            $output['Salary'] = "0";
                        }
                        else
                        {
                            $sql4 = "SELECT * FROM jobseekerexperiencedetails where JobSeekerID in ($Ids)";
                            $result4 = $conn->query($sql4);
            
                            if($result4->num_rows > 0) 
                            {
                                while($row4 = $result4->fetch_assoc())
                                {                     
                                    $Exp_year = $row4["TotalExp_Year"];
                                    $Exp_month = $row4["TotalExp_Month"];
                                    $Salary = $row4["Salary"];
                                }
                                
                                $output["TotalExp_Year"] = $Exp_year;
                                $output["TotalExp_Month"] = $Exp_month;
                                $output["Salary"] = $Salary;
                            }
                            else
                            {
                                //echo $conn->error();
                                $data = false;
                                $msg ='No data';
                                $respone = array('data'=>$data,'msg'=>$msg);
                                echo json_encode($respone);
                            }
                        }
                        /// to generate random code ofr username
                    $seed = str_split('ABCDEFGHIJKLMNOPQRSTUVWXYZ'); // and any other characters
                    shuffle($seed); // probably optional since array_is randomized; this may be redundant
                    $rand = '';
                    foreach (array_rand($seed, 4) as $k) $rand .= $seed[$k];
                    $output["UserEncodedName"] = $rand;
                                    
                    $respone[] = $output;
                    }
                    echo json_encode($respone);
            }
            else
            {
                $data = false;
                $msg ='No data';
                $respone = array('data'=>$data,'msg'=>$msg);
                echo json_encode($respone);
            }
        

?>