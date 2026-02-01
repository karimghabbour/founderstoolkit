# Project Specification: Solo Founder Tools Directory

## Overview & Goal
A curated directory website listing software tools for solopreneurs and one-person businesses. The site helps founders discover the right tools for their stack. Revenue comes from featured listings where tool makers pay for prominent placement.

The entire operation — content updates, outreach, monitoring — is run by Claude agents after initial setup.

## Target Users
1. **Visitors**: Solo founders, indie hackers, freelancers, creators searching for tools
2. **Customers**: SaaS companies and tool makers who pay for featured listings

## Product Requirements
- Browse tools by category (Hosting, Payments, Email, Analytics, etc.)
- Search across all tools
- Individual tool pages with: description, pricing, pros/cons, links, alternatives
- Comparison pages ("X vs Y") auto-generated from tool pairs
- Featured listings visually distinguished and prioritized
- Simple Stripe checkout for purchasing featured spots
- Contact/submission form for "add your tool" requests
- Mobile-responsive design
- Fast load times (static site)

## Engineering Requirements
- **Framework**: Astro (static site generator, content-focused, fast)
- **Hosting**: Cloudflare Pages (free tier, global CDN)
- **Data Storage**: Markdown/YAML files in git repo (no database — agents edit files directly)
- **Search**: Pagefind (static search, no backend)
- **Payments**: Stripe Checkout (redirect-based, no backend needed)
- **Forms**: Formspree free tier or Cloudflare Workers
- **Analytics**: Cloudflare Web Analytics (free) or Plausible (€9/mo)
- **Email (outreach)**: Resend (free tier: 3,000 emails/month)
- **Scheduled Tasks**: GitHub Actions for automated jobs

## Architecture Overview
```
┌─────────────────────────────────────────────────────────┐
│                    Git Repository                        │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │ /content/   │  │ /src/       │  │ /scripts/       │  │
│  │ tools/*.md  │  │ Astro pages │  │ agent workflows │  │
│  └─────────────┘  └─────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────┘
           │                              │
           ▼                              ▼
┌─────────────────┐            ┌─────────────────────────┐
│ Cloudflare Pages│            │ GitHub Actions          │
│ (static hosting)│            │ - Weekly tool refresh   │
└─────────────────┘            │ - Link checking         │
           │                   │ - Outreach scheduling   │
           ▼                   └─────────────────────────┘
┌─────────────────┐
│ External Services│
│ - Stripe        │
│ - Formspree     │
│ - Resend        │
└─────────────────┘
```

## Agent Operations (Post-Setup)
1. **Weekly content update**: Add 5-10 new tools, update existing entries
2. **Link checking**: Verify all tool URLs work, flag/remove dead ones
3. **Outreach**: Send emails to tool makers offering featured listings
4. **Monitoring**: Check traffic, revenue, form submissions
5. **Maintenance**: Respond to submission requests, handle basic inquiries

## Non-negotiable Constraints
- Monthly non-Claude costs ≤ €50
- No database or server to maintain
- All content editable via git (agents operate through file changes)
- No regulated industries (no health, finance, legal tools making claims)
- No human involvement required for daily operations

## Cost Breakdown (Target)
| Service | Cost |
|---------|------|
| Domain | €10-15/year |
| Cloudflare Pages | €0 |
| Stripe | 2.9% + €0.30 per transaction |
| Formspree | €0 (free tier) |
| Resend | €0 (free tier up to 3k emails/mo) |
| Analytics | €0 (Cloudflare) or €9/mo (Plausible) |
| **Total** | **€0-10/month** + domain |

## Success Metrics
- 100+ tools listed (V1 launch)
- 10+ featured listings within 3 months (€390+/mo revenue)
- 1,000+ monthly visitors within 2 months
- <5% broken links at any time

## Optional Future Ideas (V2+)
- User reviews
- Newsletter
- Affiliate tracking
- Stack builder
