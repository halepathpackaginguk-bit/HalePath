import Featured_Posts from '@/components/blog/featured-post';
import { getBlogData, getBlogPostBySlug } from '@/lib/data/getHomeData'
import { buildSeo } from '@/lib/seo/generateSeo';
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
        <div className='container mx-auto px-4'>
          <div className='desc_content my-4'
            dangerouslySetInnerHTML={{ __html: post?.content || "" }}
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
