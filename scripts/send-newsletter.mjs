#!/usr/bin/env node
/**
 * Newsletter Sender
 *
 * Pulls subscribers from Beehiiv (free API), sends newsletter via Resend.
 *
 * Usage:
 *   BEEHIIV_API_KEY=xxx BEEHIIV_PUB_ID=xxx RESEND_API_KEY=xxx node scripts/send-newsletter.mjs newsletters/issue-001.md
 *
 * Env vars:
 *   BEEHIIV_API_KEY    - Beehiiv API key (Settings > Integrations > API)
 *   BEEHIIV_PUB_ID     - Beehiiv publication ID (starts with "pub_")
 *   RESEND_API_KEY     - Resend API key
 *   DRY_RUN            - Set to "true" to preview without sending
 *   FROM_EMAIL         - Sender email (default: newsletter@founderstoolkit.org)
 */

import { readFileSync } from 'fs';
import { resolve } from 'path';

const BEEHIIV_API = 'https://api.beehiiv.com/v2';
const RESEND_API = 'https://api.resend.com';

const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
const BEEHIIV_PUB_ID = process.env.BEEHIIV_PUB_ID;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const DRY_RUN = process.env.DRY_RUN === 'true';
const FROM_EMAIL = process.env.FROM_EMAIL || 'Solo Founder Tools <newsletter@founderstoolkit.org>';

// --- Markdown to HTML (basic) ---
function markdownToHtml(md) {
  let html = md
    // Headers
    .replace(/^### (.+)$/gm, '<h3 style="font-size:18px;font-weight:bold;margin:24px 0 8px;">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 style="font-size:22px;font-weight:bold;margin:32px 0 12px;">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 style="font-size:28px;font-weight:bold;margin:0 0 16px;">$1</h1>')
    // Bold and italic
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#0284c7;text-decoration:underline;">$1</a>')
    // Horizontal rules
    .replace(/^---$/gm, '<hr style="border:none;border-top:1px solid #e5e7eb;margin:32px 0;">')
    // List items
    .replace(/^- (.+)$/gm, '<li style="margin:4px 0;">$1</li>')
    // Paragraphs (non-empty lines that aren't already HTML)
    .replace(/^(?!<[hluod\-]|$)(.+)$/gm, '<p style="margin:12px 0;line-height:1.6;">$1</p>');

  // Wrap consecutive <li> in <ul>
  html = html.replace(/(<li[^>]*>.*?<\/li>\n?)+/gs, (match) => {
    return '<ul style="padding-left:20px;margin:12px 0;">' + match + '</ul>';
  });

  return html;
}

// --- Wrap in email template ---
function wrapInTemplate(bodyHtml, unsubText) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1f2937;background:#ffffff;">
  <div style="text-align:center;padding:16px 0;border-bottom:1px solid #e5e7eb;margin-bottom:24px;">
    <a href="https://founderstoolkit.org" style="font-size:20px;font-weight:bold;color:#1f2937;text-decoration:none;">Solo Founder Tools</a>
  </div>
  ${bodyHtml}
  <div style="margin-top:48px;padding-top:24px;border-top:1px solid #e5e7eb;text-align:center;font-size:12px;color:#9ca3af;">
    <p>You're receiving this because you subscribed at <a href="https://founderstoolkit.org" style="color:#9ca3af;">founderstoolkit.org</a></p>
    <p>${unsubText}</p>
  </div>
</body>
</html>`;
}

// --- Beehiiv: fetch all active subscribers ---
async function fetchSubscribers() {
  const subscribers = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const url = `${BEEHIIV_API}/publications/${BEEHIIV_PUB_ID}/subscriptions?status=active&limit=100&page=${page}`;
    const res = await fetch(url, {
      headers: { 'Authorization': `Bearer ${BEEHIIV_API_KEY}` }
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Beehiiv API error (${res.status}): ${err}`);
    }

    const data = await res.json();
    if (data.data && data.data.length > 0) {
      subscribers.push(...data.data.map(s => s.email));
      page++;
    } else {
      hasMore = false;
    }

    // Safety: don't loop forever
    if (page > 100) break;
  }

  return [...new Set(subscribers)]; // deduplicate
}

// --- Resend: send email ---
async function sendEmail(to, subject, html) {
  const res = await fetch(`${RESEND_API}/emails`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [to],
      subject: subject,
      html: html
    })
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Resend error for ${to}: ${err}`);
  }

  return await res.json();
}

// --- Main ---
async function main() {
  // Validate env
  if (!BEEHIIV_API_KEY) { console.error('Missing BEEHIIV_API_KEY'); process.exit(1); }
  if (!BEEHIIV_PUB_ID) { console.error('Missing BEEHIIV_PUB_ID'); process.exit(1); }
  if (!RESEND_API_KEY) { console.error('Missing RESEND_API_KEY'); process.exit(1); }

  // Read newsletter file
  const file = process.argv[2];
  if (!file) { console.error('Usage: node scripts/send-newsletter.mjs <newsletter-file.md>'); process.exit(1); }

  const mdContent = readFileSync(resolve(file), 'utf-8');

  // Extract subject from first line (# Title) or second line (Subject line:)
  const subjectMatch = mdContent.match(/^\*\*Subject line:\*\*\s*(.+)$/m)
    || mdContent.match(/^# (.+)$/m);
  const subject = subjectMatch ? subjectMatch[1].trim() : 'Solo Founder Tools Weekly';

  // Remove the subject line and first heading from content
  const bodyMd = mdContent
    .replace(/^# .+$/m, '')
    .replace(/^\*\*Subject line:\*\*.*$/m, '')
    .trim();

  const bodyHtml = markdownToHtml(bodyMd);
  const fullHtml = wrapInTemplate(bodyHtml, 'To unsubscribe, reply to this email with "unsubscribe".');

  console.log(`\nNewsletter: "${subject}"`);
  console.log(`Mode: ${DRY_RUN ? 'DRY RUN (no emails sent)' : 'LIVE'}\n`);

  // Fetch subscribers
  console.log('Fetching subscribers from Beehiiv...');
  const subscribers = await fetchSubscribers();
  console.log(`Found ${subscribers.length} active subscriber(s)\n`);

  if (subscribers.length === 0) {
    console.log('No subscribers to send to. Done.');
    return;
  }

  if (DRY_RUN) {
    console.log('DRY RUN - Would send to:');
    subscribers.forEach(email => console.log(`  - ${email}`));
    console.log(`\nSubject: ${subject}`);
    console.log('\nPreview HTML saved to: /tmp/newsletter-preview.html');
    const { writeFileSync } = await import('fs');
    writeFileSync('/tmp/newsletter-preview.html', fullHtml);
    return;
  }

  // Send to each subscriber
  let sent = 0;
  let failed = 0;

  for (const email of subscribers) {
    try {
      await sendEmail(email, subject, fullHtml);
      sent++;
      console.log(`  ✓ ${email}`);
      // Rate limit: Resend free tier is 2/sec
      await new Promise(r => setTimeout(r, 600));
    } catch (err) {
      failed++;
      console.error(`  ✗ ${email}: ${err.message}`);
    }
  }

  console.log(`\nDone! Sent: ${sent}, Failed: ${failed}`);
}

main().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
