"use client";
import Slider from "react-slick";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import MaskingImage from "../masking-Image";

export default function CategorySlider({ categoriesRes }: any) {
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
      <div className="slider-container">
        <Slider {...settings}>
          {categoriesRes.map((item: any, idx: number) => {
            const link = `/category/${item?.slug}`;

            return (
              <div key={idx} className="w-full p-2">
                <Link href={link}>
                  <Image
                    src={item?.image?.mediaItemUrl || "/placeholder.png"}
                    alt={item?.name || "category"}
                    width={363}
                    height={375}
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
