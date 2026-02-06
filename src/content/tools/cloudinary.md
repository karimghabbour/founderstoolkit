---
name: "Cloudinary"
category: "design"
website: "https://cloudinary.com"
pricing: "Free tier, from $99/mo"
featured: false
description: "Image and video API — upload, transform, optimize, and deliver media via URL parameters"
pros:
  - "Transform images on the fly via URL (resize, crop, watermark) — no server-side processing"
  - "Free tier includes 25,000 transformations and 25GB storage"
  - "Automatic format and quality optimization cuts page load times"
cons:
  - "Pricing is confusing — based on transformations, bandwidth, and storage combined"
  - "Jump from free to $99/month is steep with no middle tier"
  - "Can get expensive fast once you have significant media content"
alternatives:
  - "imgix"
  - "uploadthing"
lastVerified: "2026-01-31"
---

Cloudinary handles the annoying parts of dealing with images: uploading, storing, resizing, optimizing, and delivering them fast. Change an image from 2000x2000 to 400x400? Just change the URL parameters. Convert to WebP for smaller files? Also a URL parameter. No image processing code needed.

The free tier is generous enough for a small app. The problem is the jump: there is nothing between free and $99/month. If your app is image-heavy (a marketplace, a portfolio site, a social app), factor this cost in early. For simpler needs, you might get away with self-hosted sharp/imagemagick and a CDN.
