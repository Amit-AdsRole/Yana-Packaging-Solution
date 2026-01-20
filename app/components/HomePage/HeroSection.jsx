"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  "/home-page/banner-1.jpg",
  "/home-page/banner-1.jpg",
  "/home-page/banner-1.jpg",
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#FFF9F0] py-60 w-full">
      <div className="mx-auto flex max-w-[1620px] items-center justify-between px-6">
        {/* LEFT CONTENT */}
        <div className="max-w-[720px]">
          <h1 className="font-kanit text-[56px] font-semibold leading-[56px] text-[#0C5170]">
            Innovative Packaging <br />
            Solutions for{" "}
            <span className="text-[#FFB201]">Every Industry</span>
          </h1>

          <p className="mt-4 max-w-[720px] font-kanit text-[20px] leading-[26px] text-[#6B6B6B]">
            Durable, customizable, and eco-friendly polypropylene boxes 
           & PET  blister trays designed for precision and performance.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex items-center gap-6">
            <button className="rounded-full bg-[#FFB201] px-6 py-2 font-kanit text-[24px] font-medium text-white shadow">
              Get Quote →
            </button>

            <button className="font-kanit text-[24px] font-medium text-[#0C5170]">
              Explore Products
            </button>
          </div>

          {/* Rating */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
               <Image
  src="/home-page/group-i.png"
  alt="user"
  width={186}
  height={32}
  className="rounded-full border-2 border-white"
/>

             
              
            </div>

            <div>
              <p className="font-kanit text-[14px] font-medium text-[#000]">
                Rated 4.8/5
              </p>
              <p className="font-kanit text-[12px] text-[#777]">
                Across Multiple Platforms
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div className="relative w-[420px]">
          <div className="overflow-hidden rounded-[32px]">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {slides.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt="Packaging"
                  width={420}
                  height={360}
                  className="min-w-full object-cover"
                />
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all ${
                  active === i
                    ? "w-4 bg-[#0C5170]"
                    : "w-2 bg-[#D9D9D9]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
