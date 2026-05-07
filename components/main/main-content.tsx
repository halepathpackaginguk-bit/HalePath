'use client';

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const whyChooseHalePath = [
  {
  
    description:
      "<b>One Packaging Partner </b> Whether you sell skincare, cannabis, food, electronics, or pet products, we have built packaging solutions specifically for your category. Most packaging companies handle one thing. We handle everything — and do each part exceptionally well.",
  },
  {

    description:
      "<b>See Your Design Before Production</b> Ordering custom packaging without a real design is a significant risk. That's why every order includes a full digital proof and 3D mockup before production starts. You approve it. We print it. No surprises, no costly reprints. If something's off, we fix it fast.",
  },
  {
  
    description:
      "<b>Everything in One Place</b>Need boxes, pouches, and labels? Most suppliers do one thing. We do everything. Mailer boxes, rigid boxes, custom labels, pouches, promotional items — you can bundle your entire packaging line into a single order with a single point of contact.",
  },
  {
    
    description:
      "<b>Support for Small & Large Brands </b> We've helped solo founders launch their first 50 boxes and scale DTC brands to reorder 50,000. Whether you're pre-launch or post-Series A, you get the same quality finishes, dedicated support, and wholesale custom boxes pricing.",
  },
  {
  
    description:
      "<b>Fast & Reliable Turnaround </b> Our production timeline is stated upfront, not buried in fine print. Once your design is approved, most orders are manufactured and dispatched within 7 business days. You'll get tracking, updates, and a team you can actually reach.",
  },
  {
   
    description:
      "<b>Premium Finishes That Elevate Brands </b>Foil stamping, embossing, debossing, spot UV, matte and gloss lamination, holographic effects — these aren't upsells. They're built into how we think about your brand from day one.",
  },
  {
  
    description:
      "<b>Packaging + Print + Promotional </b> Your brand doesn't stop at the box. We also produce custom labels, business cards, stickers, banners, branded apparel, and promotional products — all under one roof for consistent branding across every touchpoint.",
  },
];

const MainContent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollRef = useRef(null);

  const images = [
    "/images/about-page/about-bg-img_2.png",
    "/images/about-page/image_1.png",
    "/images/about-page/about-bg-img.png",
  ];

  const handleScroll = () => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const { scrollTop, scrollHeight, clientHeight } = scrollElement;
      const totalScrollableHeight = scrollHeight - clientHeight;

      // Calculate the current image index based on scroll
      const newIndex = Math.min(
        images.length - 1,
        Math.floor((scrollTop / totalScrollableHeight) * images.length)
      );

      setCurrentImageIndex(newIndex);
    }
  };

  return (
    <section className="max_content mt-14 py-8">
      <main className="hale_container hale_flex !flex-row !items-start">
        {/* Left side with instant image switching */}
        <div className="md:w-2/5 relative w-1/2">
          <div className="overflow-hidden sm:!h-[400px] !h-[220px]">
            {images.map((src, index) => (
              <figure
                key={index}
                className={`image-slide ${index === currentImageIndex ? "block" : "hidden"}`}>
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover rounded-2xl scale-110"
                />
              </figure>
            ))}
            <figure className="">
              <Image
                src={'/images/about-page/about-bg-img_2.png'}
                alt={``}
                layout="fill"
                objectFit="cover"
                className="!w-[80%] !-top-10 mx-auto sm:!h-[400px] !h-[220px] absolute z-[-1] scale-105 rounded-3xl !left-1/2 !-translate-x-1/2"
              />
            </figure>
            <figure className="">
              <Image
                src={'/images/about-page/image_1.png'}
                alt={``}
                layout="fill"
                objectFit="cover"
                className="!w-[90%] !-top-5 mx-auto sm:!h-[400px] !h-[220px] absolute z-[-1] scale-105 rounded-3xl !left-1/2 !-translate-x-1/2"
              />
            </figure>
          </div>
          <div className="sm:mt-10 mt-5 flex justify-center">
            <Link
              href="/about-us"
              className="btn_secondry"
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Right side with scrollable content */}
         <div className="relative md:w-3/5 w-1/2">
          <div
            className="w-full sm:!max-h-[400px] !max-h-[220px] overflow-y-scroll scroll_Left"
            onScroll={handleScroll}
            ref={scrollRef}
          >
            {whyChooseHalePath.map((item, index) => (
              <div className="slide_txt "
                key={index} 
                 dangerouslySetInnerHTML={{__html: item.description }} 
                
              />
            ))}
          </div>
          <div className="absolute right-0 left-3 bottom-0 bg-gradient-to-t from-white/90 via-white/80 to-transparent top-[60%]" />
        </div>
      </main>
    </section>
  );
};

export default MainContent;
