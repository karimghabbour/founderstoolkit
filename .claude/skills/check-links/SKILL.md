---
name: check-links
description: Verify all tool URLs are working and flag broken ones
allowed-tools:
  - Glob
  - Read
  - Edit
  - WebFetch
  - Write
  - Bash
---

# Check Links

## Purpose
Verify all tool website URLs are still accessible. Update lastVerified dates and flag any broken links.

## Process

1. **Get all tool files**
   ```bash
   ls content/tools/*.md
   ```

2. **For each tool file:**
   - Read the file
   - Extract the `website` URL from frontmatter
   - Attempt to fetch the URL with WebFetch (simple prompt like "Is this page accessible?")
   - If successful: update `lastVerified` to today's date
   - If failed (404, timeout, error): add `broken: true` to frontmatter and log it

3. **Report results**
   Output a summary:
   - Total tools checked
   - Successfully verified (with count)
   - Broken links found (list tool names and URLs)

## Handling Broken Links
When a link is broken:
1. Add `broken: true` to the frontmatter
2. Do NOT delete the tool (might be temporary outage)
3. If same tool is broken for 2+ consecutive checks, notify for manual review

## Batch Processing
Process tools in batches of 20 to avoid rate limits. Pause briefly between batches.

## Output
Create/update `scripts/link-check-log.md` with:
```markdown
# Link Check Log

## YYYY-MM-DD
- Checked: X tools
- Valid: Y
- Broken: Z
  - tool-name-1: https://url (error type)
  - tool-name-2: https://url (error type)
```

## Recovery
If a previously broken link is now working:
1. Remove `broken: true` from frontmatter
2. Update `lastVerified` to today
3. Log the recovery
