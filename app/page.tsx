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
import {
  getCategoriesData,
  getProductsByCategory,
  getProductsData,
} from "@/lib/data/getProductsData";
import Image from "next/image";
export default async function Home() {
  const homeInfo = await getHomeData();

  const homePage = homeInfo.homePage;



  



  const OffsetProducts = await getProductsByCategory("commercial-printing");
  const Flexible = await getProductsByCategory("flexible-packaging");
  const Corrugated = await getProductsByCategory("corrugated-packaging");
  const Printadverstising = await getProductsByCategory("print-advertising");
  const productsRes = await getProductsData();
  const categoriesRes = await getCategoriesData();
  const testimonialsRes = await getTestimonails();
  const WhatweDo = homeInfo?.homeInfo?.workWeDo;
  const FAQS = homeInfo?.homeInfo?.faqsSections;
   console.log("homePage", homePage);

  return (
    <>
      <main className={``}>
        <MainSlider />
        <MainContent />
        <CategorySlider categoriesRes={homePage.latestCategories.nodes} />
        <CTASECTION />
        {/* Off Set Printing  */}
        <ProductSlider productsRes={OffsetProducts} title="Offset Printing" />
        <HowIt_work />
        <Brands />
        <BannerPageMiddel />
        {/* Corrugated Packaging  */}
        <ProductSlider productsRes={Corrugated} title="Corrugated Packaging" />
        <Get_Qoute />
        <WhatWeOffer />
        {/* Flexible Packaging  */}
        <Packaging_Style
          title="Flexible Packaging / Maylar bags"
          subtitle="Flexible Solutions, Unmatched Quality – Packaging That Sells Your Brand."
          data={Flexible}
        />
        <CTASECTION />
        <SliderFull />
        <section className="bg-[#EAF6F9]">
          {/* Print & Advertising  */}
          {/* <Packaging_Style
            title="Print & Advertising & Office Supplies"
            subtitle="Start designing unique boxes with different styles, sizes, and choices. Custom rigid boxes or Kraft boxes for retail products and many more?We can help, Custom printing and packaging services ideas abound."
            data={Printadverstising}
          /> */}
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
