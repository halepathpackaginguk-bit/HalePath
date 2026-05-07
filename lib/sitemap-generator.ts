import { gql } from '@apollo/client';
import client from './apollo-client';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.halepathpackaging.com';

interface Post {
  slug: string;
  modified: string;
}

interface Product {
  slug: string;
  modified?: string;
  date?: string;
}

interface Category {
  slug: string;
  name: string;
}

interface Page {
  slug: string;
  modified: string;
}

export interface SitemapUrl {
  url: string;
  lastModified?: Date | string;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

// Fixed GraphQL query - removed the incomplete fragment
const GET_ALL_CONTENT = gql`
  query GetAllContent {
    posts(first: 1000, where: { status: PUBLISH }) {
      nodes {
        slug
        modified
      }
    }
    products(first: 1000) {
      nodes {
        slug
        modified
      }
    }
    categories(first: 500) {
      nodes {
        slug
        name
      }
    }
    pages(first: 100, where: { status: PUBLISH }) {
      nodes {
        slug
        modified
      }
    }
  }
`;

interface QueryResult {
  posts: { nodes: Post[] };
  products: { nodes: Product[] };
  categories: { nodes: Category[] };
  pages: { nodes: Page[] };
}

export async function fetchDynamicUrls(): Promise<SitemapUrl[]> {
  try {
    console.log('Fetching dynamic URLs from WordPress...');
    
    const { data, error } = await client.query<QueryResult>({ 
      query: GET_ALL_CONTENT,
      fetchPolicy: 'no-cache'
    });
    
    if (error) {
      console.error('GraphQL error:', error);
      return [];
    }
    
    if (!data) {
      console.warn('No data returned from GraphQL');
      return [];
    }
    
    const urls: SitemapUrl[] = [];
    
    // Add blog posts
    if (data.posts?.nodes) {
      console.log(`Found ${data.posts.nodes.length} posts`);
      data.posts.nodes.forEach((post: Post) => {
        if (post.slug) {
          urls.push({
            url: `${SITE_URL}/blog/${post.slug}`,
            lastModified: post.modified || new Date(),
            changeFrequency: 'weekly',
            priority: 0.7
          });
        }
      });
    }

    // Add products - fixed to use modified or date
    if (data.products?.nodes) {
      console.log(`Found ${data.products.nodes.length} products`);
      data.products.nodes.forEach((product: Product) => {
        if (product.slug) {
          urls.push({
            url: `${SITE_URL}/product/${product.slug}`,
            lastModified: product.modified || product.date || new Date(),
            changeFrequency: 'daily',
            priority: 0.8
          });
        }
      });
    }

    // Add categories
    if (data.categories?.nodes) {
      console.log(`Found ${data.categories.nodes.length} categories`);
      data.categories.nodes.forEach((category: Category) => {
        if (category.slug) {
          urls.push({
            url: `${SITE_URL}/category/${category.slug}`,
            changeFrequency: 'weekly',
            priority: 0.6
          });
        }
      });
    }

    // Add pages
    if (data.pages?.nodes) {
      console.log(`Found ${data.pages.nodes.length} pages`);
      data.pages.nodes.forEach((page: Page) => {
        if (page.slug) {
          const slug = page.slug === 'home' ? '' : page.slug;
          urls.push({
            url: `${SITE_URL}/${slug}`,
            lastModified: page.modified || new Date(),
            changeFrequency: 'monthly',
            priority: 0.5
          });
        }
      });
    }
    
    console.log(`✅ Total dynamic URLs generated: ${urls.length}`);
    return urls;
  } catch (error) {
    console.error('Error fetching data for sitemap:', error);
    return [];
  }
}

export function getStaticRoutes(): SitemapUrl[] {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${SITE_URL}/about-us`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/contact-us`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/shop`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
  ];
}