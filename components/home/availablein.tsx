"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const data = [
    {
        title: "United States",
        subtitle: "All 50 states + D.C.",
        content: [
            {
                heading: "West",
                text: "California, Oregon, Washington, Nevada, Arizona, New Mexico, Colorado, Utah, Idaho, Montana, Wyoming, Alaska, Hawaii HQ",
            },
            {
                heading: "South",
                text: "Texas, Florida, Georgia, North Carolina, South Carolina, Tennessee, Virginia, Kentucky, Alabama, Mississippi, Louisiana, Arkansas, Oklahoma, West Virginia",
            },
            {
                heading: "Midwest",
                text: "Illinois, Ohio, Michigan, Indiana, Wisconsin, Minnesota, Missouri, Iowa, Kansas, Nebraska, North Dakota, South Dakota",
            },
            {
                heading: "Northeast",
                text: "New York, Pennsylvania, New Jersey, Massachusetts, Connecticut, Rhode Island, Maine, New Hampshire, Vermont, Delaware, Maryland, Washington D.C.",
            },
        ],
    },
    {
        title: "International",
        subtitle: "50+ countries worldwide",
        content: [
            {
                heading: "North America",
                text: "Canada, Mexico, Puerto Rico, Jamaica, Dominican Republic, Caribbean",
            },
            {
                heading: "Europe",
                text: "United Kingdom, England, France, Italy, Spain, Austria, Germany, Netherlands, Sweden, Norway, Denmark, Ireland",
            },
            {
                heading: "Latin America",
                text: "Colombia, Brazil, Costa Rica, Guatemala, El Salvador, Honduras, Nicaragua, Panama, Peru, Ecuador, Chile, Venezuela",
            },
            {
                heading: "Asia-Pacific",
                text: "Australia, Japan, South Korea, Singapore, New Zealand, Philippines, Indonesia, Taiwan",
            },
            {
                heading: "Middle East & Africa",
                text: "United Arab Emirates, Saudi Arabia, East Africa, Qatar, Kuwait, South Africa, Kenya, Ethiopia",
            },
        ],
    },
];

export default function AvailableWorldwide() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="py-10">
            <div className="hale_container flex flex-col items-center justify-center">
                <h2 className="h2">Available Worldwide</h2>

                <div className="pt-8 w-full">
                    <div className="max-w-[1080px] mx-auto grid gap-5">
                        {data.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-primary rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between md:px-8 px-4 md:py-5.5 py-3 text-left"
                                >
                                    <span className="text-lg font-normal text-title_Clr">
                                        {faq.title}{" "}
                                        <span className="text-xs font-normal text-primary">
                                            {faq.subtitle}
                                        </span>
                                    </span>

                                    <FaChevronDown
                                        className={`transition-transform duration-300 text-primary ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index
                                        ? "max-h-[600px] border-t border-primary"
                                        : "max-h-0"
                                        }`}
                                >
                                    <div className="md:px-8 px-4 md:py-5.5 py-3 grid md:grid-cols-2 grid-cols-1 gap-5">
                                        {faq.content.map((item, i) => (
                                            <div key={i}>
                                                <h4 className="text-base font-normal text-title_Clr mb-3">
                                                    {item.heading}
                                                </h4>
                                                <p className="text-sm font-normal text-txt_Clr">
                                                    {item.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}