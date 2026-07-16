import PageBanner from "@/components/page-banner";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { getTestimonails } from "@/lib/data/getHomeData";
import { buildSeo } from "@/lib/seo/generateSeo";

const Get_Qoute = dynamic(() => import("@/components/home/get-qoute"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/testimonial/testimonials"), { ssr: true });

export async function generateMetadata() {
  return buildSeo({
    seo: {
      title: "Get a Quote | Hale Path Packaging",
      description: "Request a personalized quote for your custom packaging project. Our team will get back to you promptly."
    }
  }, "get-quote-now");
}

const GetQouteNow = async () => {
  const testimonialsRes = await getTestimonails();
  return (
    <main className="">
      <PageBanner
        title="Get a Quote"
        description="Ready to start your packaging project? Request a personalized quote today and our team will get back to you promptly."
      />
      <Suspense fallback={null}>
        <Get_Qoute />
      </Suspense>
      <Suspense fallback={null}>
        <Testimonials testimonialsRes={testimonialsRes} />
      </Suspense>
     
    </main>
  );
};

export default GetQouteNow;
