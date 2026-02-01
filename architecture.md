# Architecture

## System Overview
A static website built with Astro, hosted on Cloudflare Pages. All content stored as markdown files in the git repository. No database, no server.

## Data Flow
```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  Tool Markdown  │────▶│   Astro Build    │────▶│ Cloudflare Pages│
│  Files (.md)    │     │   (Static HTML)  │     │   (CDN hosted)  │
└─────────────────┘     └──────────────────┘     └─────────────────┘
        ▲                                                 │
        │                                                 ▼
┌─────────────────┐                              ┌─────────────────┐
│  Claude Agents  │                              │    Visitors     │
│  (content mgmt) │                              │  (browse site)  │
└─────────────────┘                              └─────────────────┘
```

## Components

### Content Layer (`/content/`)
- **tools/*.md** — Individual tool listings with YAML frontmatter
- **categories/*.md** — Category definitions (name, slug, description, icon)

### Presentation Layer (`/src/`)
- **pages/** — Astro pages (index, category pages, tool pages, about, pricing)
- **components/** — Reusable UI components (ToolCard, CategoryNav, SearchBox, etc.)
- **layouts/** — Base layouts (BaseLayout, ToolLayout)
- **styles/** — Global CSS

### Static Assets (`/public/`)
- Favicon, logos, social images
- No user uploads (tools link to external images)

### Agent Scripts (`/scripts/`)
- Link checker
- Outreach email templates
- Featured listing expiry checker

## External Integrations

| Service | Purpose | Integration Method |
|---------|---------|-------------------|
| Stripe | Featured listing payments | Redirect to Stripe Checkout |
| Formspree | Contact/submission forms | Form action URL |
| Resend | Outreach emails | API calls from agents |
| Cloudflare | Hosting + Analytics | Git push triggers deploy |

## Build & Deploy
1. Push to `main` branch
2. Cloudflare Pages detects change
3. Runs `npm run build`
4. Deploys to global CDN
5. Site live within ~60 seconds

## Search
Pagefind generates a static search index at build time. Search runs entirely client-side with no backend.

## Security Considerations
- No user authentication (no user accounts)
- No database (no injection vectors)
- Stripe handles all payment security
- Formspree handles form spam filtering
- Environment variables stored in Cloudflare dashboard (not in repo)
