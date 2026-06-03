import Get_Qoute from '@/components/home/get-qoute'
import Instagram from '@/components/instagram/instagram'
import Testimonials from '@/components/testimonial/testimonials'
import { getTestimonails } from '@/lib/data/getHomeData'
import { buildSeo } from '@/lib/seo/generateSeo'
import React from 'react'

export async function generateMetadata() {
  return buildSeo(null, "contact-us")
}

const ContactUs = async () => {
      const testimonialsRes = await getTestimonails();
  return (
    <main className="">

         <Get_Qoute />
        <Testimonials testimonialsRes={testimonialsRes} />
        <Instagram />
      
    </main>
  )
}

export default ContactUs
