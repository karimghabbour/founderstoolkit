# founderstoolkit-mcp

MCP server that gives AI agents access to 140+ curated software tools for solo founders — with honest pros, cons, pricing, and alternatives.

## Tools

| Tool | Description |
|------|-------------|
| `search_tools` | Search tools by keyword or category |
| `get_tool` | Get detailed info about a specific tool |
| `compare_tools` | Compare two tools side-by-side |
| `recommend_stack` | Get a full tool stack recommendation by business type |
| `list_categories` | List all 15 tool categories |

## Install

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

## Examples

Ask your AI assistant:
- "What's the best payment processor for a solo founder?"
- "Compare Stripe vs Lemon Squeezy"
- "Recommend a complete tech stack for a SaaS product"
- "What are the pros and cons of Vercel?"

## Data

All data comes from [founderstoolkit.org](https://founderstoolkit.org) — a curated directory maintained specifically for solopreneurs and one-person businesses. Every tool listing includes verified pricing, honest pros/cons, and relevant alternatives.

## Categories

AI & Coding, Hosting, Payments, Email, Analytics, Support, Marketing, Design, Productivity, Auth, Databases, Automation, Backend, Content, Website Builders

## License

MIT
