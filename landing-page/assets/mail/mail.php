<?php
if(isset($_POST['submit'])){
    $to = "nilesh@hospitalityminds.com";



    $name = $_POST['name'];
    $email= $_POST['email'];
    $phone= $_POST['phone'];
    $subject='Contact-from';
   

    $headers = 'From: '.$email . "\r\n";


    $body = "name : ".$name. "\r\n" .
    		"Phone : ".$phone. "\r\n" .
    		"email : " . $email;
    if(mail($to, $subject, $body , $headers)){
        echo "Mail Sent!";
    }else{
         echo "Failed To Send Mail";
    }
}

?>