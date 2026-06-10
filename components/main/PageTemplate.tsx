import React from "react";
import PageBanner from "../page-banner";
import CategoriesProducts from "../category/Category-Products";
import { getProductsByCategory } from "@/lib/data/getProductsData";

const PageTemplate = async ({ data }: any) => {
  const page = data.data;
  const cat_slug = page?.allPages?.category?.nodes?.[0]?.slug || "";
  const hasCategory = !!cat_slug;

  // Only fetch products if a category exists (optional optimization)
  const products = hasCategory ? await getProductsByCategory(cat_slug) : [];

  return (
    <>
      <PageBanner page_info={page} />
      {hasCategory ? (
        // Show products (category page)
        <CategoriesProducts productsRes={products} />
      ) : (
        // Show static content (non-category page)
        <section className="py-[60px]">
          <div className="hale_container page_content">
            <div dangerouslySetInnerHTML={{ __html: page.content }} />
          </div>
        </section>
      )}
    </>
  );
};

export default PageTemplate;