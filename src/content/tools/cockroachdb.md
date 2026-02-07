---
name: "CockroachDB"
category: "databases"
website: "https://www.cockroachlabs.com"
pricing: "Free tier (10 GiB storage, 50M RUs), from $0 usage-based"
featured: false
featuredUntil: null
description: "Distributed SQL database that survives outages — Postgres-compatible with a generous free tier"
pros:
  - "Postgres-compatible wire protocol — use your existing Postgres drivers and ORMs"
  - "Free tier includes 10 GiB storage and 50 million request units per month"
  - "Multi-region by design — your data survives zone and region failures automatically"
cons:
  - "Higher query latency than single-region Postgres (consensus overhead on every write)"
  - "Overkill for most solo founder projects — distributed consistency adds complexity you rarely need"
  - "Some Postgres features are missing or behave differently (no full-text search, limited extensions)"
alternatives:
  - "neon"
  - "supabase"
  - "planetscale"
lastVerified: "2026-02-06"
---

CockroachDB is a distributed SQL database that speaks the Postgres wire protocol. Your existing Postgres drivers, ORMs, and queries work without changes. The key selling point is resilience — data is automatically replicated across nodes, so a zone going down does not take your database offline. The Serverless free tier gives you 10 GiB of storage and 50 million request units, which covers a moderate production workload.

For most solo founders, CockroachDB is more database than you need. The distributed architecture adds write latency (each write requires consensus across nodes), and you are paying that cost even if your app runs in a single region. Where it makes sense is if you are building something that genuinely needs multi-region availability or you want to avoid ever dealing with database failovers. For simpler use cases, Neon or Supabase give you standard Postgres with less overhead.
