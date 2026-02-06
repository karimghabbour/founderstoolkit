# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added — Revenue Pivot
- `affiliateUrl` optional field in tool schema for affiliate tracking links
- Affiliate link support on tool pages and comparison pages (with `rel="nofollow sponsored"`)
- Affiliate disclosure text on pages with affiliate links
- Affiliate disclosure section on About page (FTC compliance)
- "AI & Coding Tools" category with 20 tool listings (Cursor, Windsurf, Claude Code, GitHub Copilot, Lovable, Bolt.new, Replit Agent, v0, Devin, Cody, Tabnine, Cline, Aider, Continue, Base44, Tempo, Trae, Pieces, Supermaven, Codeium)
- `<head>` slot in BaseLayout for structured data injection
- JSON-LD SoftwareApplication schema on comparison pages
- Breadcrumb navigation on comparison pages
- "Choose X if..." verdict section on comparison pages
- "Last updated" date on comparison pages
- Related comparisons section (6 links to same-category pairs)
- NewsletterSignup component (section and inline variants, Beehiiv integration)
- Newsletter signup in site footer (global), homepage, and comparison pages
- Stack Builder interactive page — pick business type, swap tools, see monthly cost, share via URL
- Stack Builder link in main navigation and homepage CTA

### Changed
- Footer redesigned with dark background, newsletter signup, and updated links
- Navigation updated with Stack Builder link
- Homepage now includes newsletter section and Stack Builder CTA
- Comparison pages significantly enhanced for SEO and conversion

### Previous

### Added
- Project initialized with PSB workflow
- brainstorm.md — project goals and milestones
- PROJECT-SPEC.md — full technical specification
- CLAUDE.md — agent instructions and project memory
- architecture.md — system architecture documentation
- project-status.md — progress tracking
- .gitignore for Astro project
- .env.example with required environment variables
- Agent skills: /add-tool, /check-links, /outreach, /weekly-ops
- Astro project with Tailwind CSS
- Content collections for tools and categories
- 34 initial tool listings across 10 categories
- 10 category pages
- 46 auto-generated comparison pages
- Homepage with featured tools, categories, search
- Individual tool pages with pros/cons
- About, Submit, and Advertise pages
- Pagefind static search integration
- Stripe checkout placeholder for featured listings
- Formspree contact form placeholder

### Changed
- Moved comparison pages from V2 to V1 scope
- Confirmed directory-only approach (no secondary asset for V1)
