import { getBlogData, getBlogPostBySlug } from '@/lib/data/getHomeData'
import { buildSeo } from '@/lib/seo/generateSeo';
import { generateTOCFromHTML } from '@/lib/toc';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Featured_Posts = dynamic(() => import('@/components/blog/featured-post'), { ssr: true });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  return buildSeo(post, `blog/${slug}`);
}

export default async function Single
  ({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }) {
  const { slug } = await params; // ✅ FIX
  const post = await getBlogPostBySlug(slug)
  const blog = await getBlogData()
  const content = post?.content || "";
  const { html, headings } = generateTOCFromHTML(content);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.halepathpackaging.com";
  const postUrl = `${baseUrl}/blog/${slug}`;
  const categoryEdge = post?.categories?.edges?.[0]?.node;
  const categoryName = categoryEdge?.name || "";
  const categoryUrl = categoryEdge?.slug ? `${baseUrl}/blog?category=${categoryEdge.slug}` : "";
  const wordCount = content.replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length;
  const description = post?.seo?.description || post?.excerpt?.replace(/<[^>]*>/g, "") || "";
  const imageUrl = post?.featuredImage?.node?.sourceUrl || "";
  const datePublished = post?.date ? new Date(post.date).toISOString() : "";
  const dateModified = post?.modified ? new Date(post.modified).toISOString() : datePublished;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl,
    },
    "headline": post?.title?.slice(0, 110) || "",
    "description": description.slice(0, 160),
    "image": {
      "@type": "ImageObject",
      "url": imageUrl,
      "width": 1200,
      "height": 675,
    },
    "author": {
      "@type": "Organization",
      "name": "Hale Path Packaging",
      "url": "https://www.halepathpackaging.com/",
    },
    "publisher": {
      "@id": "https://www.halepathpackaging.com/#organization",
    },
    "datePublished": datePublished,
    "dateModified": dateModified,
    "articleSection": categoryName,
    "keywords": categoryName,
    "wordCount": wordCount,
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".tldr-summary", ".faq-question", ".faq-answer"],
    },
  };

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
      ...(categoryName && categoryUrl
        ? [
            {
              "@type": "ListItem" as const,
              "position": 3,
              "name": categoryName,
              "item": categoryUrl,
            },
            {
              "@type": "ListItem" as const,
              "position": 4,
              "name": post?.title || "",
              "item": postUrl,
            },
          ]
        : [
            {
              "@type": "ListItem" as const,
              "position": 3,
              "name": post?.title || "",
              "item": postUrl,
            },
          ]),
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className='py-14'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl text-2xl font-bold text-title_Clr text-center mb-4'>
            {post?.title}
          </h1>
        </div>
        <div className='container mx-auto h-full'>
          <img src={post?.featuredImage?.node?.sourceUrl || '/placeholder.jpg'} alt={post?.title || 'featured'} width={1000} height={454} className='object-cover object-center rounded-[19px] mx-auto w-full h-full' loading="lazy" />
        </div>
      </section>
      <section className='pt-6 pb-14 single_blog'>
        <div className='container mx-auto px-4 grid md:grid-cols-4 gap-10'>

          {/* TOC */}
          {headings.length > 0 && (
            <aside className='md:col-span-1'>
              <div className='bg-[#f5f5f5] p-4 rounded-lg sticky top-20'>
                <h2 className='text-xl font-bold mb-4'>Table of Contents</h2>

                <ol className='list-decimal pl-5 space-y-3'>
                  {headings.map((item, i) => (
                    <li
                      key={i}
                      style={{ marginLeft: (item.level - 2) * 10 }}
                    >
                      <a href={`#${item.id}`} className='hover:underline'>
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          )}

          {/* CONTENT (same as PHP apply_filters output) */}
          <div
            className='md:col-span-3 desc_content my-4'
            dangerouslySetInnerHTML={{ __html: html }}
          />

        </div>
      </section>
      <Suspense fallback={null}>
        <section className='pb-14'>
          <div className='container mx-auto px-4'>
            <h2 className='md:text-[29px] md:leading-normal text-lg font-bold text-title_Clr text-center mb-4'>
              Most Popular Blog
            </h2>
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-[30px] gap-7">
              {blog?.map((item, idx) => {
                return <Featured_Posts key={idx} data={item} />;
              })}
            </div>
          </div>
        </section>
      </Suspense>
    </main>
  )
}
