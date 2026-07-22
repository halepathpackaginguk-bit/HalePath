"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const ImageCarousel = ({ data }: any) => {
  const GalleryImages = data?.nodes || [];
  const images = GalleryImages.map((img: any) => img?.mediaItemUrl);
  const sliderRef = useRef<Slider | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const goNext = () => sliderRef.current?.slickNext();
  const goPrev = () => sliderRef.current?.slickPrev();

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  if (!images.length) return null;

  return (
    <div className="relative w-full py-8">
      {/* SLIDER */}
      <Slider ref={sliderRef} {...settings} className="full_gallery">
        {images.map((src: string, index: number) => (
          <div key={index} className="px-2">
            <figure className="rounded-2xl h-[450px]">
              <img
                src={src || "/images/placeholder.png"}
                alt={`Slide ${index + 1}`}
                width={350}
                height={450}
                onClick={() => openLightbox(index)}
                className="cursor-pointer !h-full w-full object-cover rounded-2xl"
                loading="lazy"
              />
            </figure>
          </div>
        ))}
      </Slider>

      {/* LIGHTBOX */}
      <div
        className={`fixed inset-0 bg-black/90 ${
          isOpen ? "flex" : "hidden"
        } items-center justify-center z-[9999]`}
      >
        <button
          onClick={closeLightbox}
          className="absolute top-5 right-5 text-white text-3xl"
        >
          &times;
        </button>

        <button
          onClick={prevImage}
          className="absolute left-5 text-white text-3xl"
        >
          &#10094;
        </button>

        <img
          src={images[currentIndex]}
          alt="lightbox"
          width={1000}
          height={800}
          className="max-h-[90%] max-w-[90%] object-contain rounded-xl"
        />

        <button
          onClick={nextImage}
          className="absolute right-5 text-white text-3xl"
        >
          &#10095;
        </button>
      </div>

      {/* ARROWS */}
      <button
        onClick={goPrev}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-10 h-[60px] w-[60px] rounded-full bg-primary flex items-center justify-center"
      >
        <FaArrowLeftLong />
      </button>

      <button
        onClick={goNext}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-10 h-[60px] w-[60px] rounded-full bg-primary flex items-center justify-center"
      >
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default ImageCarousel;
