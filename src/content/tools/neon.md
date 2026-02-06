---
name: "Neon"
category: "databases"
website: "https://neon.tech"
pricing: "Free tier, Pro from $19/mo"
featured: false
description: "Serverless Postgres that scales to zero — you only pay when your database is actually being used"
pros:
  - "Scales to zero on the free tier — no cost when your app has no traffic"
  - "Database branching for safe schema changes and testing"
  - "Generous free tier with 0.5 GB storage and autoscaling"
cons:
  - "Cold starts on free tier add 1-2 seconds to the first query after inactivity"
  - "Newer service than established options like RDS or Supabase"
  - "Compute limits on free tier can bottleneck during traffic spikes"
alternatives:
  - "supabase"
  - "planetscale"
lastVerified: "2026-01-31"
---

Neon is Postgres that disappears when you are not using it. On the free tier, your database scales to zero during quiet periods and wakes up when a request comes in. This means a side project that gets occasional traffic costs nothing, not $39/month like PlanetScale.

The tradeoff is cold starts — that first query after a period of inactivity takes a second or two while the database wakes up. For APIs and web apps, this is usually fine. For real-time applications, it might matter. The branching feature is great for testing migrations safely. If you want Postgres without paying for idle time, Neon is the best option right now.
