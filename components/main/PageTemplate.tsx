import React from "react";
import PageBanner from "../page-banner";
import CategoriesProducts from "../category/Category-Products";

const PageTemplate = ({ data }: any) => {
  const page = data.data;
  const products =
    JSON.parse(
      JSON.stringify(
        page?.allPages?.category?.nodes?.[0]?.products?.nodes || []
      )
    );

  // console.log(products);
  // console.log("page", page);

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
