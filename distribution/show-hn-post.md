# Show HN Post — Ready to Paste

**Title:** Show HN: Public JSON API + MCP server for 140 solo founder tools (free)

**URL:** https://founderstoolkit.org/api/tools.json

**Body (paste as first comment):**

I built a curated database of 140+ software tools for solo founders and exposed it as both a public JSON API and an MCP server.

**API:**
- All tools: https://founderstoolkit.org/api/tools.json
- Categories: https://founderstoolkit.org/api/categories.json

Each tool has: name, category, pricing, description, pros, cons, and alternatives. All human-verified, no AI-generated fluff.

**MCP server** (for Claude, etc.):
```json
{
  "mcpServers": {
    "founderstoolkit": {
      "command": "npx",
      "args": ["-y", "founderstoolkit-mcp"]
    }
  }
}
```

5 tools: search_tools, get_tool, compare_tools, recommend_stack, list_categories.

Ask your AI "what's the best payment processor for a solo founder?" and it pulls from real, structured data instead of hallucinating.

15 categories: AI Coding, Hosting, Payments, Email, Analytics, Auth, Databases, Design, and more.

The directory itself: https://founderstoolkit.org

Everything is free, MIT licensed, CORS enabled. Build whatever you want on top of it.

---

# MCP Directory Submissions

## For mcp.so submission:

**Name:** founderstoolkit-mcp
**Description:** Query 140+ curated solo founder tools with honest pros, cons, pricing, and alternatives. Search by category, compare tools side-by-side, or get full stack recommendations.
**GitHub:** https://github.com/ghabbour/founderstoolkit/tree/main/mcp-server
**Website:** https://founderstoolkit.org
**Install:** `npx founderstoolkit-mcp`

## For Glama.ai submission:

**Name:** founderstoolkit
**Description:** MCP server exposing 140+ curated software tools for solopreneurs — search, compare, and get stack recommendations with honest pros/cons and real pricing data.
**Repository:** https://github.com/ghabbour/founderstoolkit
**Tags:** tools, saas, startups, solo-founder, directory
