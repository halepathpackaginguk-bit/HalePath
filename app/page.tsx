import Image from "next/image";
import { getHomeData, getTestimonails } from "@/lib/data/getHomeData";
import { buildSeo } from "@/lib/seo/generateSeo";
import Product_brand_slider from "@/components/products/Product_brand_slider";
import BannerPageMiddel from "@/components/banner/banner";
import CategorySlider from "@/components/category/categorySlider";
import CTASECTION from "@/components/CTA";
import AvailableWorldwide from "@/components/home/available";
import Brands from "@/components/home/brands";
import Faqs from "@/components/home/faqs";
import Get_Qoute from "@/components/home/get-qoute";
import HowIt_work from "@/components/home/howit-work";
import MainSlider from "@/components/home/mainSlider";
import Packaging_Style from "@/components/home/packaging-style";
import ProductSlider from "@/components/home/productSlider";
import WhatWeDo from "@/components/home/what-we-do";
import MainContent from "@/components/main/main-content";
import SliderFull from "@/components/slider/slider-full";
import Testimonials from "@/components/testimonial/testimonials";
import WhatWeOffer from "@/components/what-we-offer/what-we-offer";

export async function generateMetadata() {
  return buildSeo({
    seo: {
      title: "Hale Path Packaging - Custom Boxes and Packaging Solutions",
      description: "Custom boxes, corrugated packaging, flexible packaging, and offset printing solutions at wholesale prices. Eco-friendly packaging manufacturer."
    }
  }, "");
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
        <Product_brand_slider />
        <MainContent />
        <CategorySlider categoriesRes={homePage.latestCategories.nodes} />
        <CTASECTION />
        <ProductSlider productsRes={OffsetProducts} title="Offset Printing" link="/all-offset-printing" desc="Our offset printing delivers exceptional colour accuracy and sharp, crisp detail on every run. It is ideal for large-volume orders, from folding cartons to brochures and retail packaging. Because offset printing becomes more efficient at scale, you enjoy low per-unit wholesale costs without sacrificing quality. Count on consistent results from the first box to the last." />
        <HowIt_work />
        <Brands />
        <BannerPageMiddel />
        <ProductSlider productsRes={Corrugated} title="Corrugated Packaging" link="/all-corrugated-packaging" desc="Explore our heavy-duty, eco-friendly corrugated shipping and mailer boxes, built to protect your products in transit. Choose custom sizes, strengths, and printed designs that keep your brand visible from warehouse to doorstep." />
        <Get_Qoute />
        <WhatWeOffer />
        <Packaging_Style
          title="Flexible Packaging / Mylar bags"
          link="/all-flexible-packaging/"
          subtitle="Protect freshness and boost shelf appeal with our custom Mylar bags and flexible packaging. We make coffee pouches, stand-up bags, and child-resistant Mylar bags for wellness and cannabis products. Our high-barrier, puncture-resistant materials block light, moisture, and oxygen, keeping contents fresh and secure. Choose your size, zipper, window, and finish, and add full-colour printing to make your brand stand out on any shelf."
          data={Flexible}
        />
        <CTASECTION />
        <SliderFull />
        <section className="bg-[#EAF6F9]">
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
            src="/images/page-us.png"
            alt="about us"
            width={1920}
            height={1080}
            className="w-full"
            loading="lazy"
          />
        </section>
        <AvailableWorldwide />
      </main>
    </>
  );
}
