# Project Status

## Current Phase: Revenue Pivot — Affiliate + Organic Traffic

### Completed
- [x] Phase 1: Plan
  - [x] Brainstorm and goal definition
  - [x] PROJECT-SPEC.md created
  - [x] Decision: Directory-only (no secondary asset for V1)
  - [x] Comparison pages moved to V1 scope
- [x] Phase 2: Setup
  - [x] Git repository initialized
  - [x] .gitignore configured
  - [x] .env.example created
  - [x] CLAUDE.md created
  - [x] architecture.md created
  - [x] project-status.md created
  - [x] CHANGELOG.md created
  - [x] Project-level agent skills created (4 skills)
- [x] Phase 3: Build
  - [x] Astro project initialized with Tailwind CSS
  - [x] Content schema for tools and categories
  - [x] Core pages: home, categories, tools, comparison, about, submit, advertise
  - [x] 34 initial tool listings across 10 categories
  - [x] 46 auto-generated comparison pages
  - [x] Pagefind search integration
  - [x] Stripe checkout placeholder
  - [x] Formspree contact form placeholder
- [x] Phase 4: Revenue Pivot
  - [x] Added `affiliateUrl` field to tool schema
  - [x] Wired affiliate links on tool pages and comparison pages with rel="nofollow sponsored"
  - [x] Added "AI & Coding Tools" category (order 0 — first position)
  - [x] Created 20 AI/coding tool listings (cursor, windsurf, claude-code, etc.)
  - [x] Added `<head>` slot to BaseLayout for structured data injection
  - [x] Enhanced comparison pages: breadcrumbs, verdict section, JSON-LD schema, related comparisons, last updated date, affiliate disclosure
  - [x] Created NewsletterSignup component (section + inline variants)
  - [x] Added newsletter signup to footer (global), homepage, and comparison pages
  - [x] Built interactive Stack Builder page (5 business types, tool swapping, cost calculation, URL sharing)
  - [x] Added Stack Builder to navigation and homepage CTA
  - [x] Added affiliate disclosure section to About page (FTC compliance)

### Pre-Launch Checklist
- [ ] Purchase domain
- [ ] Create Stripe account and featured listing product
- [ ] Create Formspree form
- [ ] Create Beehiiv newsletter publication (swap PLACEHOLDER URL)
- [ ] Create Resend account for outreach
- [ ] Set up Cloudflare account and connect repo
- [ ] Add environment variables to Cloudflare
- [ ] Test deployment
- [ ] Sign up for affiliate programs (Cursor, Replit, etc.)
- [ ] Run first outreach batch

## Agent Skills Available
| Skill | Purpose |
|-------|---------|
| `/add-tool` | Research and add new tools to directory |
| `/check-links` | Verify all tool URLs are working |
| `/outreach` | Send featured listing outreach emails |
| `/weekly-ops` | Run all weekly maintenance operations |

## Site Statistics
- **Tools**: 100 listings across 11 categories
- **Categories**: AI & Coding, Hosting, Payments, Email, Analytics, Support, Marketing, Design, Productivity, Auth, Databases
- **Comparison Pages**: ~400 auto-generated (including ~190 AI category)
- **Total Pages**: ~520
- **New Pages**: Stack Builder, enhanced comparison pages

## Revenue Strategy
- **Primary**: Affiliate commissions from AI/coding tools (20-50% recurring)
- **Secondary**: Featured listings ($29/mo)
- **Tertiary**: Newsletter sponsorships (once subscriber base grows)

### Revenue Target (Revised)
- Month 1: Site live, affiliate links active, newsletter collecting subscribers
- Month 2-3: $200-500/mo from affiliate commissions + featured listings
- Month 4-6: $500-1500/mo as organic traffic grows from comparison pages

## Required Before Launch
- [ ] Domain purchased
- [ ] Stripe account created + featured listing product
- [ ] Formspree form created
- [ ] Beehiiv newsletter publication created
- [ ] Affiliate program signups completed
- [ ] Cloudflare Pages project created
- [ ] Environment variables configured
- [ ] First deployment successful
