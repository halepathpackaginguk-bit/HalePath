import Image from "next/image";
import Link from "next/link";
import React from "react";

const MaskingImage = ({ data }: any) => {
  const link =
    data?._type === "products" ? `/${data?.slug}` : `/${data?.slug}`; 

  return (
    <div className="w-fit p-2">
      <Link href={link}>
        <img
          src={
            data?.featuredImage?.node?.mediaItemUrl || "images/category1.png"
          }
          alt="category1"
          width={363}
          height={375}
          className="maskimage img-full"
        />
      </Link>
      <Link
        href={link}
        className="text-xl font-normal text-title_Clr text-center flex w-fit mx-auto mt-8"
      >
        {data?.name || data?.title}
      </Link>
    </div>
  );
};

export default MaskingImage;
