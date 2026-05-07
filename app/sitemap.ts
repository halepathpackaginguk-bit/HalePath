import { MetadataRoute } from 'next';
import { fetchDynamicUrls, getStaticRoutes } from '@/lib/sitemap-generator';

export const revalidate = 3600; // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    console.log('🌐 Generating sitemap...');
    
    // Get static routes
    const staticRoutes = getStaticRoutes();
    
    // Get dynamic URLs from WordPress/WooCommerce
    const dynamicUrls = await fetchDynamicUrls();
    
    // Combine all routes
    const allRoutes = [...staticRoutes, ...dynamicUrls];
    
    // Remove duplicates based on URL
    const uniqueRoutes = Array.from(
      new Map(allRoutes.map(route => [route.url, route])).values()
    );
    
    // Format for Next.js sitemap
    const sitemapEntries = uniqueRoutes.map(route => ({
      url: route.url,
      lastModified: route.lastModified ? new Date(route.lastModified) : new Date(),
      changeFrequency: route.changeFrequency || 'weekly',
      priority: route.priority || 0.5,
    }));
    
    console.log(`✅ Sitemap generated successfully with ${sitemapEntries.length} URLs`);
    
    return sitemapEntries;
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    
    // Return at least static routes if dynamic fails
    return getStaticRoutes().map(route => ({
      url: route.url,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency || 'weekly',
      priority: route.priority || 0.5,
    }));
  }
}