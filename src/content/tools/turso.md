---
name: "Turso"
category: "databases"
website: "https://turso.tech"
pricing: "Free tier (9 GB storage, 500 databases), Scaler from $29/mo"
featured: false
featuredUntil: null
description: "SQLite at the edge — embed databases close to your users with LibSQL"
pros:
  - "SQLite simplicity with multi-region replication — sub-10ms reads from the nearest edge"
  - "Free tier includes 9 GB storage and 500 databases — generous for per-tenant architectures"
  - "Built on LibSQL (open-source fork of SQLite) — no proprietary lock-in on the data format"
cons:
  - "Write operations must go through a primary region, adding latency for writes"
  - "Ecosystem is young — fewer ORMs and tools have native Turso support compared to Postgres"
  - "Not suited for heavy relational workloads that need JOINs across large tables"
alternatives:
  - "neon"
  - "supabase"
  - "planetscale"
lastVerified: "2026-02-06"
---

Turso takes SQLite and makes it work as a cloud database. Each database is a LibSQL file replicated across edge locations, so reads happen in single-digit milliseconds from wherever your users are. The per-database model is ideal for multi-tenant apps where each user or workspace gets their own isolated database.

The free tier gives you 9 GB of storage and 500 databases, which is enough to run a real SaaS with per-tenant data. The limitation is writes — all writes route through a single primary region, so write-heavy workloads will not benefit from the edge replication. If your app is read-heavy (dashboards, content sites, analytics), Turso is fast and cheap. If you need complex relational queries or heavy write throughput, Postgres on Neon or Supabase is a better foundation.
