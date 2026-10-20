"use client";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";
import { FaChevronRight } from "react-icons/fa";
import MaskingImage from "../masking-Image";
import { useInertSlickClones } from "@/lib/useInertSlickClones";

export default function CategorySlider({ categoriesRes }: any) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useInertSlickClones(containerRef);

  const settings = {
    dots: false,
    arrows: false,
    className: "center",
    // centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    autoplay: false,
    speed: 12000,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
    draggable: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
    <section className="bg-[#F5F5F5] py-10">
      <h2 className="h2">Our Latest Category</h2>
      <div className="slider-container" ref={containerRef}>
        <Slider {...settings}>
          {categoriesRes.map((item: any, idx: number) => {
            const link = `/category/${item?.slug}`;

            return (
              <div key={idx} className="w-full p-2">
                <Link href={link}>
                  <Image
                    src={item?.image?.mediaItemUrl || "/images/placeholder.jpg"}
                    alt={item?.name || "category"}
                    width={363}
                    height={375}
                    sizes="(max-width: 600px) 92vw, (max-width: 1024px) 33vw, 20vw"
                    className="cat_image img-full"
                  />
                </Link>

                <Link href={link} className="box_link">
                  {item?.name}
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
