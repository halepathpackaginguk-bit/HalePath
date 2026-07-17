import React from "react";
import Banner from "./banner";
import ImageCarousel from "../image-crousel/ImageCarousel";
import ProductTabs from "./productTabs";
import CenterSlider from "../slider/center-slider";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

const ProductTemplate = ({ data }: any) => {
  const product = data.data;
  const relatedProducts = product.related?.nodes ?? [];

  

  const imageUrl =
    product?.featuredImage?.node?.mediaItemUrl || product?.image?.sourceUrl;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription?.replace(/<[^>]*>/g, "") || "",
    url: `${baseUrl}/${product.slug}`,
    ...(imageUrl && { image: imageUrl }),
    offers: {
      "@type": "Offer",
      price: "0.69",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${baseUrl}/${product.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <main>
        <Banner data={product} />
        <section className="mt-20 w-full mx-auto px-3 lg:px-0 overflow-hidden">
          <h2 className="text-2xl text-center mb-8 sm:text-3xl md:text-5xl font-bold">
            {product?.name} Gallery
          </h2>
          <ImageCarousel
            data={product?.productSpecifications?.productGallery}
          />
        </section>
        <ProductTabs prodata={product} />
        <section className="mt-20">
          <div className="container mx-auto px-4">
            <span className="md:text-[51px] md:leading-normal text-3xl font-bold text-title_Clr text-center mb-4">
              Related Products
            </span>
          </div>
          <CenterSlider data={relatedProducts} />
        </section>
      </main>

      {/* <div className="flex flex-col md:flex-row gap-8">  
    
        <div className="md:w-1/2">
          {product.image?.sourceUrl && (
            <div className="aspect-square relative">
              <Image
                src={product.image.sourceUrl}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
      </div> */}
    </>
  );
};

export default ProductTemplate;
