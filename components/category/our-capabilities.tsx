import Link from "next/link";
import React from "react";

const OurCapabilities = ({ data }: any) => {
  return (
    <section className="container mx-auto px-3 mt-20">
      <span className="text-[#111827] font-bold text-2xl">Our Capabilities</span>
      <div className="mt-12 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2">
        {data?.map((item: any, idx: number) => (
          <div
            key={idx}
            className="bg-[#EFEFEF] flex flex-col justify-center items-center px-1.5 py-[15px] rounded-[16px] "
          >
            <img
              src={item?.image?.asset?.url}
              alt=""
              width={48}
              height={48}
              loading="lazy"
            />
            <h6 className="text-[#111827] text-center !font-normal text-xs mt-3">
              {item?.title}
            </h6>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row text-center gap-4 mt-6">
        <Link
          href="#"
          className="py-[9px] px-[41px] text-white bg-[#1C2E42] rounded-md"
        >
          Browse Our Catalogue
        </Link>
        <Link
          href="#"
          className="py-[9px] px-[41px] text-white bg-[#1C2E42] rounded-md"
        >
          View Company Profile
        </Link>
      </div>
    </section>
  );
};

export default OurCapabilities;
