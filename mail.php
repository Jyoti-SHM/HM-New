<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name      = htmlspecialchars($_POST['name']);
    $hotelname = htmlspecialchars($_POST['hotelname']);
    $phone     = htmlspecialchars($_POST['phone']);

    $to = "website@hospitalityminds.com";
    $subject = "New Contact Form Submission";

    $headers  = "From: Website Form <no-reply@hospitalityminds.com>\r\n";
    $headers .= "Reply-To: no-reply@hospitalityminds.com\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $emailContent  = "Name: $name\n";
    $emailContent .= "Hotel Name: $hotelname\n";
    $emailContent .= "Phone: $phone\n";

    if (mail($to, $subject, $emailContent, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Mail failed. Please try again later.";
    }
}
?>
