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

## Quick Start

Add to your Claude Desktop config (`claude_desktop_config.json`):

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

Or run directly from GitHub:

```json
{
  "mcpServers": {
    "founderstoolkit": {
      "command": "npx",
      "args": ["github:ghabbour/founderstoolkit/mcp-server"]
    }
  }
}
```

## Try It

Once installed, ask your AI assistant:

```
What's the best payment processor for a solo founder?
```
```
Compare Stripe vs Lemon Squeezy
```
```
Recommend a complete tech stack for a SaaS product
```
```
What are the pros and cons of Vercel?
```
```
Search for free hosting tools
```

## API

The data is also available as a public JSON API:

- **All tools:** [`https://founderstoolkit.org/api/tools.json`](https://founderstoolkit.org/api/tools.json)
- **Categories:** [`https://founderstoolkit.org/api/categories.json`](https://founderstoolkit.org/api/categories.json)

```bash
curl https://founderstoolkit.org/api/tools.json | jq '.tools[:3]'
```

## Data

All data comes from [founderstoolkit.org](https://founderstoolkit.org) — a curated directory maintained specifically for solopreneurs and one-person businesses. 140 tools across 15 categories, each with verified pricing, honest pros/cons, and relevant alternatives.

## Categories

AI & Coding, Hosting, Payments, Email, Analytics, Support, Marketing, Design, Productivity, Auth, Databases, Automation, Backend, Content, Website Builders

## License

MIT
