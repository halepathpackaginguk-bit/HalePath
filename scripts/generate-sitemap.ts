import { fetchDynamicUrls, getStaticRoutes } from '../lib/sitemap-generator';
import * as fs from 'fs';
import * as path from 'path';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.halepathpackaging.com';

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case "'": return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

async function generateSitemap() {
  console.log('🚀 Starting sitemap generation...');
  
  try {
    // Get all URLs
    const staticRoutes = getStaticRoutes();
    console.log(`📄 Static routes: ${staticRoutes.length}`);
    
    const dynamicUrls = await fetchDynamicUrls();
    console.log(`📊 Dynamic URLs: ${dynamicUrls.length}`);
    
    const allUrls = [...staticRoutes, ...dynamicUrls];
    
    // Remove duplicates
    const uniqueUrls = Array.from(
      new Map(allUrls.map(item => [item.url, item])).values()
    );
    
    console.log(`✨ Total unique URLs: ${uniqueUrls.length}`);
    
    // Generate XML
    const urlsXml = uniqueUrls.map(item => {
      const lastmod = item.lastModified 
        ? `<lastmod>${new Date(item.lastModified).toISOString()}</lastmod>`
        : '';
      
      const changefreq = item.changeFrequency 
        ? `<changefreq>${item.changeFrequency}</changefreq>`
        : '';
      
      const priority = item.priority 
        ? `<priority>${item.priority}</priority>`
        : '';
      
      return `  <url>
    <loc>${escapeXml(item.url)}</loc>
    ${lastmod ? `    ${lastmod}` : ''}
    ${changefreq ? `    ${changefreq}` : ''}
    ${priority ? `    ${priority}` : ''}
  </url>`;
    }).join('\n');
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urlsXml}
</urlset>`;
    
    // Ensure public directory exists
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Write sitemap to public folder
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
    
    console.log(`✅ Sitemap generated successfully at: ${sitemapPath}`);
    console.log(`📊 Total URLs in sitemap: ${uniqueUrls.length}`);
    
    // Also generate sitemap index if you have many URLs (>50,000)
    if (uniqueUrls.length > 45000) {
      await generateSitemapIndex(uniqueUrls);
    }
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

async function generateSitemapIndex(urls: any[]) {
  const chunkSize = 45000;
  const chunks = [];
  
  for (let i = 0; i < urls.length; i += chunkSize) {
    chunks.push(urls.slice(i, i + chunkSize));
  }
  
  console.log(`📑 Creating ${chunks.length} sitemap chunks...`);
  
  // Generate individual sitemaps
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    const urlsXml = chunk.map(item => {
      const lastmod = item.lastModified 
        ? `<lastmod>${new Date(item.lastModified).toISOString()}</lastmod>`
        : '';
      
      return `  <url>
    <loc>${escapeXml(item.url)}</loc>
    ${lastmod}
  </url>`;
    }).join('\n');
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;
    
    fs.writeFileSync(path.join(process.cwd(), 'public', `sitemap-${i + 1}.xml`), sitemap);
  }
  
  // Generate sitemap index
  const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${chunks.map((_, i) => `  <sitemap>
    <loc>${SITE_URL}/sitemap-${i + 1}.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;
  
  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap-index.xml'), indexXml);
  console.log('✅ Sitemap index generated');
}

// Run the generator
generateSitemap();