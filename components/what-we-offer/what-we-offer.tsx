import Image from 'next/image'
import React from 'react'


const packagingContent = [
  {
    title: "Custom Packaging Solutions",
    description:
      "Great packaging does more than wrap a product — it tells your brand's story. Our corrugated and bespoke solutions are built tough, printed sharp, and shaped around your exact specs. Whether you sell online, in-store, or wholesale, expect packaging that turns heads and holds up.",
  },
  {
    title: "Recycling & Circularity",
    description:
      "We don't just tick the recycling box — we build it into everything. Our paper and board materials stay in circulation, cutting waste before it starts. Fully compatible with UK recycling systems, our packaging helps your brand stay green without sacrificing a thing.",
  },
  {
    title: "Eco-Friendly Kraft Paper",
    description:
      "Strong, natural, and endlessly reusable — our kraft paper is sourced from responsibly managed forests and breaks down without a trace. It's a straightforward swap away from plastic that your customers will actually notice and appreciate.",
  },
  {
    title: "Performance-Driven Sustainability",
    description:
      "Eco claims are easy to make. Proving them is another story. Our packaging cuts material use, ditches harmful inks, and meets strict UK environmental standards — all without compromising on protection. Real sustainability that works as hard as your product does.",
  },
];

const WhatWeOffer = () => {
  return (
    <section className="pt-[60px] bg-[#F5F5F5]">
      <div className="hale_container flex flex-col justify-center items-center">
        <h6 className="text-[#1C2E42] font-semibold flex gap-2 items-center">
          Sustainable Products & Services
          <div className="sub_title_line"></div>
        </h6>
        <h2 className="h2">
         Eco-Smart Packaging That Builds Stronger Brands and a Greener Future.

        </h2>
      </div>
      <div className="offerbg bg-cover bg-no-repeat sm:mt-44 mt-32 border">
        <div className="hale_container">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 sm:mb-32 mb-10 sm:-mt-48 -mt-36">

            {packagingContent.map((item, idx) => (
              <div key={idx} className='service_box ms:h-[520px] h-[380px] sm:p-5 p-2 bg-white/5 backdrop-blur-[10px]'>
                <div className="h-full w-full bg-no-repeat bg-center bg-cover flex items-end justify-end pt-6 pb-1"
                  style={{ backgroundImage: `url('/images/eco/${idx + 1}.jpg')` }} >
                  <div className="service_inner">
                    <div className="content">
                      <h5 className="group">
                       {item.title}
                        <Image
                          src="/images/about-page/li_move-up-right.svg"
                          alt=""
                          className="group-hover:scale-110 transition-all duration-300"
                          width={30}
                          height={30}
                        />
                      </h5>
                      <p className="mt-3 text-white sm:text-sm text-xs">
                           {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}
export default WhatWeOffer