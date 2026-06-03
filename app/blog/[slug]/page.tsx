import Featured_Posts from '@/components/blog/featured-post';
import { getBlogData, getBlogPostBySlug } from '@/lib/data/getHomeData'
import { buildSeo } from '@/lib/seo/generateSeo';
import { generateTOCFromHTML } from '@/lib/toc';
import Image from 'next/image';
import React from 'react'

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
  // console.log("post", post)
  return (
    <main>
      <section className='py-14'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl text-2xl font-bold text-title_Clr text-center mb-4'>
            {post?.title}
          </h1>
        </div>
        <div className='container mx-auto h-full'>
          <Image src={post?.featuredImage?.node?.sourceUrl} alt='featured' width={1000} height={454} className='object-cover object-center rounded-[19px] mx-auto w-full h-full' />
        </div>
      </section>
      <section className='pt-6 pb-14'>
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
    </main>
  )
}
