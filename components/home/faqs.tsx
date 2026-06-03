"use client";

import React, { useState, useMemo } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Faqs({ faqRes }: any) {
  const items = faqRes?.slice(0, 8) || [];
  const [open, setOpen] = useState<any>();
  const handleFaq = (id: any) => {
    if (open === id) {
      return setOpen(null);
    }
    setOpen(id);
  };

  const faqSchema = useMemo(
    () =>
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item: any) => ({
          "@type": "Question",
          name: item.title,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.description,
          },
        })),
      }),
    [items]
  );

  return (
    <section className="py-[60px] bg-[#F5F5F5]">
      <div className="hale_container grid md:grid-cols-1 gap-6">
        <div id="faqs" className="pt-8">
          <h2 className="h2">
            Frequently Asked <span className="text-[#47AFC3]">Questions</span>
          </h2>
          <div className="mt-10 grid gap-1 grid-cols-1 md:grid-cols-2">
            {items.map((item: any, idx: number) => (
              <div key={idx}>
                <div className="faq-item">
                  <h3 onClick={() => handleFaq(idx)} className="faq-title">
                    {item?.title}
                    <IoIosArrowDown className="text-xl" />
                  </h3>
                  <div
                    className={`transition-all duration-200 faq-content ${
                      open === idx ? "" : "h-0 overflow-hidden"
                    }`}
                  >
                    <p className="text-lg px-6 text-left text-[#1C1C1C] pb-6">
                      {item?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />
    </section>
  );
}

export default Faqs;
