"use client";
import Image from "next/image";
import Slider from "react-slick";

const brands = Array.from({ length: 19 }, (_, i) => i + 1);

export default function Product_brand_slider() {
    const settings = {
        slidesToShow: 10,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: 'linear',
        dots: false,
        infinite: true,
        pauseOnHover: true,
        pauseOnFocus: false,
        draggable: true,
        swipe: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <section className="py-16 bg-[#f5f5f5]">
            <div className="w-full px-4">
                <div className="text-center mb-8">
                    <span className="text-secondary font-semibold text-base uppercase tracking-wider">Trusted Brands</span>
                    <h2 className="md:text-4xl text-2xl font-bold text-coff_black capitalize mt-1">Trusted by 10,000+ awesome brands
                    </h2>
                </div>
                <Slider {...settings} className="!w-full">
                    {brands.map((brand) => (
                        <div key={brand} className="px-4">
                            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                                <Image
                                    src={`/images/brands/${brand}.jpg`}
                                    alt="brandlogo"
                                    width={90}
                                    height={60}
                                    sizes="90px"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}
