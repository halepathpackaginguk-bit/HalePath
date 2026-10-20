"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const VIDEO_ID = "t9cQKmu4TGI";
const IFRAME_SRC = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${VIDEO_ID}&modestbranding=1&rel=0&iv_load_policy=3`;

export default function MainSlider() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const events: (keyof WindowEventMap)[] = [
      "scroll",
      "pointerdown",
      "pointermove",
      "touchstart",
      "keydown",
    ];

    const show = () => {
      if (cancelled) return;
      cancelled = true;
      events.forEach((name) => window.removeEventListener(name, show));
      window.clearTimeout(fallback);
      setShowVideo(true);
    };

    events.forEach((name) =>
      window.addEventListener(name, show, { passive: true }),
    );
    const fallback = window.setTimeout(show, 8000);

    return () => {
      cancelled = true;
      events.forEach((name) => window.removeEventListener(name, show));
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <section className="Main_slider">
      <div className="main-slider">
        <div className="w-full relative 2xl:h-[705px] md:h-[605px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <Image
              src="/images/hero-poster.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          {showVideo && (
            <div className="pointer-events-none absolute inset-0">
              <iframe
                className="absolute md:top-1/2 top-[28%] left-1/2 sm:w-[120vw] sm:h-[120vh] w-[468vw] h-[220vh] -translate-x-1/2 -translate-y-1/2"
                src={IFRAME_SRC}
                allow="autoplay; fullscreen"
                frameBorder="0"
                title="Hale Path Packaging background video"
              ></iframe>
            </div>
          )}
          <div
            style={{ position: "absolute", inset: 0, zIndex: 1 }}
          ></div>
          <div className="video_overlay">
            <div className="hale_container relative z-10">
              <div className="md:w-1/2 w-full">
                <h1 className="h1">
                  Custom Packaging &amp; Boxes That Define Your Brand!
                </h1>

                <p className="text-white sm:text-lg text-sm font-medium mb-8">
                  Custom packaging boxes, corrugated solutions, custom printed
                  boxes, pouches, and labels built for US eCommerce brands and
                  DTC startups. Low MOQ and free design support. One partner for
                  everything. Grab a Flat 25% Discount on Your First Order +
                  Free Shipping, Fastest Turnaround Time &amp; 7-Day Delivery!
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
