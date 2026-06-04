'use client'
import React from "react";
import PackingBox from "./packingBox";
import Slider from "react-slick";
import MaskingImage from "../masking-Image";
import Link from "next/link";

function Packaging_Style({ data, title, link, subtitle }: any) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    // centerPadding: "60px",
    slidesToShow: 5,
    cssEase: "linear",
    speed: 12000,
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <section id="box-by-material" className="py-16">
      <div className="px-0">
        <div className="hale_container flex flex-col justify-center items-center">
          <h2 className="h2">
            {title}
          </h2>
          <p className="sm:text-lg text-sm font-normal text-txt_Clr text-center md:w-5/6 mx-auto">
            {subtitle}
          </p>
        </div>
        <Slider {...settings}>
          {data?.map((item: any, i: number) => (
            <MaskingImage key={i} data={item} />
          ))}
        </Slider>
      </div>
      <Link href={link} className="btn_secondry flex items-center gap-2 sm:mt-12 mt-6 w-fit mx-auto">
        See All {title}
      </Link>
    </section>
  );
}

export default Packaging_Style;
