import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

export default function MainSlider() {
  return (
    <section className="Main_slider">
      <div className="main-slider">
        <div className="w-full relative 2xl:h-[705px] md:h-[605px] flex items-center justify-center overflow-hidden">
          <div className="pointer-events-none">
            <iframe
              className="absolute md:top-1/2 top-[28%] left-1/2 sm:w-[120vw] sm:h-[120vh] w-[468vw] h-[220vh] -translate-x-1/2 -translate-y-1/2"
              src="https://www.youtube.com/embed/t9cQKmu4TGI?autoplay=1&mute=1&controls=0&loop=1&playlist=t9cQKmu4TGI&modestbranding=1&rel=0&iv_load_policy=3"
              allow="autoplay; fullscreen"
              frameBorder="0"
            ></iframe>
          </div>
          <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}></div>
          <div className="video_overlay">
            <div className="hale_container relative z-10">
              <div className="md:w-1/2 w-full">
                <h1 className="h1">
                  Custom Packaging & Boxes That Define Your Brand!
                </h1>

                <p className="text-white sm:text-lg text-sm font-medium mb-8">
                  Custom packaging boxes, corrugated solutions, custom printed
                  boxes, pouches, and labels built for US eCommerce brands and
                  DTC startups. Low MOQ and free design support. One partner for
                  everything. Grab a Flat 25% Discount on Your First Order +
                  Free Shipping, Fastest Turnaround Time & 7-Day Delivery!
                </p>

                <Link href="/about-us" className="btn_primary">
                  Enquire Now <FaChevronRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
