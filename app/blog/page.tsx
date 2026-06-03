import Featured_Posts from "@/components/blog/featured-post";
import { getBlogData } from "@/lib/data/getHomeData";
import { buildSeo } from "@/lib/seo/generateSeo";

export async function generateMetadata() {
  return buildSeo(null, "blog");
}

export default async function Blog() {
  const blog = await getBlogData();
  return (
    <main>
      <section className="pt-14">
        <div className="container mx-auto px-4">
          <h2 className="md:text-[51px] md:leading-normal text-3xl font-bold text-title_Clr text-center mb-4">
            Blog
          </h2>
          <p className="text-xl font-normal text-title_Clr text-center max-w-[820px] mx-auto">
            Choose a packaging style for your custom boxes, start designing with
            us, and get your boxes with the most advanced printing techniques.
          </p>
        </div>
      </section>
      <section className="py-16">
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
