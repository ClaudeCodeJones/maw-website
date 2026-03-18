export function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 16px;background:#0d1b2a;color:#7a8fa3;font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;white-space:nowrap;border-bottom:1px solid #1f2d3d;">${label}</td>
      <td style="padding:10px 16px;background:#162435;color:#fff;font-size:14px;border-bottom:1px solid #1f2d3d;">${value || '-'}</td>
    </tr>`
}

export function section(heading: string, rows: string) {
  return `
    <tr>
      <td colspan="2" style="padding:16px 16px 8px;background:#0a1628;color:#fd4f00;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;border-bottom:2px solid #fd4f00;">
        ${heading}
      </td>
    </tr>
    ${rows}`
}

export function buildEmailTemplate(title: string, content: string) {
  const timestamp = new Date().toLocaleString('en-NZ', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })

  return `
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
    <tr>
      <td align="center" style="padding:30px 16px;">

        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

          <!-- Orange top border -->
          <tr>
            <td height="6" style="background:#fd4f00;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Dark header -->
          <tr>
            <td style="background:#0f2235;padding:16px 20px;font-size:15px;font-weight:bold;color:#ffffff;font-family:Arial,Helvetica,sans-serif;">
              Men at Work Traffic Management
            </td>
          </tr>

          <!-- Title -->
          <tr>
            <td style="background:#ffffff;padding:24px 20px 4px 20px;font-family:Arial,Helvetica,sans-serif;font-size:20px;font-weight:bold;color:#111111;">
              ${title}
            </td>
          </tr>

          <!-- Submitted date -->
          <tr>
            <td style="background:#ffffff;padding:0 20px 20px 20px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#666666;">
              Submitted: ${timestamp}
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="background:#ffffff;padding:0 20px 24px 20px;">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#ffffff;padding:0 20px 24px 20px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#666666;">
              Sent from the Men at Work website.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
  `
}
