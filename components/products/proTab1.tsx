"use client";
import Link from "next/link";
import CenterSlider from "../slider/center-slider";
import Faqs from "../faqs/faqs";
type Props = {
  data: any;
};

const ProTab1 = ({ data }: Props) => {
  const infoBox1 = data.productSpecifications.productExtraInfo.infoBox;
  const infoBox2 = data.productSpecifications.productExtraInfo.infoBox2;
  const showHide = data.productSpecifications.productExtraInfo.showHide;

  console.log("data1", data);
  return (
    <>
      {showHide === "show" && (
        <>
          <section className="my-10">
            <div className="hale_container md:flex items-center gap-5 md:gap-10 flex-row-reverse">
              <figure className="md:w-1/2">
                <img
                  alt={infoBox1?.title || "Why Us Image"}
                  src={infoBox1?.image?.node?.mediaItemUrl}
                  width={800}
                  height={600}
                  className="rounded-2xl"
                  loading="lazy"
                />
              </figure>

              <div className="flex md:w-1/2 justify-center md:justify-start items-center md:items-start flex-col cat_info_box">
                <h2 className="text-[#111827] mt-5 md:mt-0 font-bold text-3xl text-center md:text-left mb-4">
                  {infoBox1.title}
                </h2>

                <div
                  className="mb-7 text-center md:text-left"
                  dangerouslySetInnerHTML={{ __html: infoBox1.description }}
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

          <section className="my-10">
            <div className="hale_container md:flex items-center gap-5 md:gap-10 flex-row">
              <figure className="md:w-1/2">
                <img
                  alt={infoBox2?.title || "Why Us Image"}
                  src={infoBox2?.image?.node?.mediaItemUrl}
                  width={800}
                  height={600}
                  className="rounded-2xl"
                  loading="lazy"
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
        </>
      )}

      {/* <ProReviews /> */}
      {/* Related Products */}

      {data.faqs.faqsSections && data.faqs.faqsSections.length > 0 && (
        <section className="bg-[#F5F5F5] ">
          <div className="container mx-auto px-3 text-center">
            <Faqs col={2} data={data.faqs} />
          </div>
        </section>
      )}
    </>
  );
};

export default ProTab1;
