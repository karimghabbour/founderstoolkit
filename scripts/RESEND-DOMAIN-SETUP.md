# Resend Domain Verification Setup

Before sending any outreach emails, the domain must be verified in Resend.

## Steps

1. **Go to Resend Dashboard**
   - Visit https://resend.com/domains
   - Click "Add Domain"
   - Enter: `founderstoolkit.org`

2. **Add DNS Records in Cloudflare**
   Resend will give you several DNS records to add. Go to Cloudflare → founderstoolkit.org → DNS and add each one:

   Typical records needed:
   - **SPF** (TXT record): Allows Resend to send on your behalf
   - **DKIM** (TXT records): Email authentication
   - **DMARC** (TXT record): Email policy

   Copy each record exactly as Resend shows.

3. **Verify in Resend**
   - Click "Verify" in Resend
   - May take a few minutes for DNS to propagate
   - Status should change to "Verified"

4. **Test Send**
   Once verified, test with:
   ```bash
   curl -X POST 'https://api.resend.com/emails' \
     -H "Authorization: Bearer $RESEND_API_KEY" \
     -H 'Content-Type: application/json' \
     -d '{
       "from": "Founder Toolkit <hello@founderstoolkit.org>",
       "to": "your-email@example.com",
       "subject": "Test email",
       "text": "Domain verification working!"
     }'
   ```

## After Verification

Once domain is verified, outreach emails are ready to send. First batch targets:
1. Buttondown (Justin Duke)
2. Tally (Marie Martens / Filip Minev)

Run `/outreach` to execute.
