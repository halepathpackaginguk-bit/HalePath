import { gql } from "@apollo/client";
import client from "./apollo-client";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.halepathpackaging.com";

interface Post {
  slug: string;
  modified: string;
}

interface Product {
  slug: string;
  modified?: string;
  date?: string;
}

interface ProductCategory {
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
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

// GraphQL query
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
       
        ... on SimpleProduct {
          date
        }
      }
    }
    productCategories(first: 1000) {
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
  productCategories: { nodes: ProductCategory[] };
  pages: { nodes: Page[] };
}

export async function fetchDynamicUrls(): Promise<SitemapUrl[]> {
  try {
    console.log("Fetching dynamic URLs from WordPress...");

    const { data, error } = await client.query<QueryResult>({
      query: GET_ALL_CONTENT,
      fetchPolicy: "no-cache",
    });

    if (error) {
      console.error("GraphQL error:", error);
      return [];
    }

    if (!data) {
      console.warn("No data returned from GraphQL");
      return [];
    }

    const urls: SitemapUrl[] = [];
    const today = new Date(); // Today's date for categories

    // Add blog posts
    if (data.posts?.nodes) {
      console.log(`Found ${data.posts.nodes.length} posts`);
      data.posts.nodes.forEach((post: Post) => {
        if (post.slug) {
          urls.push({
            url: `${SITE_URL}/blog/${post.slug}`,
            lastModified: post.modified || today,
            changeFrequency: "weekly",
            priority: 0.7,
          });
        }
      });
    }

    // Add products
    if (data.products?.nodes) {
      console.log(`Found ${data.products.nodes.length} products`);
      data.products.nodes.forEach((product: Product) => {
        if (product.slug) {
          urls.push({
            url: `${SITE_URL}/${product.slug}`,
            lastModified: product.modified || product.date || today,
            changeFrequency: "daily",
            priority: 0.8,
          });
        }
      });
    }

    // Add product categories - using today's date
    if (data.productCategories?.nodes) {
      console.log(`Found ${data.productCategories.nodes.length} product categories`);
      data.productCategories.nodes.forEach((category: ProductCategory) => {
        if (category.slug) {
          urls.push({
            url: `${SITE_URL}/category/${category.slug}`,
            lastModified: today, // Categories don't have dates, using today's date
            changeFrequency: "weekly",
            priority: 0.6,
          });
        }
      });
    }

    // Add pages
    if (data.pages?.nodes) {
      console.log(`Found ${data.pages.nodes.length} pages`);
      data.pages.nodes.forEach((page: Page) => {
        if (page.slug && page.slug !== "home") {
          urls.push({
            url: `${SITE_URL}/${page.slug}`,
            lastModified: page.modified || today,
            changeFrequency: "monthly",
            priority: 0.5,
          });
        }
      });
    }

    console.log(`✅ Total dynamic URLs generated: ${urls.length}`);
    return urls;
  } catch (error) {
    console.error("Error fetching data for sitemap:", error);
    return [];
  }
}

export function getStaticRoutes(): SitemapUrl[] {
  const today = new Date();
  
  return [
    {
      url: SITE_URL,
      lastModified: today,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about-us`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/contact-us`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/shop`,
      lastModified: today,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: today,
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];
}