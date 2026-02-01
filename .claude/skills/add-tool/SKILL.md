---
name: add-tool
description: Research and add a new tool to the directory
allowed-tools:
  - WebSearch
  - WebFetch
  - Write
  - Read
  - Glob
  - Bash
---

# Add Tool to Directory

## Purpose
Research a tool and create a properly formatted markdown entry in `/content/tools/`.

## Input
The user provides a tool name or URL.

## Process

1. **Research the tool**
   - Visit the tool's website with WebFetch
   - Find: official name, URL, pricing, key features, target audience
   - Search for reviews or comparisons to understand pros/cons

2. **Determine category**
   Read `/content/categories/` to find the best fit. Categories include:
   - hosting
   - payments
   - email
   - analytics
   - support
   - marketing
   - design
   - productivity
   - legal
   - ai-assistants

3. **Check for duplicates**
   ```bash
   ls content/tools/ | grep -i [toolname]
   ```
   If tool already exists, update it instead of creating duplicate.

4. **Create the entry**
   Write to `/content/tools/[slug].md`:
   ```yaml
   ---
   name: "Exact Tool Name"
   slug: "tool-name-lowercase"
   category: "category-slug"
   website: "https://official-url.com"
   pricing: "Concise pricing summary"
   featured: false
   featuredUntil: null
   description: "One sentence explaining what it does"
   pros:
     - "Specific benefit 1"
     - "Specific benefit 2"
     - "Specific benefit 3"
   cons:
     - "Honest limitation 1"
     - "Honest limitation 2"
   alternatives:
     - "similar-tool-slug"
   lastVerified: "YYYY-MM-DD"
   ---

   2-3 paragraph description of the tool. What it does, who it's for,
   what makes it notable. Factual, not promotional.
   ```

5. **Verify the entry**
   - Read back the file to confirm valid YAML
   - Ensure website URL is accessible

## Rules
- Keep descriptions factual — no marketing hype
- Always include at least 2 pros and 1 con (nothing is perfect)
- Pricing must be current and accurate
- lastVerified is today's date
- Slug must be lowercase, hyphens only, no special characters
- If a tool has an affiliate program, note it but don't let it bias the description
