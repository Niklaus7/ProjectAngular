<?php


//GET Project Description

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));


$ProjectID = $data->ProjectID;

    $sql1="SELECT * FROM projectpost where ProjectPostID = $ProjectID";
    
            $result1 = $conn->query($sql1);
            
            if ($result1->num_rows > 0) 
            {
       
                while($row = $result1->fetch_assoc())
                {
                    
                    $output = $row;
                    $ProjectPostedBy = $row['ProjectPostBy'];
                    
                            $sql2 ="SELECT * from projectuploadeddocumnet where ProjectPostID = $ProjectID ";
                    
                            $result2 = $conn->query($sql2);

                            if($result2->num_rows == 0)
                            {
                                $output['ProjectDocument'] = 'No other Document ';
                            }
                            else if ($result2->num_rows > 0) 
                            {
                       
                                while($row2 = $result2->fetch_assoc())
                                {
                                        $output[]=$row2;
                                }
                            }
                            else
                            {
                                $data = false;
                                $msg ='No data';
                                $respone = array('data'=>$data,'msg'=>$msg);
                                echo json_encode($respone);
                            }
                            
                            $PostedById = $row["ProjectPostBy"];
                            $sql3="SELECT CompanyName,CompanyRegisteredAddress,CompanyURL FROM registeruserinforamtion where UserID = '$PostedById'";
                            $result3 = $conn->query($sql3);
                            while($row3=mysqli_fetch_array($result3)) 
                            {
                                $CompanyName = $row3["CompanyName"];
                                $CompanyRegisteredAddress = $row3["CompanyRegisteredAddress"];
                                $CompanyURL = $row3["CompanyURL"];
                            }
                            $output["CompanyName"] = $CompanyName;
                            $output["CompanyRegisteredAddress"] = $CompanyRegisteredAddress;
                            $output["CompanyURL"] = $CompanyURL;
                            //echo "strinmg";

                            $sql6 ="SELECT Lat,Lng,CompanyURL,CompanyLogo FROM registeruserinforamtion where UserID = $ProjectPostedBy";
                            $result6 = $conn->query($sql6);
                            if ($result6->num_rows > 0)
                            {
                                while($row6 = $result6->fetch_assoc())
                                {  
                                    $output['Lat'] = $row6['Lat'];
                                    $output['Lng'] = $row6['Lng'];
                                    $output['CompanyURL'] = $row6['CompanyURL'];
                                    $output['CompanyLogo'] = $row6['CompanyLogo'];
                                }
                            }

                            $respone[]= $output;    
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