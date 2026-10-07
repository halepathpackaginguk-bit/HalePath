"use client";

import { useRef } from "react";
import Slider, { Settings } from "react-slick";

interface Testimonial {
  title: string;
  content: string;
  testimonialsInfo: {
    address: string;
    rating: number;
    incentivized: boolean;
    customerType: string;
  };
}
interface TestimonialsProps {
  testimonialsRes: Testimonial[];
}

const Testimonials = ({ testimonialsRes }: TestimonialsProps) => {
  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#F8F5F0] py-16">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-secondary text-sm font-semibold uppercase tracking-[4px]">
              Loved by 500+ brands worldwide
            </span>

            <h2 className="text-coff_black mt-2 text-4xl font-bold">
              Customer Stories
            </h2>
          </div>

          <a
            href="#"
            className="border-secondary text-secondary hover:bg-secondary hover:text-white inline-flex w-fit rounded-full border px-7 py-3 font-medium transition-all duration-300"
          >
            View All Stories
          </a>
        </div>

        {/* Testimonials Slider */}
        <div className="testi-slider relative">
          <Slider ref={sliderRef} {...settings}>
            {testimonialsRes?.map((testimonial, index) => (
              <article key={`${testimonial.title}-${index}`} className="px-2">
                <div className="group overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-xl">

                  {/* Quote */}
                  <div className="flex h-60 items-center justify-center overflow-hidden bg-[#F1EDE7]">
                    <div className="text-secondary/30 text-6xl font-bold">
                      "
                    </div>
                  </div>

                  <div className="p-6">

                    {/* Rating */}
                    <ul className="mb-3 flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <li
                          key={starIndex}
                          className={
                            starIndex < testimonial.testimonialsInfo.rating
                              ? "text-[#FFAE00]"
                              : "text-gray-300"
                          }
                        >
                          ★
                        </li>
                      ))}
                    </ul>

                    {/* Review */}
                    <div
                      className="mb-5 leading-7 text-gray-600"
                      dangerouslySetInnerHTML={{
                        __html: testimonial.content,
                      }}
                    />

                    {/* Customer */}
                    <h3 className="text-coff_black mb-1 text-lg font-semibold transition group-hover:text-secondary">
                      {testimonial.title}
                    </h3>

                    {/* Address */}
                    <p className="text-sm text-gray-500">
                      {testimonial.testimonialsInfo.address}
                    </p>

                    {/* Customer Type */}
                    {testimonial.testimonialsInfo.customerType && (
                      <p className="mt-1 text-sm text-gray-500">
                        {testimonial.testimonialsInfo.customerType}
                      </p>
                    )}

                  </div>
                </div>
              </article>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;