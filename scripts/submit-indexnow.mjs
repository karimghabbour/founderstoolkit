#!/usr/bin/env node

// Submits all pages to Bing/Yandex/DuckDuckGo via IndexNow API
// Run after deploying: node scripts/submit-indexnow.mjs

import { readFileSync } from 'fs';

const KEY = 'a713a0c47241f26af0b97aa1324e47d8';
const HOST = 'founderstoolkit.org';

// Parse sitemap for URLs
const sitemap = readFileSync('dist/sitemap-0.xml', 'utf-8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);

console.log(`Found ${urls.length} URLs in sitemap`);

// IndexNow supports batch of up to 10,000 URLs
const payload = {
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList: urls,
};

console.log('Submitting to IndexNow (Bing, Yandex, DuckDuckGo)...');

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload),
});

console.log(`Response: ${res.status} ${res.statusText}`);
if (res.status === 200 || res.status === 202) {
  console.log(`Successfully submitted ${urls.length} URLs to IndexNow!`);
} else {
  const text = await res.text();
  console.log('Response body:', text);
}
