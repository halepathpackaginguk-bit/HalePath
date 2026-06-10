import PageBanner from '@/components/page-banner'
import Get_Qoute from '@/components/home/get-qoute'
import Instagram from '@/components/instagram/instagram'
import Testimonials from '@/components/testimonial/testimonials'
import { getTestimonails } from '@/lib/data/getHomeData'
import { buildSeo } from '@/lib/seo/generateSeo'

export async function generateMetadata() {
  return buildSeo({
    seo: {
      title: "Contact Us | Hale Path Packaging",
      description: "Have a question or need a custom packaging solution? Get in touch with Hale Path Packaging today."
    }
  }, "contact-us")
}

const ContactUs = async () => {
      const testimonialsRes = await getTestimonails();
  return (
    <main>
        <PageBanner
          title="Contact Us"
          description="Have a question or need a custom packaging solution? We're here to help. Get in touch with our team today."
        />
        <Get_Qoute />
        <Testimonials testimonialsRes={testimonialsRes} />
        <Instagram />      
    </main>
  )
}

export default ContactUs
