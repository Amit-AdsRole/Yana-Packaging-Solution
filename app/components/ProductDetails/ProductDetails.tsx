"use client";

import Image from "next/image";
import { useState } from "react";

const thumbnails = [
  "/product-1.png",
  "/product-1.png",
  "/product-1.png",
  "/product-1.png",
];

const tabs = [
  {
    label: "Description",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Polypropylene storage boxes provide excellent durability, chemical resistance, and long service life.",
  },
  {
    label: "Applications",
    content:
      "Lorem ipsum dolor sit amet. Commonly used in logistics, warehousing, automotive, pharmaceutical, and food industries. Ideal for safe storage and transportation of components and materials.",
  },
  {
    label: "Dimensions",
    content:
      "Lorem ipsum dolor sit amet. Available in multiple standard sizes such as 12×8×6 inches, 14×10×8 inches, and custom dimensions based on client requirements.",
  },
  {
    label: "Types of Product Available",
    content:
      "Lorem ipsum dolor sit amet. Open bins, closed boxes, stackable crates, collapsible containers, and custom-molded polypropylene storage solutions.",
  },
];

export default function ProductDetails() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full ">
      <div className="conatiner flex flex-col gap-20 pt-30 pb-20">
        {/* Product Section */}
      <div className="relative max-w-380 mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 pt-10 px-4">
        {/* Left Images */}
        <div className=" w-full h-full flex">
          {/* Side Thumbnails */}
          <div className="flex flex-col gap-2.5">
            {thumbnails.map((src, index) => (
              <div
                key={index}
                className="w-17.25 h-17.5 border border-[#E7E9ED] rounded-[15px] overflow-hidden bg-black"
              >
                <Image
                  src={src}
                  alt={`thumbnail ${index + 1}`}
                  width={69}
                  height={70}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="ml-5.75 flex items-center justify-center  bg-white border border-[#E7E9ED] rounded-[30px] overflow-hidden">
            <Image
              src="/product-1.png"
              alt="product"
              width={700}
              height={462}
              className="rounded-[25px] object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full flex flex-col gap-6.25">
          <div className="flex flex-col gap-3">
            <h1 className="text-[36px] font-semibold text-[#161C2D] leading-12 tracking-[-1.2px]">
              Polypropylene Storage Box
            </h1>

            <p className="text-[20px] font-semibold text-[#454545]">
              Product Type: Industrial Packaging Solution
            </p>

            <p className="text-[20px] font-semibold text-[#454545]">
              Dimensions (L × W × H): 12&quot; × 8&quot; × 6&quot;
            </p>

            <p className="text-[20px] font-semibold text-[#454545]">
              Material: High-quality Polypropylene (PP)
            </p>

            <p className="text-[20px] font-semibold text-[#454545]">
              Available Colors: Transparent / Blue / Black
            </p>

            <p className="text-[20px] font-semibold text-[#454545] leading-7.5 tracking-[-0.5px] w-91">
              <span className="block">Key Features:</span>
              • Durable & reusable design <br />
              • Lightweight and stackable <br />
              • Multiple size options <br />
              • Custom branding available <br />
              • Eco-friendly & recyclable
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-2.5">
            <button className="px-8 py-2.25 bg-[#FFB201] text-white text-[20px] rounded-[30px]">
              Contact Us
            </button>

            <button className="px-8 py-2.25 border border-[#E7E9ED] text-[#161C2D] text-[20px] rounded-[30px]">
              Request a Quote
            </button>
          </div>
        </div>
      </div>

      {/* Details Tabs */}
      <div className="md:w-277.5 w-full mx-auto px-5 ">
        {/* Tabs Header */}
        <div className="flex gap-2 md:gap-12.75 mb-6 md:flex-row flex-col ">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              className="flex flex-col gap-4 cursor-pointer group"
            >
              <span
                className={`text-[24px] transition-all duration-200 ${
                  activeTab === index
                    ? "font-medium text-[#0C5170]"
                    : "font-normal text-[#0C5170] opacity-70 group-hover:opacity-100"
                }`}
              >
                {tab.label}
              </span>

              {/* Underline */}
              <div
                className={`h-px transition-all duration-300 ${
                  activeTab === index
                    ? "bg-[#054C6C]"
                    : "bg-transparent group-hover:bg-[#054C6C]/50"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Tab Content */}
        <p className="text-[20px] font-light leading-8 tracking-[-0.2px] text-black">
          {tabs[activeTab].content}
        </p>
      </div>
      </div>
    </section>
  );
}
