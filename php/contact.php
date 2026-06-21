<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

// Load credentials from environment variables (set in your server / .env).
// Fallback values are intentionally empty — do NOT hardcode credentials here.
$smtpUser = getenv('SMTP_USER') ?: '';
$smtpPass = getenv('SMTP_PASS') ?: '';
$toEmail  = 'jacob@charladdy.com';

// -------------------------------------------------------------------------
// Helper: send a JSON response and exit.
// -------------------------------------------------------------------------
function respond(bool $ok, string $message, int $httpCode = 200): never {
    http_response_code($httpCode);
    echo json_encode(['success' => $ok, 'message' => $message]);
    exit;
}

// -------------------------------------------------------------------------
// Only accept POST requests.
// -------------------------------------------------------------------------
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(false, 'Method not allowed.', 405);
}

// -------------------------------------------------------------------------
// Parse body — support both application/json and multipart / form-encoded.
// -------------------------------------------------------------------------
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';

if (str_contains($contentType, 'application/json')) {
    $body      = json_decode(file_get_contents('php://input'), true) ?? [];
    $email     = trim($body['email']     ?? '');
    $firstname = trim($body['firstname'] ?? '');
    $lastname  = trim($body['lastname']  ?? '');
    $category  = trim($body['category']  ?? '');
    $subject   = trim($body['subject']   ?? '');
    $message   = trim($body['message']   ?? '');
} else {
    $email     = trim($_POST['email']     ?? '');
    $firstname = trim($_POST['firstname'] ?? '');
    $lastname  = trim($_POST['lastname']  ?? '');
    $category  = trim($_POST['category']  ?? '');
    $subject   = trim($_POST['subject']   ?? '');
    $message   = trim($_POST['message']   ?? '');
}

// -------------------------------------------------------------------------
// Validation
// -------------------------------------------------------------------------
$errors = [];

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'A valid email address is required.';
}
if (empty($subject)) {
    $errors[] = 'Subject is required.';
}
if (empty($message)) {
    $errors[] = 'Message is required.';
}

if (!empty($errors)) {
    respond(false, implode(' ', $errors), 422);
}

// Sanitise
$subject   = htmlspecialchars($subject,   ENT_QUOTES, 'UTF-8');
$message   = htmlspecialchars($message,   ENT_QUOTES, 'UTF-8');
$firstname = htmlspecialchars($firstname, ENT_QUOTES, 'UTF-8');
$lastname  = htmlspecialchars($lastname,  ENT_QUOTES, 'UTF-8');
$category  = htmlspecialchars($category,  ENT_QUOTES, 'UTF-8');

// -------------------------------------------------------------------------
// Send via PHPMailer + Gmail SMTP
// -------------------------------------------------------------------------
$bodyLines = [
    "Category:   {$category}",
    "First Name: {$firstname}",
    "Last Name:  {$lastname}",
    "Email:      {$email}",
    "",
    "Message:",
    $message,
];
$body = implode(PHP_EOL, $bodyLines);

try {
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUser;
    $mail->Password   = $smtpPass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    $mail->setFrom($smtpUser, 'Contact Form');
    $mail->addAddress($toEmail, 'Admin');
    $mail->addReplyTo($email);
    $mail->Subject = $subject;
    $mail->isHTML(false);
    $mail->Body    = $body;

    $mail->send();

    respond(true, "Your message has been sent! We'll be in touch soon.");
} catch (Exception $e) {
    error_log('[contact.php] Mailer error: ' . $mail->ErrorInfo);
    respond(false, 'Something went wrong sending your message. Please try again later.', 500);
}
