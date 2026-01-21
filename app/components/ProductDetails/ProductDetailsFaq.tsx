"use client";

import { useState } from "react";
import Link from "next/link";

type Faq = {
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  {
    question: "What industries use polypropylene boxes?",
    answer:
      "Polypropylene boxes are widely used in pharmaceuticals, electronics, logistics, food, and retail for safe storage, transportation, and product display.",
  },
  {
    question: "Are PET blister trays recyclable?",
    answer:
      "Yes, PET blister trays are recyclable and can be reused in various manufacturing processes.",
  },
  {
    question: "Do you offer custom sizes and designs?",
    answer:
      "Absolutely! We provide custom sizes and designs tailored to your requirements.",
  },
  {
    question: "What is the minimum order quantity (MOQ)?",
    answer: "Our MOQ varies by product. Please contact us for specific details.",
  },
  {
    question: "Do you provide international shipping?",
    answer:
      "Yes, we ship internationally. Shipping costs and times vary depending on the destination.",
  },
];

export default function ProductsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white flex flex-col items-center px-8 sm:px-25 lg:px-126.25 py-20 gap-24 w-full max-w-480 mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center gap-2 max-w-81.5 text-center">
        <h2 className="font-kanit text-[40px] leading-15 text-[#2E2E27]">
          FAQs
        </h2>
        <p className="font-kanit text-[20px] leading-7.5 text-[#2E2E27]">
          Have a question? We’re here to help.
        </p>
      </div>

      {/* FAQ List */}
      <div className="flex flex-col gap-6 max-w-227.5 w-full">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border-b border-[#F1F1F1] pb-4 relative cursor-pointer"
            onClick={() => toggle(i)}
          >
            <div className="flex justify-between items-center">
              <p className="font-kanit text-[20px] leading-7.5 text-[#2E2E27]">
                {faq.question}
              </p>
              <svg
                className={`w-6 h-6 text-[#2E2E27] transform transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </div>

            {openIndex === i && (
              <p className="font-kanit font-light text-[16px] leading-6 text-[#454545] mt-2 max-w-186.5">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Contact Box */}
      <div className="relative max-w-222 w-full py-5 md:h-32.5 bg-[#0C5170] rounded-[30px] flex flex-col md:flex-row items-center px-8 ">
        <div className="flex flex-col justify-center max-w-135">
          <h4 className="font-kanit text-[24px] leading-9 text-white mb-2">
            Still have questions?
          </h4>
          <p className="font-kanit text-[16px] leading-6 text-white">
            Can’t find the answer you’re looking for? Please get in touch with our
            team.
          </p>
        </div>

        <Link
          href="/contact"
          className="ml-auto mx-auto flex items-center gap-2 bg-white text-[#0C5170] rounded-[25px] px-6 py-3 font-kanit text-[16px] leading-6 hover:opacity-90 transition"
        >
          Get in touch
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="#0C5170"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
