---
name: outreach
description: Generate and send featured listing outreach emails
allowed-tools:
  - Glob
  - Read
  - Edit
  - Write
  - WebFetch
  - WebSearch
  - Bash
---

# Outreach for Featured Listings

## Purpose
Identify tools that would benefit from featured listings and send outreach emails offering the opportunity.

## Prerequisites
- Resend API key configured in environment
- Site is live with a real domain
- At least 50 tools in the directory

## Process

1. **Select outreach candidates**
   Find tools that:
   - Are NOT already featured (`featured: false`)
   - Have NOT been contacted in the last 30 days (check `lastOutreach` field)
   - Are commercial products (have paid tiers in pricing)

   Read tools and filter appropriately.

2. **Research contact info**
   For each candidate:
   - Visit their website
   - Look for: contact email, founder Twitter/LinkedIn, support email
   - Prefer founder/marketing emails over generic support@
   - Store in `outreachEmail` field if found

3. **Generate personalized email**
   Template (customize the bracketed parts):
   ```
   Subject: [Tool Name] is listed on [Directory Name]

   Hi,

   I run [Directory Name], a curated directory of tools for solo founders
   and indie hackers.

   [Tool Name] is already listed in our [category] section. I wanted to
   let you know we offer featured listings — your tool appears first in
   the category and gets a "Featured" badge.

   Featured listings are €39/month. If you're interested, you can
   set it up here: [checkout link]

   Either way, thanks for building a great tool.

   Best,
   [Directory Name]
   ```

4. **Send via Resend API**
   ```bash
   curl -X POST 'https://api.resend.com/emails' \
     -H "Authorization: Bearer $RESEND_API_KEY" \
     -H 'Content-Type: application/json' \
     -d '{
       "from": "hello@yourdomain.com",
       "to": "contact@tool.com",
       "subject": "Tool Name is listed on Directory Name",
       "text": "Email body here..."
     }'
   ```

5. **Record the outreach**
   Update tool's frontmatter:
   ```yaml
   lastOutreach: "YYYY-MM-DD"
   outreachEmail: "contact@example.com"
   ```

## Rules
- Maximum 10 outreach emails per day (avoid spam reputation)
- Never email the same tool twice within 30 days
- Keep emails short and respectful
- No false urgency or pressure tactics
- If no contact email found, skip and move to next tool

## Logging
Append to `scripts/outreach-log.md`:
```markdown
## YYYY-MM-DD
- Sent: X emails
- Tools contacted:
  - tool-name-1: email@example.com
  - tool-name-2: email@example.com
- Skipped (no email found): Y
- Skipped (recently contacted): Z
```

## Do Not Contact
- Tools with `doNotContact: true` in frontmatter
- Tools that have explicitly declined (add `declined: true`)
- Personal/hobby projects with no commercial presence
