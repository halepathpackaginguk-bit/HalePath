"use client";

import Slider, { Settings } from "react-slick";
import { useRef } from "react";

type Testimonial = {
    review: string;
    name: string;
    location: string;
    rating: number;
};

const ProReviews = () => {
    const sliderRef = useRef<Slider | null>(null);

    const testimonialsRes: Testimonial[] = [
        {
            review: "Amazing quality and fast delivery. Highly recommended!",
            name: "John Smith",
            location: "New York, USA",
            rating: 5,
        },
        {
            review: "Very professional service and great communication.",
            name: "Emma Johnson",
            location: "London, UK",
            rating: 4,
        },
        {
            review: "Loved the packaging and print quality. Will order again.",
            name: "Michael Brown",
            location: "Toronto, Canada",
            rating: 5,
        },
        {
            review: "Excellent packaging quality and amazing customer service.",
            name: "Sarah Williams",
            location: "Manchester, UK",
            rating: 5,
        },
    ];

    const settings: Settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        adaptiveHeight: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
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
                <div className="testi-slider">
                    <Slider
                        ref={sliderRef}
                        {...settings}
                    >
                        {testimonialsRes.map((testimonial, index) => (
                            <article
                                key={`${testimonial.name}-${index}`}
                                className="px-1.5"
                            >
                                <div className="group overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-xl">

                                    {/* Image / Placeholder */}
                                    <div className="flex h-60 items-center justify-center overflow-hidden bg-[#F1EDE7]">
                                        <div className="text-secondary/30 text-6xl font-bold">
                                            "
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">

                                        {/* Rating */}
                                        <ul className="mb-3 flex items-center gap-1">
                                            {Array.from({ length: 5 }).map((_, starIndex) => (
                                                <li
                                                    key={starIndex}
                                                    className={
                                                        starIndex < testimonial.rating
                                                            ? "text-[#FFAE00]"
                                                            : "text-gray-300"
                                                    }
                                                >
                                                    ★
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Review */}
                                        <p className="mb-5 leading-7 text-gray-600">
                                            {testimonial.review}
                                        </p>

                                        {/* Customer */}
                                        <h3 className="text-coff_black mb-1 text-lg font-semibold transition group-hover:text-secondary">
                                            {testimonial.name}
                                        </h3>

                                        {/* Location */}
                                        <p className="text-sm text-gray-500">
                                            {testimonial.location}
                                        </p>

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

export default ProReviews;