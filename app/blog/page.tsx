import PageBanner from "@/components/page-banner";
import Featured_Posts from "@/components/blog/featured-post";
import { getBlogData } from "@/lib/data/getHomeData";
import { buildSeo } from "@/lib/seo/generateSeo";

export async function generateMetadata() {
  return buildSeo({
    seo: {
      title: "Blog | Hale Path Packaging",
      description: "Stay updated with the latest packaging trends, tips, and insights from the Hale Path Packaging team."
    }
  }, "blog");
}

export default async function Blog() {
  const blog = await getBlogData();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.halepathpackaging.com";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${baseUrl}/blog`,
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageBanner
        title="Blog"
        description="Stay updated with the latest packaging trends, tips, and insights from the Hale Path Packaging team."
      />
      <section className="py-16 single_blog">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-[30px] gap-7">
            {blog?.map((item: any, idx: number) => {
              return <Featured_Posts key={idx} data={item} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
