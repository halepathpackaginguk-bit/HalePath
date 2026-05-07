import { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.halepathpackaging.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/checkout/',
        '/cart/',
        '/my-account/',
        '/wp-json/',
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}