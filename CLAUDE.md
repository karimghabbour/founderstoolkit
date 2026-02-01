# CLAUDE.md

## Project Overview
Solo Founder Tools Directory — a curated directory of software tools for solopreneurs and one-person businesses. Agent-operated, revenue from featured listings.

## Key Documentation
- `PROJECT-SPEC.md` — Full project specification
- `brainstorm.md` — Original brainstorm and milestones
- `architecture.md` — System architecture details
- `project-status.md` — Current progress and next steps
- `CHANGELOG.md` — Version history

## Tech Stack
- **Framework**: Astro (static site generator)
- **Hosting**: Cloudflare Pages
- **Data**: Markdown/YAML files in `src/content/`
- **Search**: Pagefind (static search index)
- **Payments**: Stripe Checkout
- **Forms**: Formspree
- **Email**: Resend (for outreach)
- **Analytics**: Cloudflare Web Analytics

## Directory Structure
```
src/content/tools/       # Tool listings as .md files
src/content/categories/  # Category definitions
src/pages/               # Astro pages
src/components/          # UI components (Search, etc.)
src/layouts/             # Page layouts
src/styles/              # Global CSS
scripts/                 # Agent operation logs
public/                  # Static assets (favicon)
.claude/skills/          # Agent skills
```

## Tool Entry Format
Each tool is a markdown file in `src/content/tools/[name].md` with frontmatter:
```yaml
---
name: "Tool Name"
category: "payments"
website: "https://example.com"
pricing: "Free tier, paid from $9/mo"
featured: false
featuredUntil: null
description: "One-line description"
pros:
  - "Pro 1"
  - "Pro 2"
cons:
  - "Con 1"
alternatives:
  - "other-tool-slug"
lastVerified: "2026-01-31"
---

Longer description goes here in markdown body.
```

Note: The filename becomes the URL slug (e.g., `stripe.md` → `/tools/stripe`).

## Agent Operations
Agents are responsible for:
1. Adding new tools (create .md files in src/content/tools/)
2. Updating existing tools (edit frontmatter/content)
3. Checking links weekly (update lastVerified or flag broken)
4. Sending outreach emails via Resend API
5. Monitoring form submissions
6. Processing featured listing payments

## Agent Skills
- `/add-tool` — Research and add a new tool
- `/check-links` — Verify all tool URLs work
- `/outreach` — Send featured listing outreach emails
- `/weekly-ops` — Run all weekly maintenance

## Constraints (Always Respect)
- No database — all data in git
- No server maintenance — static site only
- Monthly costs ≤ €50
- No regulated industries (health, finance, legal)
- No human involvement for daily operations

## Git Workflow
- `main` branch is production (auto-deploys to Cloudflare)
- Agents commit directly to main for content updates
- Use descriptive commit messages: "Add tool: ToolName" or "Update: category-name tools"

## Common Commands
```bash
npm install          # Install dependencies
npm run dev          # Local development server
npm run build        # Build for production (includes Pagefind)
npm run preview      # Preview production build
```

## Important Notes
- Featured listings: Set `featured: true` and `featuredUntil: YYYY-MM-DD`
- When featuredUntil passes, agents should set `featured: false`
- Always verify tool URLs before adding (no dead links)
- Keep descriptions factual — no marketing hype or unverifiable claims
- Comparison pages auto-generate for tools in the same category
