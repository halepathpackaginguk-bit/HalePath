import Image from "next/image";
import Link from "next/link";
import React from "react";

const InfoBoxes = ({ data }: { data: any }) => {
  const { infoBox, infoBox2 } = data;

  return (
    <div>
      {infoBox.title && (
        <section className="my-10">
          <div className="hale_container md:flex items-center gap-5 md:gap-10 flex-row-reverse">
            <figure className="md:w-1/2">
              <Image
                alt="Why Us Image"
                src={infoBox?.infoimage?.node?.mediaItemUrl}
                width={800}
                height={600}
                className="rounded-2xl"
              />
            </figure>

            <div className="flex md:w-1/2 justify-center md:justify-start items-center md:items-start flex-col cat_info_box">
              <h2 className="text-[#111827] mt-5 md:mt-0 font-bold text-3xl text-center md:text-left mb-4">
                {infoBox?.title}
              </h2>

              <div
                className="mb-7 text-center md:text-left"
                dangerouslySetInnerHTML={{ __html: infoBox.description }}
              />

              <Link
                href="/get-quote-now"
                className="py-[9px] px-[41px] text-white bg-[#1C2E42] rounded-md"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </section>
      )}
      {infoBox2.title && (
        <section className="my-10">
          <div className="hale_container md:flex items-center gap-5 md:gap-10 flex-row ">
            <figure className="md:w-1/2">
              <Image
                alt="Why Us Image"
                src={infoBox2?.infoimage?.node?.mediaItemUrl}
                width={800}
                height={600}
                className="rounded-2xl"
              />
            </figure>

            <div className="flex md:w-1/2 justify-center md:justify-start items-center md:items-start flex-col cat_info_box">
              <h2 className="text-[#111827] mt-5 md:mt-0 font-bold text-3xl text-center md:text-left mb-4">
                {infoBox2.title}
              </h2>

              <div
                className="mb-7 text-center md:text-left"
                dangerouslySetInnerHTML={{ __html: infoBox2.description }}
              />

              <Link
                href="/get-quote-now"
                className="py-[9px] px-[41px] text-white bg-[#1C2E42] rounded-md"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default InfoBoxes;
