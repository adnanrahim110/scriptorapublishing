<?php

function render_form_email(array $data): string {
  $meta = $data['meta'] ?? [];
  $rows = $data['rows'] ?? [];
  $attribution = $data['attribution'] ?? [];
  $sender = $data['sender'] ?? [];

  $title = $meta['title'] ?? 'New Project Inquiry';
  $dateStr = $meta['dateStr'] ?? '';
  $serviceChips = $meta['serviceChips'] ?? '';
  $logoUrl = $meta['logoUrl'] ?? '';
  $formName = $meta['formName'] ?? 'Website Contact Form';
  $siteUrl = rtrim($meta['siteUrl'] ?? 'https://scriptorapublishing.com', '/');

  $escape = static fn($value) => htmlspecialchars(
    (string)$value,
    ENT_QUOTES,
    'UTF-8'
  );

  $renderRows = static function (array $items) use ($escape): string {
    $html = '';

    foreach ($items as $item) {
      $label = $escape($item['label'] ?? '');
      $value = $item['value'] ?? '';
      $html .= <<<HTML
<tr>
  <td class="label-cell">{$label}</td>
  <td class="value-cell">{$value}</td>
</tr>
HTML;
    }

    return $html;
  };

  $senderRows = [
    ['label' => 'IP Address', 'value' => $escape($sender['ip'] ?? 'N/A')],
    ['label' => 'City', 'value' => $escape($sender['city'] ?? 'N/A')],
    ['label' => 'Region', 'value' => $escape($sender['region'] ?? 'N/A')],
    ['label' => 'Country', 'value' => $escape($sender['country'] ?? 'N/A')],
    ['label' => 'Location', 'value' => $escape($sender['loc'] ?? 'N/A')],
    ['label' => 'Organization', 'value' => $escape($sender['org'] ?? 'N/A')],
  ];

  $referrer = $sender['referer'] ?? 'N/A';
  if ($referrer !== '' && $referrer !== 'N/A' && filter_var($referrer, FILTER_VALIDATE_URL)) {
    $safeReferrer = $escape($referrer);
    $senderRows[] = [
      'label' => 'Referrer Page',
      'value' => '<a href="' . $safeReferrer . '">' . $safeReferrer . '</a>',
    ];
  } else {
    $senderRows[] = ['label' => 'Referrer Page', 'value' => 'N/A'];
  }

  $senderRows[] = [
    'label' => 'Browser',
    'value' => $escape($sender['userAgent'] ?? 'N/A'),
  ];

  $safeTitle = $escape($title);
  $safeDate = $escape($dateStr);
  $safeFormName = $escape($formName);
  $safeLogoUrl = $escape($logoUrl);
  $safeSiteUrl = $escape($siteUrl);
  $submittedRows = $renderRows($rows);
  $attributionRows = $renderRows($attribution);
  $contextRows = $renderRows($senderRows);

  ob_start(); ?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <title><?= $safeTitle ?></title>
  <style>
    body,
    table,
    td,
    p,
    a {
      font-family: Arial, Helvetica, sans-serif;
    }

    body {
      margin: 0 !important;
      padding: 0 !important;
      width: 100% !important;
      background: #f5efe7;
      color: #25170f;
    }

    table {
      border-collapse: collapse;
    }

    img {
      border: 0;
      display: block;
      height: auto;
      line-height: 100%;
    }

    a {
      color: #774d2b;
      text-decoration: underline;
    }

    .email-shell {
      width: 100%;
      background: #f5efe7;
    }

    .email-container {
      width: 100%;
      max-width: 680px;
      background: #fffdf9;
      border: 1px solid #e0c2aa;
    }

    .content-pad {
      padding-left: 42px;
      padding-right: 42px;
    }

    .chip {
      display: inline-block;
      margin: 8px 8px 0 0;
      padding: 7px 11px;
      border: 1px solid #d4a988;
      border-radius: 3px;
      background: #f9f3ee;
      color: #774d2b;
      font-size: 12px;
      font-weight: 700;
      line-height: 16px;
    }

    .detail-table {
      width: 100%;
      border: 1px solid #e2d6ca;
    }

    .detail-table tr + tr td {
      border-top: 1px solid #eee5dd;
    }

    .label-cell {
      width: 32%;
      padding: 14px 16px;
      background: #faf6f1;
      color: #774d2b;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: .04em;
      line-height: 17px;
      text-transform: uppercase;
      vertical-align: top;
    }

    .value-cell {
      padding: 14px 16px;
      background: #fffdf9;
      color: #332112;
      font-size: 14px;
      line-height: 21px;
      overflow-wrap: anywhere;
      vertical-align: top;
      word-break: break-word;
    }

    @media only screen and (max-width: 620px) {
      .content-pad {
        padding-left: 22px !important;
        padding-right: 22px !important;
      }

      .label-cell,
      .value-cell {
        display: block !important;
        width: auto !important;
      }

      .label-cell {
        padding-bottom: 6px !important;
      }

      .value-cell {
        padding-top: 6px !important;
      }
    }
  </style>
</head>
<body>
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
    A new Scriptora Publishing project inquiry is ready for review.
  </div>
  <table role="presentation" class="email-shell" width="100%">
    <tr>
      <td align="center" style="padding:32px 14px;">
        <table role="presentation" class="email-container" width="680">
          <tr>
            <td style="height:5px;background:#9a6337;font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td class="content-pad" style="padding-top:30px;padding-bottom:24px;background:#f9f3ee;border-bottom:1px solid #e0c2aa;">
              <table role="presentation" width="100%">
                <tr>
                  <td style="vertical-align:middle;">
                    <?php if ($safeLogoUrl !== ''): ?>
                      <img src="<?= $safeLogoUrl ?>" width="220" alt="Scriptora Publishing" style="width:220px;max-width:100%;">
                    <?php else: ?>
                      <p style="margin:0;color:#774d2b;font-family:Georgia,serif;font-size:25px;font-weight:700;">Scriptora Publishing</p>
                    <?php endif; ?>
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <span style="display:inline-block;border:1px solid #9a6337;padding:6px 9px;color:#774d2b;font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;">Lead / New</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="content-pad" style="padding-top:38px;padding-bottom:34px;background:#110b06;">
              <p style="margin:0 0 13px;color:#d4a988;font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;"><?= $safeFormName ?></p>
              <h1 style="margin:0;color:#ffffff;font-family:Georgia,'Times New Roman',serif;font-size:35px;font-weight:400;line-height:41px;"><?= $safeTitle ?></h1>
              <?php if ($safeDate !== ''): ?>
                <p style="margin:14px 0 0;color:#d7c8ba;font-size:13px;line-height:20px;"><?= $safeDate ?></p>
              <?php endif; ?>
              <?php if ($serviceChips !== ''): ?>
                <div style="margin-top:16px;"><?= $serviceChips ?></div>
              <?php endif; ?>
            </td>
          </tr>
          <tr>
            <td class="content-pad" style="padding-top:32px;padding-bottom:10px;">
              <p style="margin:0;color:#9a6337;font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;">Inquiry / 01</p>
              <h2 style="margin:8px 0 16px;color:#25170f;font-family:Georgia,'Times New Roman',serif;font-size:23px;font-weight:400;line-height:30px;">Submitted project details</h2>
              <table role="presentation" class="detail-table" width="100%">
                <?= $submittedRows ?>
              </table>
            </td>
          </tr>
          <?php if (!empty($attribution)): ?>
            <tr>
              <td class="content-pad" style="padding-top:26px;padding-bottom:10px;">
                <p style="margin:0;color:#9a6337;font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;">Acquisition / 02</p>
                <h2 style="margin:8px 0 16px;color:#25170f;font-family:Georgia,'Times New Roman',serif;font-size:23px;font-weight:400;line-height:30px;">Lead attribution</h2>
                <table role="presentation" class="detail-table" width="100%">
                  <?= $attributionRows ?>
                </table>
              </td>
            </tr>
          <?php endif; ?>
          <tr>
            <td class="content-pad" style="padding-top:26px;padding-bottom:38px;">
              <p style="margin:0;color:#9a6337;font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;">Context / 03</p>
              <h2 style="margin:8px 0 16px;color:#25170f;font-family:Georgia,'Times New Roman',serif;font-size:23px;font-weight:400;line-height:30px;">Sender information</h2>
              <table role="presentation" class="detail-table" width="100%">
                <?= $contextRows ?>
              </table>
            </td>
          </tr>
          <tr>
            <td class="content-pad" style="padding-top:25px;padding-bottom:25px;background:#332112;border-top:1px solid #55371f;">
              <p style="margin:0 0 7px;color:#f9f3ee;font-size:13px;font-weight:700;">Scriptora Publishing</p>
              <p style="margin:0;color:#d4c3b3;font-size:11px;line-height:18px;">
                Website inquiry notification &middot;
                <a href="<?= $safeSiteUrl ?>" style="color:#e0c2aa;text-decoration:none;">scriptorapublishing.com</a>
              </p>
              <p style="margin:10px 0 0;color:#a99584;font-size:10px;line-height:16px;">&copy; <?= date('Y') ?> Scriptora Publishing. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
<?php
  return trim((string)ob_get_clean());
}
