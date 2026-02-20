#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const DATA_URL = "https://founderstoolkit.org/api/tools.json";
const CATEGORIES_URL = "https://founderstoolkit.org/api/categories.json";

let toolsCache = null;
let categoriesCache = null;

async function loadTools() {
  if (toolsCache) return toolsCache;
  const res = await fetch(DATA_URL);
  const data = await res.json();
  toolsCache = data.tools;
  return toolsCache;
}

async function loadCategories() {
  if (categoriesCache) return categoriesCache;
  const res = await fetch(CATEGORIES_URL);
  const data = await res.json();
  categoriesCache = data.categories;
  return categoriesCache;
}

const server = new McpServer({
  name: "founderstoolkit",
  version: "1.0.0",
});

// Tool 1: Search tools by keyword or category
server.tool(
  "search_tools",
  "Search solo founder tools by keyword, category, or pricing. Returns matching tools with pros, cons, and pricing.",
  {
    query: z.string().optional().describe("Keyword to search in name/description"),
    category: z.string().optional().describe("Filter by category slug (e.g. 'ai-coding', 'payments', 'hosting', 'analytics', 'auth', 'databases', 'email', 'automation', 'backend', 'content', 'design', 'marketing', 'productivity', 'support', 'website-builders')"),
    limit: z.number().optional().default(10).describe("Max results to return"),
  },
  async ({ query, category, limit }) => {
    const tools = await loadTools();
    let results = tools;

    if (category) {
      results = results.filter((t) => t.category === category);
    }
    if (query) {
      const q = query.toLowerCase();
      results = results.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.pros.some((p) => p.toLowerCase().includes(q)) ||
          t.cons.some((c) => c.toLowerCase().includes(q))
      );
    }

    results = results.slice(0, limit || 10);

    const text = results.length
      ? results
          .map(
            (t) =>
              `**${t.name}** (${t.categoryName})\n${t.description}\nPricing: ${t.pricing}\nPros: ${t.pros.join("; ")}\nCons: ${t.cons.join("; ")}\nMore: ${t.url}`
          )
          .join("\n\n---\n\n")
      : "No tools found matching your criteria.";

    return { content: [{ type: "text", text }] };
  }
);

// Tool 2: Get detailed info about a specific tool
server.tool(
  "get_tool",
  "Get detailed information about a specific tool including pros, cons, pricing, and alternatives.",
  {
    name: z.string().describe("Tool name or slug (e.g. 'stripe', 'cursor', 'vercel')"),
  },
  async ({ name }) => {
    const tools = await loadTools();
    const q = name.toLowerCase().replace(/\s+/g, "-");
    const tool = tools.find(
      (t) => t.slug === q || t.name.toLowerCase() === name.toLowerCase()
    );

    if (!tool) {
      return { content: [{ type: "text", text: `Tool "${name}" not found. Try search_tools to find it.` }] };
    }

    const alts = tool.alternatives.length
      ? tool.alternatives
          .map((slug) => {
            const alt = tools.find((t) => t.slug === slug);
            return alt ? `${alt.name} (${alt.pricing})` : slug;
          })
          .join(", ")
      : "None listed";

    const text = `# ${tool.name}

**Category:** ${tool.categoryName}
**Pricing:** ${tool.pricing}
**Website:** ${tool.website}

${tool.description}

**Pros:**
${tool.pros.map((p) => `- ${p}`).join("\n")}

**Cons:**
${tool.cons.map((c) => `- ${c}`).join("\n")}

**Alternatives:** ${alts}

Full review: ${tool.url}`;

    return { content: [{ type: "text", text }] };
  }
);

// Tool 3: Compare two tools
server.tool(
  "compare_tools",
  "Compare two tools side-by-side with pros, cons, and pricing differences.",
  {
    tool1: z.string().describe("First tool name or slug"),
    tool2: z.string().describe("Second tool name or slug"),
  },
  async ({ tool1, tool2 }) => {
    const tools = await loadTools();
    const find = (name) => {
      const q = name.toLowerCase().replace(/\s+/g, "-");
      return tools.find(
        (t) => t.slug === q || t.name.toLowerCase() === name.toLowerCase()
      );
    };

    const a = find(tool1);
    const b = find(tool2);

    if (!a || !b) {
      const missing = [!a && tool1, !b && tool2].filter(Boolean).join(", ");
      return { content: [{ type: "text", text: `Tool(s) not found: ${missing}` }] };
    }

    const text = `# ${a.name} vs ${b.name}

## ${a.name}
- **Pricing:** ${a.pricing}
- **Pros:** ${a.pros.join("; ")}
- **Cons:** ${a.cons.join("; ")}

## ${b.name}
- **Pricing:** ${b.pricing}
- **Pros:** ${b.pros.join("; ")}
- **Cons:** ${b.cons.join("; ")}

Full comparison: https://founderstoolkit.org/compare/${a.slug}-vs-${b.slug}`;

    return { content: [{ type: "text", text }] };
  }
);

// Tool 4: Recommend a stack for a business type
server.tool(
  "recommend_stack",
  "Recommend a complete tool stack for a solo founder based on their business type.",
  {
    business_type: z
      .enum(["saas", "creator", "ecommerce", "freelancer", "agency"])
      .describe("Type of solo business"),
  },
  async ({ business_type }) => {
    const tools = await loadTools();
    const categories = await loadCategories();

    const needs = {
      saas: ["hosting", "payments", "auth", "databases", "analytics", "email", "support"],
      creator: ["website-builders", "email", "payments", "analytics", "content", "marketing"],
      ecommerce: ["website-builders", "payments", "email", "analytics", "marketing", "support"],
      freelancer: ["website-builders", "payments", "email", "productivity", "analytics"],
      agency: ["productivity", "automation", "analytics", "email", "support", "design"],
    };

    const relevantCategories = needs[business_type] || needs.saas;

    const recommendations = relevantCategories.map((catSlug) => {
      const catTools = tools.filter((t) => t.category === catSlug);
      const cat = categories.find((c) => c.slug === catSlug);
      const top = catTools.slice(0, 3);
      return {
        category: cat?.name || catSlug,
        tools: top.map((t) => `${t.name} (${t.pricing})`),
      };
    });

    const text = `# Recommended Stack: ${business_type.charAt(0).toUpperCase() + business_type.slice(1)}

${recommendations.map((r) => `**${r.category}:** ${r.tools.join(" | ")}`).join("\n\n")}

Explore more: https://founderstoolkit.org/stack-builder`;

    return { content: [{ type: "text", text }] };
  }
);

// Tool 5: List all categories
server.tool(
  "list_categories",
  "List all tool categories with tool counts.",
  {},
  async () => {
    const categories = await loadCategories();
    const text = categories
      .map((c) => `${c.icon} **${c.name}** — ${c.toolCount} tools\n  ${c.description}`)
      .join("\n\n");

    return { content: [{ type: "text", text }] };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
