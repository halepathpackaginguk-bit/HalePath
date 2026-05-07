import { gql } from "@apollo/client";
import client from "../lib/apollo-client";
import * as fs from "fs";
import * as path from "path";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.halepathpackaging.com";

// ============================================
// Type Definitions
// ============================================

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

interface StaticPage {
  slug: string;
  modified: Date;
  priority: number;
  changefreq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
}

interface SitemapEntry {
  name: string;
}

// GraphQL Query Result Types
interface PostsQueryResult {
  posts: {
    nodes: Post[];
  };
}

interface ProductsQueryResult {
  products: {
    nodes: Product[];
  };
}

interface ProductCategoriesQueryResult {
  productCategories: {
    nodes: ProductCategory[];
  };
}

interface PagesQueryResult {
  pages: {
    nodes: Page[];
  };
}

// ============================================
// Helper Functions
// ============================================

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}

function ensurePublicDirectory(): void {
  const publicDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
}

function clearOldSitemaps(): void {
  const publicDir = path.join(process.cwd(), "public");
  const oldSitemaps = fs
    .readdirSync(publicDir)
    .filter((f) => f.includes("sitemap"));
  oldSitemaps.forEach((file) => {
    if (file !== "sitemap_index.xml") {
      fs.unlinkSync(path.join(publicDir, file));
    }
  });
}

// ============================================
// GraphQL Queries
// ============================================

const GET_POSTS = gql`
  query GetPosts {
    posts(first: 1000, where: { status: PUBLISH }) {
      nodes {
        slug
        modified
      }
    }
  }
`;

const GET_PRODUCTS = gql`
  query GetProducts {
    products(first: 1000) {
      nodes {
        slug

        ... on SimpleProduct {
          date
        }
      }
    }
  }
`;

const GET_PRODUCT_CATEGORIES = gql`
  query GetProductCategories {
    productCategories(first: 1000) {
      nodes {
        slug
        name
      }
    }
  }
`;

const GET_PAGES = gql`
  query GetPages {
    pages(first: 100, where: { status: PUBLISH }) {
      nodes {
        slug
        modified
      }
    }
  }
`;

// ============================================
// Sitemap Generators
// ============================================

// Generate post sitemap
async function generatePostSitemap(): Promise<number> {
  console.log("  📝 Fetching posts...");

  try {
    const { data } = await client.query<PostsQueryResult>({
      query: GET_POSTS,
      fetchPolicy: "no-cache",
    });

    if (!data?.posts?.nodes) {
      console.log("  ⚠️ No posts found");
      return 0;
    }

    const posts: Post[] = data.posts.nodes;

    const urlsXml = posts
      .map((post: Post) => {
        const lastmod = post.modified
          ? new Date(post.modified).toISOString()
          : new Date().toISOString();
        return `  <url>
    <loc>${escapeXml(`${SITE_URL}/blog/${post.slug}`)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
      })
      .join("\n");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;

    const filePath = path.join(process.cwd(), "public", "post-sitemap.xml");
    fs.writeFileSync(filePath, sitemap);
    console.log(`  ✅ Post sitemap generated with ${posts.length} URLs`);
    return posts.length;
  } catch (error) {
    console.error("  ❌ Error generating post sitemap:", error);
    return 0;
  }
}

// Generate product sitemaps (split into multiple files if needed)
async function generateProductSitemaps(): Promise<number> {
  console.log("  📦 Fetching products...");

  try {
    const { data } = await client.query<ProductsQueryResult>({
      query: GET_PRODUCTS,
      fetchPolicy: "no-cache",
    });

    if (!data?.products?.nodes) {
      console.log("  ⚠️ No products found");
      return 0;
    }

    const products: Product[] = data.products.nodes;
    console.log(`  📊 Found ${products.length} total products`);

    const PRODUCTS_PER_SITEMAP = 1000;
    const numSitemaps = Math.ceil(products.length / PRODUCTS_PER_SITEMAP);

    let totalProducts = 0;

    for (let i = 0; i < numSitemaps; i++) {
      const start = i * PRODUCTS_PER_SITEMAP;
      const end = start + PRODUCTS_PER_SITEMAP;
      const chunk: Product[] = products.slice(start, end);

      const urlsXml = chunk
        .map((product: Product) => {
          // Use date field since that's what's available
          const lastmodDate = product.date
            ? new Date(product.date)
            : new Date();

          // Fix: Add /product/ prefix to URL
          const productUrl = `${SITE_URL}/${product.slug}`;

          return `  <url>
    <loc>${escapeXml(productUrl)}</loc>
    <lastmod>${lastmodDate.toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`;
        })
        .join("\n");

      const sitemapName: string =
        numSitemaps === 1
          ? "product-sitemap.xml"
          : `product-sitemap${i + 1}.xml`;
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;

      const filePath = path.join(process.cwd(), "public", sitemapName);
      fs.writeFileSync(filePath, sitemap);
      console.log(
        `  ✅ Product sitemap ${i + 1} generated with ${chunk.length} URLs (${sitemapName})`,
      );
      totalProducts += chunk.length;
    }

    return totalProducts;
  } catch (error) {
    console.error("  ❌ Error generating product sitemaps:", error);
    return 0;
  }
}
// Generate product category sitemap
async function generateProductCategorySitemap(): Promise<number> {
  console.log("  🏷️ Fetching product categories...");

  try {
    const { data } = await client.query<ProductCategoriesQueryResult>({
      query: GET_PRODUCT_CATEGORIES,
      fetchPolicy: "no-cache",
    });

    if (!data?.productCategories?.nodes) {
      console.log("  ⚠️ No product categories found");
      return 0;
    }

    const categories: ProductCategory[] = data.productCategories.nodes;
    const today: string = new Date().toISOString();

    const urlsXml = categories
      .map((category: ProductCategory) => {
        return `  <url>
    <loc>${escapeXml(`${SITE_URL}/category/${category.slug}`)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`;
      })
      .join("\n");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;

    const filePath = path.join(
      process.cwd(),
      "public",
      "product_cat-sitemap.xml",
    );
    fs.writeFileSync(filePath, sitemap);
    console.log(
      `  ✅ Product category sitemap generated with ${categories.length} URLs`,
    );
    return categories.length;
  } catch (error) {
    console.error("  ❌ Error generating product category sitemap:", error);
    return 0;
  }
}

// Generate page sitemap
async function generatePageSitemap(): Promise<number> {
  console.log("  📄 Fetching pages...");

  try {
    const { data } = await client.query<PagesQueryResult>({
      query: GET_PAGES,
      fetchPolicy: "no-cache",
    });

    if (!data?.pages?.nodes) {
      console.log("  ⚠️ No pages found");
      return 0;
    }

    // Define static pages with proper typing
    const staticPages: StaticPage[] = [
      { slug: "", modified: new Date(), priority: 1.0, changefreq: "daily" },
      {
        slug: "about-us",
        modified: new Date(),
        priority: 0.5,
        changefreq: "monthly",
      },
      {
        slug: "contact-us",
        modified: new Date(),
        priority: 0.5,
        changefreq: "monthly",
      },
      {
        slug: "shop",
        modified: new Date(),
        priority: 0.9,
        changefreq: "daily",
      },
      {
        slug: "blog",
        modified: new Date(),
        priority: 0.8,
        changefreq: "daily",
      },
    ];

    // Filter out home page from dynamic pages
    const dynamicPages: Page[] = data.pages.nodes.filter(
      (page: Page) => page.slug !== "home",
    );

    // Combine static and dynamic pages
    const allPages: (StaticPage | Page)[] = [...staticPages, ...dynamicPages];

    const urlsXml = allPages
      .map((page: StaticPage | Page) => {
        const slug = "slug" in page ? page.slug : "";
        const url: string = slug === "" ? SITE_URL : `${SITE_URL}/${slug}`;

        let lastmod: string;
        let changefreq: string;
        let priority: number;

        // Check if it's a static page or dynamic page
        if ("changefreq" in page) {
          // Static page
          lastmod = page.modified.toISOString();
          changefreq = page.changefreq;
          priority = page.priority;
        } else {
          // Dynamic page
          lastmod = page.modified
            ? new Date(page.modified).toISOString()
            : new Date().toISOString();
          changefreq = "monthly";
          priority = 0.5;
        }

        return `  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
      })
      .join("\n");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;

    const filePath = path.join(process.cwd(), "public", "page-sitemap.xml");
    fs.writeFileSync(filePath, sitemap);
    console.log(`  ✅ Page sitemap generated with ${allPages.length} URLs`);
    return allPages.length;
  } catch (error) {
    console.error("  ❌ Error generating page sitemap:", error);
    return 0;
  }
}

// Generate sitemap index
async function generateSitemapIndex(): Promise<void> {
  const today: string = new Date().toISOString();
  const publicDir: string = path.join(process.cwd(), "public");

  // Check which sitemaps exist
  const sitemaps: SitemapEntry[] = [];

  if (fs.existsSync(path.join(publicDir, "post-sitemap.xml"))) {
    sitemaps.push({ name: "post-sitemap.xml" });
  }

  // Check for multiple product sitemaps
  const productSitemaps: string[] = fs
    .readdirSync(publicDir)
    .filter((f: string) => f.match(/product-sitemap\d*\.xml/));
  productSitemaps.sort().forEach((name: string) => {
    sitemaps.push({ name });
  });

  if (fs.existsSync(path.join(publicDir, "product_cat-sitemap.xml"))) {
    sitemaps.push({ name: "product_cat-sitemap.xml" });
  }

  if (fs.existsSync(path.join(publicDir, "page-sitemap.xml"))) {
    sitemaps.push({ name: "page-sitemap.xml" });
  }

  const sitemapIndexXml: string = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (sitemap: SitemapEntry) => `  <sitemap>
    <loc>${SITE_URL}/${sitemap.name}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`,
  )
  .join("\n")}
</sitemapindex>`;

  const indexPath: string = path.join(publicDir, "sitemap_index.xml");
  fs.writeFileSync(indexPath, sitemapIndexXml);
  console.log(`\n✅ Sitemap index generated with ${sitemaps.length} sitemaps`);
}

// ============================================
// Main Function
// ============================================

async function generateAllSitemaps(): Promise<void> {
  console.log("\n🚀 Starting sitemap generation...\n");
  console.log(`📍 Site URL: ${SITE_URL}`);
  console.log(`⏰ Time: ${new Date().toISOString()}\n`);

  // Ensure public directory exists
  ensurePublicDirectory();

  // Clear old sitemaps
  clearOldSitemaps();

  try {
    // Generate individual sitemaps
    const postCount: number = await generatePostSitemap();
    const productCount: number = await generateProductSitemaps();
    const categoryCount: number = await generateProductCategorySitemap();
    const pageCount: number = await generatePageSitemap();

    // Generate sitemap index
    await generateSitemapIndex();

    // Summary
    console.log("\n📊 Final Summary:");
    console.log(`   ✅ Post sitemap: ${postCount} URLs`);
    console.log(`   ✅ Product sitemap(s): ${productCount} URLs`);
    console.log(`   ✅ Category sitemap: ${categoryCount} URLs`);
    console.log(`   ✅ Page sitemap: ${pageCount} URLs`);
    console.log(
      `   📦 Total: ${postCount + productCount + categoryCount + pageCount} URLs`,
    );

    console.log("\n📁 Generated files:");
    console.log(`   📄 sitemap_index.xml (main index)`);
    if (postCount > 0) console.log(`   📄 post-sitemap.xml`);
    if (productCount > 0)
      console.log(
        `   📄 product-sitemap.xml (or product-sitemap1.xml, product-sitemap2.xml, etc.)`,
      );
    if (categoryCount > 0) console.log(`   📄 product_cat-sitemap.xml`);
    if (pageCount > 0) console.log(`   📄 page-sitemap.xml`);

    console.log("\n✅ Sitemap generation complete!");
    console.log(`🌐 Main sitemap index: ${SITE_URL}/sitemap_index.xml`);
  } catch (error) {
    console.error("\n❌ Error generating sitemaps:", error);
    process.exit(1);
  }
}

// ============================================
// Run the generator
// ============================================

generateAllSitemaps();
