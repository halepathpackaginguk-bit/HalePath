import BannerPageMiddel from "@/components/banner/banner";
import CategorySlider from "@/components/category/categorySlider";
import CTASECTION from "@/components/CTA";
import Brands from "@/components/home/brands";
import Faqs from "@/components/home/faqs";
import Get_Qoute from "@/components/home/get-qoute";
import HowIt_work from "@/components/home/howit-work";
import MainSlider from "@/components/home/mainSlider";
import Packaging_Style from "@/components/home/packaging-style";
import ProductSlider from "@/components/home/productSlider";
import WhatWeDo from "@/components/home/what-we-do";
import Instagram from "@/components/instagram/instagram";
import MainContent from "@/components/main/main-content";
import SliderFull from "@/components/slider/slider-full";
import Testimonials from "@/components/testimonial/testimonials";
import WhatWeOffer from "@/components/what-we-offer/what-we-offer";
import { getHomeData, getTestimonails } from "@/lib/data/getHomeData";
import { buildSeo } from "@/lib/seo/generateSeo";
import Image from "next/image";

export async function generateMetadata() {
  return buildSeo(null, "");
}

export default async function Home() {
  const homeInfo = await getHomeData();
  const homePage = homeInfo.homePage;
  const OffsetProducts = homePage?.offsetPrintingProducts?.nodes;
  const Flexible = homePage?.flexiblePackaging?.nodes;
  const Corrugated = homePage?.corrugatedPackaging?.nodes;
  const Printadverstising = homePage?.printAdvertising?.nodes;
  const testimonialsRes = await getTestimonails();
  const WhatweDo = homeInfo?.homeInfo?.workWeDo;
  const FAQS = homeInfo?.homeInfo?.faqsSections;

  return (
    <>
      <main className={``}>
        <MainSlider />
        <MainContent />
        <CategorySlider categoriesRes={homePage.latestCategories.nodes} />
        <CTASECTION />
        {/* Off Set Printing  */}
        <ProductSlider productsRes={OffsetProducts} title="Offset Printing" link="/all-offset-printing" />
        <HowIt_work />
        <Brands />
        <BannerPageMiddel />
        {/* Corrugated Packaging  */}
        <ProductSlider productsRes={Corrugated} title="Corrugated Packaging" link="/all-corrugated-packaging" />
        <Get_Qoute />
        <WhatWeOffer />
        {/* Flexible Packaging  */}
        <Packaging_Style
          title="Flexible Packaging / Maylar bags"
          link="/all-flexible-packaging/"
          subtitle="Flexible Solutions, Unmatched Quality – Packaging That Sells Your Brand."
          data={Flexible}
        />
        <CTASECTION />
        <SliderFull />
        <section className="bg-[#EAF6F9]">
          {/* Print & Advertising  */}
          <Packaging_Style
            title="Print & Advertising & Office Supplies"
            link="/all-print-advertising/"
            subtitle="Start designing unique boxes with different styles, sizes, and choices. Custom rigid boxes or Kraft boxes for retail products and many more?We can help, Custom printing and packaging services ideas abound."
            data={Printadverstising}
          />
        </section>
        <WhatWeDo data={WhatweDo} />
        <Testimonials testimonialsRes={testimonialsRes} />
        <Faqs faqRes={FAQS} />
        <section className="px-4">
          <Image
            src="/images/cta-ban.png"
            alt="about us"
            width={1920}
            height={1080}
            className="w-full"
          />
        </section>
        <Instagram />
      </main>
    </>
  );
}
