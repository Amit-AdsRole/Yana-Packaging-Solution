"use client";

import { Upload, PenTool, Archive } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        
        {/* Title */}
        <h2 className="font-kanit text-3xl sm:text-4xl lg:text-[40px] font-normal leading-tight tracking-[-0.96px] text-[#39302A]">
          About our product
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
          
          {/* Card 1 */}
          <div className="flex flex-col items-center gap-6 rounded-2xl bg-white py-8 px-6 shadow-[0_0_10px_rgba(0,0,0,0.12)]">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[rgba(227,227,227,0.45)]">
              <Upload className="h-12 w-12 text-black" strokeWidth={3} />
            </div>
            <p className="text-center font-kanit text-lg sm:text-xl leading-7 sm:leading-8 text-[#39302A]">
              Built with strong polypropylene and PET materials for long-lasting
              performance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center gap-6 rounded-2xl bg-white py-8 px-6 shadow-[0_0_10px_rgba(0,0,0,0.12)]">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[rgba(227,227,227,0.45)]">
              <PenTool className="h-12 w-12 text-black" strokeWidth={3} />
            </div>
            <p className="text-center font-kanit text-lg sm:text-xl leading-7 sm:leading-8 text-[#39302A]">
              Packaging solutions tailored to your product’s exact requirements.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center gap-6 rounded-2xl bg-white py-8 px-6 shadow-[0_0_10px_rgba(0,0,0,0.12)]">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[rgba(227,227,227,0.45)]">
              <Archive className="h-12 w-12 text-black" strokeWidth={3} />
            </div>
            <p className="text-center font-kanit text-lg sm:text-xl leading-7 sm:leading-8 text-[#39302A]">
              Recyclable and sustainable options to reduce environmental impact.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
