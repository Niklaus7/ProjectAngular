<?php

//get data of no of candidaate apply to particular job


include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));


$ProjectId = $data->ProjectId;

$sql1="SELECT * FROM projectapplyactivity where ProjectPostID = $ProjectId";

$result1 = $conn->query($sql1);
          
	if ($result1->num_rows > 0) 
    {
   
	        while($row = $result1->fetch_assoc())
            {

                         $output = $row;
                         $ID = $row['UserID'];
//echo $ID;
                         $sql2 ="SELECT * FROM registeruserinforamtion where UserID = $ID";
                         
                                 $result2 = $conn->query($sql2);
                                 
                                 if ($result2->num_rows > 0) 
                                 {
                            
                                     while($row2 = $result2->fetch_assoc())
                                     {
                                        $output["AuthorizedPersonName"] = $row2['AuthorizedPersonName'];
                                        $output["CompanyName"] = $row2['CompanyName'];
                                        $output["CompanyLogo"] = $row2['CompanyLogo'];
                                        $output["UserID"] = $row2['UserID'];
                                         
                                     }
                                }
                                else
                                {
                                    // $data = false;
                                    // $msg ='No data';
                                    // $respone = array('data'=>$data,'msg'=>$msg);
                                    // echo json_encode($respone);
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