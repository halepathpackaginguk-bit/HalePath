import PageBanner from "@/components/page-banner";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { getTestimonails } from "@/lib/data/getHomeData";
import { buildSeo } from "@/lib/seo/generateSeo";

const Get_Qoute = dynamic(() => import("@/components/home/get-qoute"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/testimonial/testimonials"), { ssr: true });

export async function generateMetadata() {
  return buildSeo(
    {
      seo: {
        title: "Contact Us | Hale Path Packaging",
        description:
          "Have a question or need a custom packaging solution? Get in touch with Hale Path Packaging today.",
      },
    },
    "contact-us",
  );
}

const ContactUs = async () => {
  const testimonialsRes = await getTestimonails();
  return (
    <main>
      <PageBanner
        title="Contact Us"
        description="Have a question or need a custom packaging solution? We're here to help. Get in touch with our team today."
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

export default ContactUs;
