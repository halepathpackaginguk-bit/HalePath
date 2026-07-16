import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { getHomeData, getTestimonails } from "@/lib/data/getHomeData";
import { buildSeo } from "@/lib/seo/generateSeo";

const BannerPageMiddel = dynamic(() => import("@/components/banner/banner"), { ssr: true });
const CategorySlider = dynamic(() => import("@/components/category/categorySlider"), { ssr: true });
const CTASECTION = dynamic(() => import("@/components/CTA"), { ssr: true });
const AvailableWorldwide = dynamic(() => import("@/components/home/available"), { ssr: true });
const Brands = dynamic(() => import("@/components/home/brands"), { ssr: true });
const Faqs = dynamic(() => import("@/components/home/faqs"), { ssr: true });
const Get_Qoute = dynamic(() => import("@/components/home/get-qoute"), { ssr: true });
const HowIt_work = dynamic(() => import("@/components/home/howit-work"), { ssr: true });
const MainSlider = dynamic(() => import("@/components/home/mainSlider"), { ssr: true });
const Packaging_Style = dynamic(() => import("@/components/home/packaging-style"), { ssr: true });
const ProductSlider = dynamic(() => import("@/components/home/productSlider"), { ssr: true });
const WhatWeDo = dynamic(() => import("@/components/home/what-we-do"), { ssr: true });
const MainContent = dynamic(() => import("@/components/main/main-content"), { ssr: true });
const SliderFull = dynamic(() => import("@/components/slider/slider-full"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/testimonial/testimonials"), { ssr: true });
const WhatWeOffer = dynamic(() => import("@/components/what-we-offer/what-we-offer"), { ssr: true });

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
        <Suspense fallback={<div className="min-h-[400px] bg-gray-100 animate-pulse" />}>
          <MainSlider />
        </Suspense>
        <Suspense fallback={null}>
          <MainContent />
        </Suspense>
        <Suspense fallback={null}>
          <CategorySlider categoriesRes={homePage.latestCategories.nodes} />
        </Suspense>
        <Suspense fallback={null}>
          <CTASECTION />
        </Suspense>
        <Suspense fallback={null}>
          <ProductSlider productsRes={OffsetProducts} title="Offset Printing" link="/all-offset-printing" />
        </Suspense>
        <Suspense fallback={null}>
          <HowIt_work />
        </Suspense>
        <Suspense fallback={null}>
          <Brands />
        </Suspense>
        <Suspense fallback={null}>
          <BannerPageMiddel />
        </Suspense>
        <Suspense fallback={null}>
          <ProductSlider productsRes={Corrugated} title="Corrugated Packaging" link="/all-corrugated-packaging" />
        </Suspense>
        <Suspense fallback={null}>
          <Get_Qoute />
        </Suspense>
        <Suspense fallback={null}>
          <WhatWeOffer />
        </Suspense>
        <Suspense fallback={null}>
          <Packaging_Style
            title="Flexible Packaging / Mylar bags"
            link="/all-flexible-packaging/"
            subtitle="Flexible Solutions, Unmatched Quality – Packaging That Sells Your Brand."
            data={Flexible}
          />
        </Suspense>
        <Suspense fallback={null}>
          <CTASECTION />
        </Suspense>
        <Suspense fallback={null}>
          <SliderFull />
        </Suspense>
        <section className="bg-[#EAF6F9]">
          <Suspense fallback={null}>
            <Packaging_Style
              title="Print & Advertising & Office Supplies"
              link="/all-print-advertising/"
              subtitle="Start designing unique boxes with different styles, sizes, and choices. Custom rigid boxes or Kraft boxes for retail products and many more?We can help, Custom printing and packaging services ideas abound."
              data={Printadverstising}
            />
          </Suspense>
        </section>
        <Suspense fallback={null}>
          <WhatWeDo data={WhatweDo} />
        </Suspense>
        <Suspense fallback={null}>
          <Testimonials testimonialsRes={testimonialsRes} />
        </Suspense>
        <Suspense fallback={null}>
          <Faqs faqRes={FAQS} />
        </Suspense>
        <section className="px-4">
          <Image
            src="/images/cta-ban.png"
            alt="about us"
            width={1920}
            height={1080}
            className="w-full"
            loading="lazy"
          />
        </section>
        <Suspense fallback={null}>
          <AvailableWorldwide />
        </Suspense>
      </main>
    </>
  );
}
