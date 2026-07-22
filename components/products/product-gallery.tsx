"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";

type GalleryNode = {
  mediaItemUrl: string;
  altText?: string;
};

type ProductData = {
  galleryImages?: {
    nodes: GalleryNode[];
  };
};

type Props = {
  data: ProductData;
};

const Product_Gallery = ({ data }: Props) => {
  const GalleryImages = data?.galleryImages?.nodes || [];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slider1, setSlider1] = useState<Slider | null>(null);
  const [slider2, setSlider2] = useState<Slider | null>(null);

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    asNavFor: slider2 || undefined,
    afterChange: (index: number) => setCurrentSlide(index),
  };

  const thumbSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    asNavFor: slider1 || undefined,
    focusOnSelect: true,
    arrows: false,
    variableWidth: true,
  };

  // Handle case when there are no images
  if (GalleryImages.length === 0) {
    return (
      <div className="content single">
        <div className="container">
          <div className="bg-gray-100 rounded-[12px] h-[365px] flex items-center justify-center">
            <p className="text-gray-500">No images available</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="content single">
      <div className="container">
        {/* MAIN SLIDER */}
        <Slider {...settings} ref={(slider) => setSlider1(slider)}>
          {GalleryImages.map((item, idx) => (
            <div key={idx}>
              <img
                src={item.mediaItemUrl}
                alt={item.altText || "product"}
                width={435}
                height={365}
                className="w-full h-full object-cover rounded-[12px] max-h-[605px]"
                loading="lazy"
              />
            </div>
          ))}
        </Slider>

        {/* THUMBNAILS - only show if there's more than one image */}
        {GalleryImages.length > 1 && (
          <Slider
            {...thumbSettings}
            ref={(slider) => setSlider2(slider)}
            className="thumb-wrapper flex overflow-x-auto !justify-start singleproducts mt-4"
          >
            {GalleryImages.map((item, idx) => (
              <div
                key={idx}
                className={`group h-[150px] min-w-[150px] p-1 rounded-[10px] cursor-pointer ${
                  currentSlide === idx ? "active opacity-100" : "opacity-70"
                }`}
                onClick={() => slider1?.slickGoTo(idx)}
              >
                <img
                  src={item.mediaItemUrl}
                  alt={item.altText || "thumb"}
                  width={154}
                  height={131}
                  className="w-full group-hover:scale-105 rounded-[10px] transition-all duration-100 ease-linear object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Product_Gallery;