import {
  getCategoryBySlug,
  getProductsByCategory,
  getCategoriesData,
} from "@/lib/data/getProductsData";
import { buildSeo } from "@/lib/seo/generateSeo";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import CategoryCard from "@/components/category/CategoryCard";
import InfoBoxes from "@/components/category/InfoBoxes";
import { NavLinks } from "@/const/navlinks";

const CategoriesProducts = dynamic(() => import("@/components/category/Category-Products"), { ssr: true });
const FormTabs = dynamic(() => import("@/components/formTabs"), { ssr: true });
const FaqsDynamic = dynamic(() => import("@/components/faqs/faqs"), { ssr: true });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  return buildSeo(category, `category/${slug}`);
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  const catinfo = category?.categoryInfo?.categoryInfo || [];

  const navlink = NavLinks.find(
    (item: any) => item.link === `/category/${slug}`
  );
  const hasSubCategories = navlink?.submenu && navlink.submenu.length > 0;

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
        <p className="text-gray-600 mb-8">
          The requested category could not be found.
        </p>
        <Link href="/" className="text-blue-600 hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <main className="py-10 lg:py-20">
        <div className="hale_container grid items-center md:grid-cols-2 gap-4 md:gap-8 lg:gap-10 xl:gap-[70px]">
          <div className="h-full">
            <Image
              src={category?.image?.sourceUrl || "/images/placeholder.jpg"}
              alt={category?.name || "Category"}
              width={651}
              height={375}
              className="img-full rounded-[22px]"
              priority
            />
          </div>
          <div>
            <h1 className="font-bold text-3xl lg:text-5xl">{category?.name}</h1>
            <div
              className="xl:text-[19px] mt-4"
              dangerouslySetInnerHTML={{ __html: category?.description }}
            />
            <Suspense fallback={null}>
              <FormTabs productName={category?.name} productPrice={650} />
            </Suspense>
          </div>
        </div>
      </main>

      {hasSubCategories ? (
        <SubCategoriesSection
          navlink={navlink}
          slug={slug}
        />
      ) : (
        <CategoriesProductsSection slug={slug} />
      )}

      <InfoBoxes data={catinfo} />

      {category?.faqs?.faqsSections?.length > 0 && (
        <Suspense fallback={null}>
          <FaqsDynamic data={category?.faqs} col={2} />
        </Suspense>
      )}
    </>
  );
}

async function SubCategoriesSection({
  navlink,
  slug,
}: {
  navlink: any;
  slug: string;
}) {
  const allCategories = await getCategoriesData();
  const categoryMap = new Map(
    allCategories.map((cat: any) => [cat.slug, cat])
  );

  const subCategories = navlink.submenu.map((sub: any) => {
    const subSlug = sub.link.replace("/category/", "");
    const catData: any = categoryMap.get(subSlug);
    return {
      slug: subSlug,
      name: sub.name,
      link: sub.link,
      image: catData?.image || null,
    };
  });

  return (
    <section className="mt-16 container mx-auto px-3">
      <h2 className="font-extrabold text-4xl text-center">
        {navlink.name} Categories
      </h2>
      <p className="text-center max-w-[880px] mx-auto my-4">
        Explore our range of {navlink.name.toLowerCase()} solutions
      </p>
      <div className="hale_container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {subCategories.map((sub: any) => (
          <div key={sub.slug} className="p-3">
            <Link href={sub.link} className="inline-flex h-fit">
              <Image
                src={
                  sub.image?.sourceUrl ||
                  sub.image?.mediaItemUrl ||
                  "/images/placeholder.jpg"
                }
                alt={sub.name}
                width={363}
                height={375}
                className="maskimage img-full"
                loading="lazy"
              />
            </Link>
            <h4 className="text-xl font-normal text-title_Clr text-center flex w-fit mx-auto mt-8">
              <Link href={sub.link}>{sub.name}</Link>
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}

async function CategoriesProductsSection({ slug }: { slug: string }) {
  const products = await getProductsByCategory(slug);
  return <CategoriesProducts productsRes={products} />;
}
