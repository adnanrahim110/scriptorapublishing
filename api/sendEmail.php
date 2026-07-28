<?php

function load_environment(string $projectRoot): array {
  $values = [];

  foreach (['.env', '.env.local'] as $envFile) {
    $path = $projectRoot . DIRECTORY_SEPARATOR . $envFile;
    if (!is_readable($path)) continue;

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines ?: [] as $line) {
      $trimmed = trim($line);
      if ($trimmed === '' || $trimmed[0] === '#' || !str_contains($line, '=')) {
        continue;
      }

      [$key, $value] = array_map('trim', explode('=', $line, 2));
      $values[$key] = trim($value, "\"'");
    }
  }

  return $values;
}

$envMap = load_environment(dirname(__DIR__));
$env = static function (string $key, $default = null) use ($envMap) {
  $value = $envMap[$key] ?? getenv($key);
  return $value === false || $value === null || $value === '' ? $default : $value;
};

$siteUrl = rtrim((string)$env('SITE_URL', 'https://scriptorapublishing.com'), '/');
$allowedOrigins = array_values(array_filter(array_map(
  'trim',
  explode(',', (string)$env(
    'ALLOWED_ORIGINS',
    "{$siteUrl},https://www.scriptorapublishing.com,http://localhost:3000"
  ))
)));
$requestOrigin = $_SERVER['HTTP_ORIGIN'] ?? '';

if ($requestOrigin !== '' && in_array($requestOrigin, $allowedOrigins, true)) {
  header("Access-Control-Allow-Origin: {$requestOrigin}");
  header("Vary: Origin");
}

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("X-Content-Type-Options: nosniff");
header("Cache-Control: no-store");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
  http_response_code(204);
  exit();
}

if ($requestOrigin !== '' && !in_array($requestOrigin, $allowedOrigins, true)) {
  http_response_code(403);
  echo json_encode(["status" => "error", "message" => "Origin not allowed."]);
  exit();
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(405);
  echo json_encode(["status"=>"error","message"=>"Method Not Allowed. Please use POST."]);
  exit();
}

require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/templates/form_email_template.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

const ATTRIBUTION_FIELDS = [
  'attribution_model',
  'form_source',
  'lead_channel',
  'lead_source',
  'lead_medium',
  'lead_campaign',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'utm_id',
  'gclid',
  'gbraid',
  'wbraid',
  'msclkid',
  'fbclid',
  'ttclid',
  'li_fat_id',
  'first_lead_channel',
  'first_lead_source',
  'first_lead_medium',
  'first_landing_page',
  'first_referrer',
  'first_touch_at',
  'last_landing_page',
  'last_referrer',
  'last_touch_at',
  'conversion_page',
];

const ATTRIBUTION_DISPLAY_FIELDS = [
  'form_source' => 'Form Source',
  'attribution_model' => 'Attribution Model',
  'lead_channel' => 'Channel',
  'lead_source' => 'Source',
  'lead_medium' => 'Medium',
  'lead_campaign' => 'Campaign',
  'utm_term' => 'Keyword / Term',
  'utm_content' => 'Ad Content',
  'utm_id' => 'UTM ID',
  'gclid' => 'Google Click ID',
  'gbraid' => 'Google GBRAID',
  'wbraid' => 'Google WBRAID',
  'msclkid' => 'Microsoft Click ID',
  'fbclid' => 'Facebook Click ID',
  'ttclid' => 'TikTok Click ID',
  'li_fat_id' => 'LinkedIn Click ID',
  'first_landing_page' => 'First Landing Page',
  'last_landing_page' => 'Last Landing Page',
  'first_referrer' => 'First Referrer',
  'last_referrer' => 'Last Referrer',
  'conversion_page' => 'Conversion Page',
  'first_touch_at' => 'First Touch At',
  'last_touch_at' => 'Last Touch At',
];

function getUserIP(){
  $candidates = [
    $_SERVER['HTTP_CF_CONNECTING_IP'] ?? '',
    $_SERVER['HTTP_X_REAL_IP'] ?? '',
    explode(',', $_SERVER['HTTP_X_FORWARDED_FOR'] ?? '')[0] ?? '',
    $_SERVER['REMOTE_ADDR'] ?? '',
  ];

  foreach ($candidates as $candidate) {
    $candidate = trim((string)$candidate);
    if (filter_var($candidate, FILTER_VALIDATE_IP)) return $candidate;
  }

  return 'N/A';
}
function getIPInfo($ip){
  if (
    $ip === 'N/A' ||
    !filter_var(
      $ip,
      FILTER_VALIDATE_IP,
      FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE
    )
  ) {
    return [];
  }

  $context = stream_context_create([
    'http' => [
      'timeout' => 2,
      'user_agent' => 'Scriptora Lead Form/1.0',
    ],
  ]);
  $json = @file_get_contents(
    'https://ipinfo.io/' . rawurlencode($ip) . '/json',
    false,
    $context
  );
  if ($json === false) return [];
  return json_decode($json, true) ?: [];
}
function h($v){ return htmlspecialchars((string)$v, ENT_QUOTES, 'UTF-8'); }
function text_length(string $value): int {
  return function_exists('mb_strlen')
    ? mb_strlen($value, 'UTF-8')
    : strlen($value);
}
function pretty_label($key){
  $k = str_replace(['_', '-'], ' ', $key);
  $k = preg_replace('/(?<!^)([A-Z])/', ' $1', $k);
  $k = preg_replace('/\s+/', ' ', trim($k));
  return ucwords($k);
}
function clean_field_value(string $key, $value): string {
  if (is_array($value)) $value = implode(', ', $value);
  $value = trim((string)$value);
  if ($value === '') return '';
  return stripos($key, 'message') !== false ? nl2br(h($value)) : h($value);
}
function build_ordered_fields(array $post): array {
  $skip = array_merge([
    'g-recaptcha-response',
    'formName',
    'fullName',
    'firstName',
    'lastName',
    'consent',
    'website',
    'form_started_at',
  ], ATTRIBUTION_FIELDS);
  $skipLookup = array_flip(array_map(
    fn($key) => strtolower(str_replace('-', '_', $key)),
    $skip
  ));

  $normalized = [];
  foreach ($post as $k => $v) {
    $normalizedKey = strtolower(str_replace('-', '_', $k));
    if (isset($skipLookup[$normalizedKey])) continue;

    $v = clean_field_value($k, $v);
    if ($v === '') continue;
    $normalized[$k] = $v;
  }

  $preferred = ['name', 'email', 'phone', 'message'];
  $pos = array_flip(array_map('strtolower', $preferred));

  uksort($normalized, function ($a, $b) use ($pos) {
    $la = strtolower($a);
    $lb = strtolower($b);
    $pa = $pos[$la] ?? PHP_INT_MAX;
    $pb = $pos[$lb] ?? PHP_INT_MAX;
    return $pa === $pb ? strcmp($la, $lb) : ($pa <=> $pb);
  });

  $rows = [];
  foreach ($normalized as $k => $v) {
    $rows[] = ['label' => pretty_label($k), 'value' => $v];
  }
  return $rows;
}
function build_attribution_fields(array $post): array {
  $rows = [];
  $seen = [];

  $normalizedPost = [];
  foreach ($post as $key => $value) {
    $normalizedPost[strtolower(str_replace('-', '_', $key))] = $value;
  }

  $firstMatchesCurrent =
    trim((string)($normalizedPost['first_lead_channel'] ?? '')) === trim((string)($normalizedPost['lead_channel'] ?? '')) &&
    trim((string)($normalizedPost['first_lead_source'] ?? '')) === trim((string)($normalizedPost['lead_source'] ?? '')) &&
    trim((string)($normalizedPost['first_lead_medium'] ?? '')) === trim((string)($normalizedPost['lead_medium'] ?? ''));

  foreach (ATTRIBUTION_DISPLAY_FIELDS as $key => $label) {
    if (!array_key_exists($key, $normalizedPost)) continue;

    $value = clean_field_value($key, $normalizedPost[$key]);
    if ($value === '') continue;

    if ($key === 'last_landing_page') {
      $firstLanding = clean_field_value('first_landing_page', $normalizedPost['first_landing_page'] ?? '');
      if ($firstLanding !== '' && strip_tags($firstLanding) === strip_tags($value)) continue;
    }

    if ($key === 'last_referrer') {
      $firstReferrer = clean_field_value('first_referrer', $normalizedPost['first_referrer'] ?? '');
      if ($firstReferrer !== '' && strip_tags($firstReferrer) === strip_tags($value)) continue;
    }

    if ($key === 'last_touch_at') {
      $firstTouchAt = clean_field_value('first_touch_at', $normalizedPost['first_touch_at'] ?? '');
      if ($firstTouchAt !== '' && strip_tags($firstTouchAt) === strip_tags($value)) continue;
    }

    $signature = strtolower($label) . '|' . strtolower(strip_tags($value));
    if (isset($seen[$signature])) continue;

    $seen[$signature] = true;
    $rows[] = ['label' => $label, 'value' => $value];
  }

  if (!$firstMatchesCurrent) {
    foreach ([
      'first_lead_channel' => 'First Touch Channel',
      'first_lead_source' => 'First Touch Source',
      'first_lead_medium' => 'First Touch Medium',
    ] as $key => $label) {
      if (!array_key_exists($key, $normalizedPost)) continue;

      $value = clean_field_value($key, $normalizedPost[$key]);
      if ($value === '') continue;

      $signature = strtolower($label) . '|' . strtolower(strip_tags($value));
      if (isset($seen[$signature])) continue;

      $seen[$signature] = true;
      $rows[] = ['label' => $label, 'value' => $value];
    }
  }

  return $rows;
}

$honeypot = trim((string)($_POST['website'] ?? ''));
if ($honeypot !== '') {
  http_response_code(200);
  echo json_encode(["status" => "success", "message" => "Message sent successfully!"]);
  exit();
}

$name = trim((string)($_POST['name'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$phone = trim((string)($_POST['phone'] ?? ''));
$service = trim((string)($_POST['service'] ?? ''));
$message = trim((string)($_POST['message'] ?? ''));
$formName = trim((string)($_POST['formName'] ?? 'Website Contact Form'));
$phoneDigits = preg_replace('/\D+/', '', $phone);
$validationErrors = [];

if (text_length($name) < 2 || text_length($name) > 100) {
  $validationErrors['name'] = 'Enter a name between 2 and 100 characters.';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || text_length($email) > 254) {
  $validationErrors['email'] = 'Enter a valid email address.';
}
if (strlen($phoneDigits) < 7 || strlen($phoneDigits) > 15) {
  $validationErrors['phone'] = 'Enter a valid phone number with 7–15 digits.';
}
if ($service === '' || text_length($service) > 150) {
  $validationErrors['service'] = 'Choose a valid publishing service.';
}
if (text_length($message) < 20 || text_length($message) > 1200) {
  $validationErrors['message'] = 'Enter a project note between 20 and 1200 characters.';
}

if (!empty($validationErrors)) {
  http_response_code(422);
  echo json_encode([
    "status" => "error",
    "message" => "Please review the highlighted form fields.",
    "validationErrors" => $validationErrors,
  ]);
  exit();
}

$name = preg_replace('/[\r\n]+/', ' ', $name);
$formName = substr(preg_replace('/[\r\n]+/', ' ', $formName), 0, 100);
$service = substr(preg_replace('/[\r\n]+/', ' ', $service), 0, 150);

$user_ip = getUserIP();
$info = getIPInfo($user_ip);
$city = $info['city'] ?? 'N/A';
$region = $info['region'] ?? 'N/A';
$country = $info['country'] ?? 'N/A';
$org = $info['org'] ?? 'N/A';
$loc = $info['loc'] ?? 'N/A';
$referer = $_SERVER['HTTP_REFERER'] ?? 'N/A';
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'N/A';

$serviceChips = '';
if ($service !== '') {
  foreach (array_filter(array_map('trim', explode(',', $service))) as $c) {
    $serviceChips .= '<span class="chip">'.h($c).'</span>';
  }
}

$rows = build_ordered_fields($_POST);
$attributionRows = build_attribution_fields($_POST);
$dateStr = date('D, M j, Y g:i A T');

$smtpHost = $env('SMTP_HOST', 'smtp.gmail.com');
$smtpPort = (int)$env('SMTP_PORT', 465);
$smtpUser = $env('SMTP_USERNAME', '');
$smtpPass = $env('SMTP_PASSWORD', '');
$smtpSecure = $env('SMTP_SECURE', 'ssl');
$mailRecipient = $env('MAIL_TO', 'info@scriptorapublishing.com');
$mailFrom = $env('MAIL_FROM', $smtpUser);
$mailFromName = $env('MAIL_FROM_NAME', 'Scriptora Publishing');
$logoUrl = $env('LOGO_URL', "{$siteUrl}/imgs/logo-h.png");

try {
  if ($smtpUser === '' || $smtpPass === '' || $mailFrom === '') {
    throw new Exception('Mail transport is not configured.');
  }

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->isSMTP();
  $mail->Host       = $smtpHost;
  $mail->SMTPAuth   = true;
  $mail->Username   = $smtpUser;
  $mail->Password   = $smtpPass;
  $mail->Port       = $smtpPort;

  $secure = strtolower($smtpSecure);
  if ($secure === 'ssl' || $secure === 'smtps') {
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
  } elseif ($secure === 'tls') {
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  }

  $subject = "[Scriptora Lead] {$formName} — {$service}";

  $mail->setFrom($mailFrom, $mailFromName);
  $mail->addReplyTo($email, $name);
  $mail->addAddress($mailRecipient);

  $mail->Subject = $subject;
  $mail->isHTML(true);

  $html = render_form_email([
    'meta' => [
      'title'        => 'New Project Inquiry',
      'dateStr'      => $dateStr,
      'serviceChips' => $serviceChips,
      'logoUrl'      => $logoUrl,
      'formName'     => $formName,
      'siteUrl'      => $siteUrl,
    ],
    'rows' => $rows,
    'attribution' => $attributionRows,
    'sender' => [
      'ip'      => $user_ip,
      'city'    => $city,
      'region'  => $region,
      'country' => $country,
      'loc'     => $loc,
      'org'     => $org,
      'referer' => $referer,
      'userAgent' => $userAgent,
    ],
  ]);
  $mail->Body = $html;

  $alt = "New Scriptora Project Inquiry\n{$formName}\n{$dateStr}\n\n";
  foreach ($rows as $r) $alt .= $r['label'].': '.strip_tags($r['value'])."\n";
  if (!empty($attributionRows)) {
    $alt .= "\nLead Attribution\n";
    foreach ($attributionRows as $r) $alt .= $r['label'].': '.strip_tags($r['value'])."\n";
  }
  $alt .= "\nSender's Information\n";
  $alt .= "IP Address: {$user_ip}\nCity: {$city}\nRegion: {$region}\nCountry: {$country}\nLocation: {$loc}\nOrganization: {$org}\nReferrer: {$referer}\nBrowser: {$userAgent}\n";
  $mail->AltBody = $alt;

  if (!$mail->send()) throw new Exception("Mailer Error: " . $mail->ErrorInfo);

  http_response_code(200);
  echo json_encode(["status"=>"success","message"=>"Message sent successfully!"]);
  exit();

} catch (Exception $e) {
  error_log('Scriptora contact form mail error: ' . $e->getMessage());
  http_response_code(500);
  echo json_encode([
    "status" => "error",
    "message" => "We could not send your inquiry right now. Please try again shortly.",
  ]);
  exit();
}
