<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = $_POST['username'] ?? '';
    $location = $_POST['location'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $email = $_POST['email'] ?? '';
    $position = $_POST['position'] ?? '';

    // Set the recipient email address
    $to = "hr@hospitalityminds.com";

    // Set the email subject
    $subject = "Career Form Submission";

    // Set the email headers
    $headers = "From: $name <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";

    // Build the email content
    $emailContent = "Name: $name\n";
    $emailContent .= "Location: $location\n";
    $emailContent .= "Phone: $phone\n";
    $emailContent .= "Email: $email\n";
    $emailContent .= "Position: $position\n";

    // Check if a file is uploaded
    if (isset($_FILES['resume']) && $_FILES['resume']['error'] === UPLOAD_ERR_OK) {
        $file = $_FILES['resume']['tmp_name'];
        $fileName = $_FILES['resume']['name'];

        // Read the file content
        $fileContent = file_get_contents($file);

        // Encode the file content in base64 format
        $fileContentEncoded = base64_encode($fileContent);

        // Add the file as an attachment
        $attachment = chunk_split($fileContentEncoded);
        $boundary = md5(time());

        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary=" . $boundary . "\r\n";

        $emailContent = "--" . $boundary . "\r\n";
        $emailContent .= "Content-Type: text/plain; charset=ISO-8859-1\r\n";
        $emailContent .= "Content-Transfer-Encoding: 7bit\r\n";
        $emailContent .= "\r\n" . $emailContent . "\r\n";

        $emailContent .= "--" . $boundary . "\r\n";
        $emailContent .= "Content-Type: application/octet-stream; name=\"" . $fileName . "\"\r\n";
        $emailContent .= "Content-Transfer-Encoding: base64\r\n";
        $emailContent .= "Content-Disposition: attachment\r\n";
        $emailContent .= "\r\n" . $attachment . "\r\n";
        $emailContent .= "--" . $boundary . "--";
    }

    // Send the email
    $mailSent = mail($to, $subject, $emailContent, $headers);

    // Check if the email was sent successfully
    if ($mailSent) {
        echo "Thank you for your submission. We will get back to you soon!";
    } else {
        echo "Sorry, there was an error submitting your form. Please try again later.";
    }
}
?>
