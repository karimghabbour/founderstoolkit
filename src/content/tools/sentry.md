---
name: "Sentry"
category: "analytics"
website: "https://sentry.io"
pricing: "Free tier, Team from $26/mo"
featured: false
description: "Error tracking that shows you exactly what broke, for which user, and how to reproduce it"
pros:
  - "Full stack traces with user context — you see exactly what happened"
  - "Supports every major language and framework"
  - "Free tier covers 5,000 errors/month, which is plenty to start"
cons:
  - "Can be noisy — without tuning alert thresholds, you get bombarded"
  - "Pricing gets complex and expensive once you need performance monitoring"
  - "Initial setup and filtering takes time to get right"
alternatives:
  - "bugsnag"
  - "logrocket"
lastVerified: "2026-01-31"
---

Sentry catches errors in production before your users email you about them. When something breaks, you get a stack trace, the user's browser/device info, the exact request that triggered it, and breadcrumbs showing what happened before the error. It is the difference between "something is broken" and "this specific API call fails for Firefox users on line 47."

The free tier covers 5,000 errors per month. For a solo founder, that is more than enough unless something is seriously wrong. The main annoyance is noise — out of the box, Sentry will alert you about every third-party script error and browser extension conflict. Spend 30 minutes configuring filters when you set it up, and it becomes invaluable.
