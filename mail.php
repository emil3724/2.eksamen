<?php
$name = $_POST['firstname'];
$email = $_POST['email'];
$message = $_POST['subject'];
$formcontent ="From $firstname \n Message:$subject";
$recipient ="marilorasch@msn.com";
$subject = "contact Form";
$mailheader="From $email \r\n";
mail($recipient, $subject, $formcontent,$mailheader or die ("Error");
echo "Thank You";
     ?>
<!---->
