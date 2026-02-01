---
name: weekly-ops
description: Run all weekly maintenance operations for the directory
allowed-tools:
  - Glob
  - Read
  - Edit
  - Write
  - WebFetch
  - WebSearch
  - Bash
  - Skill
---

# Weekly Operations

## Purpose
Perform all routine maintenance tasks to keep the directory healthy and growing. This is the main operational loop that keeps the business running autonomously.

## Schedule
Run once per week, ideally on Mondays.

## Checklist

### 1. Content Freshness
- [ ] Add 5-10 new tools using `/add-tool` skill
- [ ] Prioritize tools that fill gaps in categories with fewer entries
- [ ] Update any tools with `lastVerified` older than 30 days

### 2. Link Health
- [ ] Run `/check-links` skill on all tools
- [ ] Review any newly broken links
- [ ] Remove tools broken for 3+ consecutive weeks (after logging)

### 3. Featured Listings Maintenance
- [ ] Find tools where `featuredUntil` < today's date
- [ ] Set `featured: false` for expired listings
- [ ] Log expired listings for renewal outreach

### 4. Revenue Outreach
- [ ] Run `/outreach` skill (5-10 emails)
- [ ] Check for any responses to previous outreach (if email access available)
- [ ] Update tools that purchased featured listings

### 5. Metrics Snapshot
Capture current state:
- Total tools in directory
- Tools per category
- Featured listings count (active)
- Broken links count

## Execution Order
1. Link check first (identifies issues before adding content)
2. Content updates (add new tools)
3. Featured listing maintenance
4. Outreach (end of process)
5. Metrics summary

## Output
Update `scripts/weekly-ops-log.md`:
```markdown
# Weekly Ops Log

## Week of YYYY-MM-DD

### Actions Taken
- Tools added: X (list names)
- Tools updated: Y
- Links checked: Z total
  - Valid: A
  - Broken: B
- Featured expired: C
- Outreach emails sent: D

### Current Metrics
- Total tools: X
- Featured listings: Y
- Categories: Z

### Issues Requiring Attention
- [List any problems that couldn't be auto-resolved]

### Next Week Priorities
- [Any specific focus areas]
```

## Escalation Criteria
Notify human ONLY if:
- More than 10% of links are broken in a single check
- Stripe webhook errors detected (if monitoring available)
- Form submissions indicate urgent problems
- Revenue dropped significantly (if tracking available)
- A critical operational skill is failing repeatedly

## Autonomous Operation
This skill is designed to run without human input. If something fails:
1. Log the failure
2. Skip that step
3. Continue with remaining steps
4. Include failure in the weekly report
5. Only escalate if the issue persists for 2+ weeks
