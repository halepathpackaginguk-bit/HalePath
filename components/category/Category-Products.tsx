"use client";
import Link from "next/link";
import { useState } from "react";

const CategoriesProducts = ({ productsRes }: any) => {
  const [visibleCount, setVisibleCount] = useState(15);
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  return (
    <section className="mt-16 container mx-auto px-3">
      <div>
        <h2 className="font-extrabold text-4xl text-center">
          Explore Packaging Solutions
        </h2>
        <p className="text-center max-w-[880px] mx-auto my-4">
          Display boxes in the USA are manufactured using high-quality
          cardboard, Kraft paper, and rigid materials. Provided employing
          eco-friendly, biodegradable, and sustainable materials to meet the
          green standard
        </p>
      </div>
      <div className="hale_container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsRes?.slice(0, visibleCount).map((item: any, idx: number) => (
          <div key={idx} className="p-3">
            <Link href={`/${item?.slug}`} className="inline-flex h-fit">
              <img
                src={
                  item?.featuredImage?.node?.mediaItemUrl ||
                  "/images/product-placeholder.jpg"
                }
                alt={item?.name || "Product Image"}
                width={363}
                height={375}
                className="maskimage img-full"
                loading="lazy"
              />
            </Link>
            <h4 className="text-xl font-normal text-title_Clr text-center flex w-fit mx-auto mt-8">
              <Link href={`/${item?.slug}`}>{item?.name}</Link>
            </h4>
          </div>
        ))}
      </div>
      {visibleCount < productsRes?.length && (
        <div className="text-center mt-6">
          <button
            onClick={loadMore}
            className="bg-primary hover:bg-transparent px-5 py-2.5 text-[15px] uppercase font-medium text-white hover:text-primary rounded-full border-2 border-primary"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default CategoriesProducts;
