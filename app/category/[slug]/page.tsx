import {
  getCategoryBySlug,
  getProductsByCategory,
} from "@/lib/data/getProductsData";
import { buildSeo } from "@/lib/seo/generateSeo";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/products/ProductCard";
import CategoriesProducts from "@/components/category/Category-Products";
import FormTabs from "@/components/formTabs";
import Faqs from "@/components/faqs/faqs";

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
  const products = await getProductsByCategory(slug);
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
            <img
              src={category?.image?.sourceUrl || "/images/placeholder.jpg"}
              alt=""
              width={651}
              height={375}
              className="img-full rounded-[22px]"
            />
          </div>
          <div>
            <h1 className="font-bold text-3xl lg:text-5xl">{category?.name}</h1>
            <div
              className="xl:text-[19px] mt-4"
              dangerouslySetInnerHTML={{ __html: category?.description }}
            />
            <FormTabs productName={category?.name} productPrice={650} />
          </div>
        </div>
      </main>
      <CategoriesProducts productsRes={products} />
      {category?.faqs?.faqsSections?.length > 0 && (
        <Faqs data={category?.faqs} col={2} />
      )}
    </>
  );
}
