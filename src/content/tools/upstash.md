---
name: "Upstash"
category: "databases"
website: "https://upstash.com"
pricing: "Free tier, usage-based from $0.20/100K commands"
featured: false
description: "Serverless Redis and Kafka — pay per request, scale to zero when idle"
pros:
  - "Free tier includes 10,000 commands/day — plenty for caching and rate limiting"
  - "True pay-per-use pricing means zero cost when your app has no traffic"
  - "Works at the edge — pairs perfectly with Vercel, Cloudflare Workers, and Netlify"
cons:
  - "Not a full Redis replacement — some commands and data types are missing"
  - "Latency is higher than self-hosted Redis for latency-critical workloads"
  - "Costs can sneak up on you if you have high-frequency operations"
alternatives:
  - "redis-cloud"
  - "momento"
lastVerified: "2026-01-31"
lastOutreach: "2026-02-07"
outreachEmail: "enes@upstash.com"
---

Upstash is Redis for the serverless world. Instead of paying $15-30/month for an always-on Redis instance, you pay per command — and when your app is idle, you pay nothing. This makes it perfect for caching, rate limiting, and session storage in serverless apps.

The free tier gives you 10,000 commands per day, which covers basic caching for most early-stage apps. The killer use case is pairing it with edge functions on Vercel or Cloudflare — Upstash has a global low-latency network designed for this. If you need full Redis compatibility or sub-millisecond latency, self-hosted Redis is still better. For everything else, Upstash saves you money and ops work.
