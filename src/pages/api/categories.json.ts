import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const getSlug = (id: string) => id.replace(/\.md$/, '');

export const GET: APIRoute = async () => {
  const tools = await getCollection('tools');
  const categories = await getCollection('categories');

  const data = categories
    .sort((a, b) => a.data.order - b.data.order)
    .map(cat => {
      const slug = getSlug(cat.id);
      const catTools = tools.filter(t => t.data.category === slug);
      return {
        slug,
        name: cat.data.name,
        icon: cat.data.icon,
        description: cat.data.description,
        toolCount: catTools.length,
        tools: catTools.map(t => getSlug(t.id)),
      };
    });

  return new Response(JSON.stringify({ categories: data, count: data.length }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
