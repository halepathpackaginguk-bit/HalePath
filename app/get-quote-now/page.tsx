import PageBanner from "@/components/page-banner";
import Get_Qoute from "@/components/home/get-qoute";
import Instagram from "@/components/instagram/instagram";
import Testimonials from "@/components/testimonial/testimonials";
import { getTestimonails } from "@/lib/data/getHomeData";
import { buildSeo } from "@/lib/seo/generateSeo";

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
      <Get_Qoute />
      <Testimonials testimonialsRes={testimonialsRes} />
      <Instagram />
    </main>
  );
};

export default GetQouteNow;
