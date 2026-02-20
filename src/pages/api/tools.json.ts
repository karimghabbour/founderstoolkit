import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const getSlug = (id: string) => id.replace(/\.md$/, '');

export const GET: APIRoute = async () => {
  const tools = await getCollection('tools');
  const categories = await getCollection('categories');

  const categoryMap = Object.fromEntries(
    categories.map(c => [getSlug(c.id), { name: c.data.name, icon: c.data.icon }])
  );

  const data = tools.map(tool => ({
    slug: getSlug(tool.id),
    name: tool.data.name,
    category: tool.data.category,
    categoryName: categoryMap[tool.data.category]?.name || tool.data.category,
    website: tool.data.website,
    pricing: tool.data.pricing,
    description: tool.data.description,
    pros: tool.data.pros,
    cons: tool.data.cons,
    alternatives: tool.data.alternatives || [],
    url: `https://founderstoolkit.org/tools/${getSlug(tool.id)}`,
  }));

  return new Response(JSON.stringify({ tools: data, count: data.length, updated: new Date().toISOString().split('T')[0] }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
