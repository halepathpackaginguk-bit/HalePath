import { MetadataRoute } from 'next';
import { fetchDynamicUrls, getStaticRoutes } from '@/lib/sitemap-generator';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.halepathpackaging.com';

  const dynamic = await fetchDynamicUrls();
  const staticRoutes = getStaticRoutes();

  const all = [...staticRoutes, ...dynamic];

  return all.map((entry) => ({
    url: entry.url,
    lastModified: entry.lastModified ? new Date(entry.lastModified) : new Date(),
    changeFrequency: entry.changeFrequency ?? 'daily',
    priority: entry.priority ?? 0.5,
  }));
}