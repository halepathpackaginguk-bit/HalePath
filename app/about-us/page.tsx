import PageBanner from "@/components/page-banner";
import { buildSeo } from "@/lib/seo/generateSeo";
import Image from "next/image";

export async function generateMetadata() {
  return buildSeo({
    seo: {
      title: "About Us | Hale Path Packaging",
      description: "Learn about Hale Path Packaging — our story, sustainable packaging solutions, and commitment to quality."
    }
  }, "about-us");
}

const featureproductsRes = [
  {
    title: "R&D Department Helping in Branding",
    excerpt:
      "Have you ever stood in a shop and picked one product without fully knowing why? That small moment of hesitation — that’s branding in action. Hale Path Packaging works as a modern solution provider for all types of printing and packaging needs. You may already have a strong product. But does your packaging support it properly? Our R&D department studies market trends and customer behaviour carefully. We look at what buyers prefer, what attracts attention, and what encourages a purchase. When your product sits on a shelf beside competitors in retail shops or shopping malls, packaging becomes the first impression. Often, it becomes the first trigger for brand choice. Our R&D team improves artwork to make it clearer and more appealing. They guide clients on selecting the right stock, colour combinations, and branded finishes such as gold foiling, embossing, Spot UV, and fluorescent colours. These adjustments can directly impact sales performance. We push for high standards across customisation, design, service, technology, and materials. We don’t aim for “good enough.” We aim for solid results. That approach allows us to offer wide options in textures, materials, designs, and innovative outlooks.",
    gallery: "/images/design/1.png",
  },
  {
    title: "Customize Packaging",
    excerpt:
      "Every product is different. So why should packaging look the same? We are wholesale manufacturers of customized packaging serving thousands of satisfied clients. From small home-based startups to large wholesale businesses — and even individuals planning events — we provide packaging solutions for all. Our pricing stays competitive and often lower than standard market rates. This allows clients to manage packaging costs more comfortably. We focus on long-term, mutually beneficial relationships. Our goal is to help products stand out through packaging that speaks for itself. We work with customers across the USA, Canada, and Europe. Our services include strong pre-sales guidance and dependable after-sales support. With countless styles, sizes, and colour options available, we create packaging for both professional and personal use. Our production, creative design, and customer service teams operate within a modern facility equipped with advanced technology. The result? High-quality packaging delivered at reasonable prices.",
    gallery: "/images/design/2.png",
  },
  {
    title: "Graphic Designing Support",
    excerpt:
      "Design is not just decoration. It guides the eye. It shapes perception. Our in-house design team works closely with clients to bring their ideas to life. We make sure every detail reflects their preferences. If someone feels unsure about their packaging direction, our designers step in with practical advice. We assist with dielines, template styles, artwork setup, branded finish suggestions, and selecting colours that align with brand identity. Clients can share their ideas freely, and we refine them through unlimited revisions until everything feels right. The goal is simple: packaging that looks correct, feels consistent, and represents the brand clearly.",
    gallery: "/images/design/3.png",
  },
  {
    title: "Largest Production Facility",
    excerpt:
      "Large-scale production only works if quality stays consistent. Our facility can produce up to 500,000 mixed-category units per day. Our advanced offset printing machines manage orders ranging from 100,000 to 500,000 units with a lead time of 11–14 business days, even when handling multiple clients. Our skilled team carefully manages colour control, die-cutting plates, and lamination processes. Experience and technology work together to maintain steady output without compromising standards.",
    gallery: "/images/design/4.png",
  },
  {
    title: "Logistics Solutions",
    excerpt:
      "Large orders can reduce per-unit cost. But what if storage space is limited? We offer warehouse storage within our facility for clients who want to place large annual orders but do not have enough space. Inventory can be stored safely in controlled temperature conditions. We then ship products on a regular schedule — monthly, weekly, or based on your requirement. This system allows businesses to benefit from large production runs and lower costs without worrying about storage management. In simple terms, we handle the packaging supply so you can focus on running your business.",
    gallery: "/images/design/5.png",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" description="Learn more about Hale Path Packaging — our story, our team, and our commitment to sustainable packaging solutions." />
      <section className="my-16">
        <div className="hale_container md:flex items-center gap-5 md:gap-10 flex-row">
          <figure className="md:w-1/2">
            <Image alt="Why Us Image"
              src="/images/about-page/slider.png"
              width={600}
              height={500}
              className="rounded-2xl w-full"
              priority />
          </figure>
          <div className="flex md:w-1/2 justify-center md:justify-start items-center md:items-start flex-col">
            <h4 className="text-[#111827] mt-5 md:mt-0 font-bold text-3xl text-center md:text-left mb-4">
              Our Story! Who Are We?</h4>
            <p className="mb-2 text-center md:text-left">
              Our name wasn’t picked randomly.  “Hale” means healthy.  “Path” means way. And “Packaging” is what we do every day.
            </p>
            <p className="mb-2 text-center md:text-left">
              Put it together, and it shows exactly what we stand for — a healthier, more responsible way of creating packaging.
            </p>
            <p className="mb-2 text-center md:text-left">
              At Hale Path Packaging, eco-friendly and sustainable packaging isn’t just a buzzword. We make sure our boxes, packaging, and inserts protect products while reducing environmental impact. Many businesses think they must choose between durability and sustainability. We don’t agree — we deliver both. Using renewable materials, careful production methods, and waste-minimizing systems, we help brands make smart, eco-conscious choices without compromising quality.
            </p>
            <p className="mb-2 text-center md:text-left">
              Let me tell you something more mesmerizing: A USA-based organic candle brand wanted packaging that reflected their commitment to sustainability. They approached us for custom eco-friendly candle boxes with inserts. Using recycled cardboard, soy-based inks, and minimal lamination, we delivered packaging that was durable, protective, and fully recyclable. The brand reported a 25% increase in customer appreciation for their eco-conscious efforts, and their boxes became a talking point in stores — showing that sustainable choices can also enhance brand appeal and sales.
            </p>
            <p className="mb-2 text-center md:text-left">
              At the end of the day, our goal is simple: create packaging that protects products, supports businesses, and moves the industry toward a healthier, greener path
            </p>

          </div>
        </div>
      </section>
      <section className="my-16">
        <div className="hale_container md:flex items-center gap-5 md:gap-10 flex-row-reverse">
          <figure className="md:w-1/2">
            <Image alt="Why Us Image"
              src="/images/about-page/slider.png"
              width={600}
              height={500}
              className="rounded-2xl w-full"
              loading="lazy" />
          </figure>
          <div className="flex md:w-1/2 justify-center md:justify-start items-center md:items-start flex-col">
            <h4 className="text-[#111827] mt-5 md:mt-0 font-bold text-3xl text-center md:text-left mb-4">
              About Us!</h4>
            <p className="mb-2 text-center md:text-left">
              Packaging usually gets blamed for waste. Yet at Hale Path Packaging, we see it differently. We believe packaging can be strong, smart, and responsible at the same time.
            </p>
            <p className="mb-2 text-center md:text-left">
              Hale Path Packaging offers complementary print technologies — Offset, UV offset, Flexo Printing, digital printing, and cold foil or hot foil — supported by state-of-the-art binding and finishing systems. That may sound technical, but here’s what it really means: we choose the right printing method for the right job. Some designs need sharp detail. Others need bold colour. Some need speed. We match the process to the purpose.
            </p>
            <p className="mb-2 text-center md:text-left">
              HPP leads the corrugated packaging market while operating as one of the largest renewable packaging facilities. In simple words, we don’t just produce boxes. We build packaging with long-term thinking. We even develop our own liner and fluting in-house. These inner layers give corrugated boxes the strength and durability required to pack and transport valuable products safely. If it needs to travel, stack, or sit on shelves, it needs structure. We make sure it has it.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="hale_container">
          <h2 className="h2 md:mb-5!">
            The Work We Do And <span className="text-primary">Love Doing</span>
          </h2>
          <p className="md:text-xl text-base font-normal text-title_Clr text-center max-w-[880px] mx-auto">
            <b>It might sound strange, but yes — packaging can influence how people think and buy.</b>
            It’s not just a box. It’s the first thing a customer sees. Sometimes it’s the reason they pick one product over another.
            This mix of psychology, engineering, and creativity is exactly what we enjoy working with every day at Hale Path Packaging.
          </p>
        </div>
        <div className="hale_container mt-10 flex flex-col gap-8 ">
          {featureproductsRes.map((product, index) => (
            <div
              key={index} className='feature_box flex md:flex-row flex-col items-center even:md:flex-row-reverse'>
              <div className="md:w-1/3 w-full">
                <Image src={product?.gallery} alt="img"
                  width={500} height={400}
                  className='w-full object-cover object-center'
                  loading="lazy" />
              </div>
              <div className='md:w-2/3 w-full p-5'>
                <h3 className=''>
                  {product?.title}
                </h3>
                <p className='md:text-lg text-base font-normal text-title_Clr'>
                  {product?.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}