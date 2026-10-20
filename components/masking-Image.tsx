import Link from "next/link";
import Image from "next/image";
import React from "react";

const MaskingImage = ({ data }: any) => {
  const link = `/${data?.slug}`;

  return (
    <div className="w-fit p-2">
      <Link href={link}>
        <Image
          src={
            data?.featuredImage?.node?.mediaItemUrl || "/images/placeholder.jpg"
          }
          alt={data?.name || "category1"}
          width={363}
          height={375}
          sizes="(max-width: 600px) 92vw, (max-width: 1024px) 33vw, 20vw"
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
