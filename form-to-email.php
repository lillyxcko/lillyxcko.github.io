<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "ERROR; you need to submit the form!";
}
$fullname = $_POST['fullname'];
$email = $_POST['email'];
$message = $_POST['message'];

//Validate first
if(empty($fullname)||empty($email)) 
{
    echo "Name and email are mandatory!";
    exit;
}

if(IsInjected($email))
{
    echo "Email address not valid!";
    exit;
}

$email_from = $_POST['email'];//<== update the email address
$email_subject = "New Form submission";
$email_body = "You have received a new message from the user: ".$fullname."\n".
    "Here is the message:\n$message";
    
$to = "lillyxcko@gmail.com";//<== update the email address
$headers = "From: ".$fullname. "\r\n";
$headers .= "Reply-To: ".$email. "\r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: thank-you.html');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 