import React from "react";
import PageBanner from "../page-banner";
import CategoriesProducts from "../category/Category-Products";
import { getProductsByCategory } from "@/lib/data/getProductsData";

const PageTemplate = async ({ data }: any) => {
  const page = data.data;
  // const products =
  //   JSON.parse(
  //     JSON.stringify(
  //       page?.allPages?.category?.nodes?.[0]?.products?.nodes || []
  //     )
  //   );


  const cat_slug = page?.allPages?.category?.nodes?.[0]?.slug || "";

  const products = await getProductsByCategory(cat_slug);
  //console.log(products);

  return (
    <>
      <PageBanner page_info={page} />
      {products.length === 0 ? (
        <section className="py-[60px]">
          <div className="hale_container page_content">
            <div dangerouslySetInnerHTML={{ __html: page.content }} />
          </div>
        </section>
      ) : (
        <CategoriesProducts productsRes={products} />
      )}
    </>
  );
};

export default PageTemplate;
