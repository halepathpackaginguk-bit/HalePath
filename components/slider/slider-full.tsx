'use client';
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    image: "/images/about-page/corrugated.webp",
    title: "Corrugated Packaging ",
    link: "/all-corrugated-packaging",
    bg: "slider_bg2",
    text: "text-white",
    desc: "Our corrugated packaging solutions cover everything from standard shipping boxes and crash-lock mailers to retail-ready shelf trays and heavy-duty industrial containers. Single wall, double wall, or tri-wall — built for e-commerce, food, beverage, and wholesale distribution. Amazon-compatible, frustration-free options available.",
  },
  {
    image: "/images/about-page/flexible.webp",
    title: "FLEXIBLE PACKAGING",
    link: "/all-flexible-packaging",
    bg: "slider_bg3",
    text: "text-white",
    desc: "Modern formats for modern brands. Stand-up pouches, flat-bottom pouches, Mylar bags, spout pouches, shrink sleeve labels, child-resistant bags, and biodegradable options — ideal for food, coffee, cannabis, pet food, supplements, and cleaning products. High-barrier printing that keeps freshness in and maintains high shelf appeal.",
  },
  {
    image: "/images/about-page/offset.webp",
    title: "BRANDED FINISHING & INNOVATION",
    link: "/all-offset-printing",
    bg: "slider_bg",
    text: "text-white",
    desc: "The details that make customers stop scrolling. Foil stamping, embossing, debossing, spot UV, lamination, holographic finishes, smart packaging with QR codes, and security printing solutions. For brands that want their packaging to be the marketing.",
  },
  {
    image: "/images/about-page/print.webp",
    title: "Print Advertising & Office Supplies",
    link: "/all-print-advertising",
    bg: "slider_bg2",
    text: "text-white",
    desc: "Every touchpoint, perfected. Business cards, brochures, postcards, stickers, labels, banners, and promotional products — all produced with the same quality standards as our packaging. One partner for your boxes and your brand collateral means consistency you can actually see.",
  },
];

export default function SliderFull() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState(0);
  const isAnimating = useRef(false);

  const goToSlide = (index: number) => {
    if (!scrollRef.current) return;
    if (index < 0 || index >= slides.length) return;

    isAnimating.current = true;
    setCurrentIndex(index);

    scrollRef.current.scrollTo({
      left: scrollRef.current.children[index].clientWidth * index,
      behavior: "smooth",
    });

    setTimeout(() => {
      isAnimating.current = false;
    }, 700);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (evt: WheelEvent) => {
      if (isAnimating.current) {
        evt.preventDefault();
        return;
      }

      if (evt.deltaY > 0) {
        if (currentIndex < slides.length - 1) {
          evt.preventDefault();
          goToSlide(currentIndex + 1);
        }
      } else {
        if (currentIndex > 0) {
          evt.preventDefault();
          goToSlide(currentIndex - 1);
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [currentIndex]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setActive(slides.length - 1);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              (entry.target as HTMLElement).dataset.index ?? 0,
            );
            setActive((prev) => Math.max(prev, index));
          }
        });
      },
      { root: el, rootMargin: "0px 200px 0px 0px", threshold: 0.01 },
    );

    Array.from(el.children).forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="Main_hori slider-full" ref={scrollRef}>
      {slides.map((slide, idx) => (
        <section
          key={idx}
          data-index={idx}
          className="panel bg-cover bg-no-repeat bg-center"
          style={
            idx <= active
              ? { backgroundImage: `url(${slide.image})` }
              : undefined
          }
        >
          <div className="w-full grid md:grid-cols-2 justify-center gap-8 h-full">
            <figure className="h-full"></figure>

            <div className={`flex justify-center md:items-center flex-col h-full`}>
              <div
                className={`${slide.text} slider-content h-full bg-white/5 backdrop-blur-[10px] py-10 sm:p-10 p-5 rounded-lg`}
              >
                <p className="animate-slide">Hale Path Packaging</p>

                <h2 className="animate-slide delay-200">
                  {slide.title}
                </h2>

                <p className="animate-slide delay-200 md:max-w-4/5">
                  {slide.desc}
                </p>

                <div className="flex mt-5 animate-slide delay-400">
                  <Link href={slide.link} className="btn_secondry">
                    View All Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
