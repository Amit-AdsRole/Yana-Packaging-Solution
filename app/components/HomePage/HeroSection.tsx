"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  "/products-img/product-1.jpeg",
  "/products-img/product-2.jpeg",
  "/products-img/product-7.jpeg",
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
    <section className="bg-[#FFF9F0] py-20 sm:py-32 md:py-40 w-full">
      <div className="mx-auto max-w-405 px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-24">
        
        {/* LEFT CONTENT */}
        <div className="max-w-full md:max-w-180 text-center md:text-left">
          <h1 className="font-kanit text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-tight text-[#0C5170]">
            Innovative Packaging <br />
            Solutions for{" "}
            <span className="text-[#FFB201]">Every Industry</span>
          </h1>

          <p className="mt-4 max-w-full sm:max-w-180 mx-auto md:mx-0 font-kanit text-base sm:text-lg md:text-[20px] leading-relaxed text-[#6B6B6B]">
            Durable, customizable, and eco-friendly polypropylene boxes & PET blister trays designed for precision and performance.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start sm:gap-6 gap-4">
  <Link href="/contact">
    <button className="rounded-full bg-[#FFB201] px-6 py-3 sm:py-2 font-kanit text-lg sm:text-[24px] font-medium text-white shadow w-full sm:w-auto">
      Get Quote →
    </button>
  </Link>
 <Link href="/contact">
  <button className="font-kanit text-lg sm:text-[24px] font-medium text-[#0C5170] w-full sm:w-auto">
    Explore Products
  </button>
  </Link>
</div>

          {/* Rating */}
          <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
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
              <p className="font-kanit text-sm sm:text-[14px] font-medium text-black">
                Rated 4.8/5
              </p>
              <p className="font-kanit text-xs sm:text-[12px] text-[#777]">
                Across Multiple Platforms
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div className="relative w-full max-w-105">
          <div className="overflow-hidden rounded-4xl">
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
                  active === i ? "w-4 bg-[#0C5170]" : "w-2 bg-[#D9D9D9]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
