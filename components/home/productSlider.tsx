'use client'
import Slider from "react-slick";
import Link from 'next/link'
import React from 'react'

import MaskingImage from "../masking-Image";

export default function ProductSlider({ title, link, productsRes }: any) {

  return (
    <section className="py-12">
      <div className="hale_container flex flex-col justify-center items-center">
        {title && <h4 className="sub_title">
          <span> Our Products </span>
          <span className="sub_title_line"></span>
        </h4>}
        {title && <h2 className="h2">
          {title}
        </h2>}
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {productsRes?.map((item: any, idx: number) => {
            return <MaskingImage key={idx} data={item} />
          })}
        </Slider>
      </div>
      {title && <Link href={link} className="btn_secondry flex items-center gap-2 sm:mt-12 mt-6 w-fit mx-auto">
        See All {title}
      </Link>}
    </section>
  );
}


const settings = {
  dots: false,
  arrows: false,
  className: "center",
  // centerMode: true,
  infinite: true,
  // centerPadding: "60px",
  slidesToShow: 5,
  autoplay: true,
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
