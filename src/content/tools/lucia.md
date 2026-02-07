---
name: "Lucia"
category: "auth"
website: "https://lucia-auth.com"
pricing: "Free and open source"
featured: false
featuredUntil: null
description: "Lightweight open-source auth library that gives you full control over your authentication logic"
pros:
  - "Completely free, no MAU limits, no vendor lock-in — it is just a library"
  - "Works with any database (Postgres, MySQL, SQLite, MongoDB) and any framework"
  - "Tiny footprint — no external services, your auth data stays in your own database"
cons:
  - "You build everything yourself — no pre-built login UI, no hosted dashboard"
  - "Requires solid understanding of sessions, cookies, and auth security"
  - "Maintained primarily by one developer — smaller bus factor than corporate-backed tools"
alternatives:
  - "clerk"
  - "supertokens"
  - "firebase-auth"
lastVerified: "2026-02-06"
---

Lucia is auth stripped down to its essentials. It is a TypeScript library that handles session management and gives you helpers for password hashing, OAuth, and token generation. There is no hosted service, no dashboard, no per-user pricing — just code that runs in your app, storing sessions in whatever database you already use.

This makes Lucia the opposite of Clerk or Auth0. You get maximum control and zero recurring costs, but you write more code. You need to build your own login forms, handle email verification flows, and set up OAuth callbacks yourself. For developers comfortable with auth concepts, Lucia is rewarding — your auth is simple, portable, and costs nothing at any scale. For solo founders who want auth done in an afternoon without thinking about security details, a managed service like Clerk or Firebase Auth is a safer bet.
