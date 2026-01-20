"use client";

import { Upload, PenTool, Archive } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto flex w-[1560px] flex-col gap-10">
        {/* Title */}
        <h2 className="flex h-[56px] w-[316px] items-center font-kanit text-[40px] font-normal leading-[56px] tracking-[-0.96px] text-[#39302A]">
          About our product
        </h2>

        {/* Cards Row */}
        <div className="flex h-[244px] w-[1560px] items-start gap-[192px]">
          {/* Card 1 */}
          <div className="flex h-[244px] w-[392px] flex-col items-center gap-7 rounded-[25px] bg-white py-8 shadow-[0_0_10px_rgba(0,0,0,0.12)]">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[rgba(227,227,227,0.45)]">
              <Upload className="h-12 w-12 text-black" strokeWidth={3} />
            </div>

            <p className="flex h-[72px] w-[376px] items-center text-center font-kanit text-[20px] font-normal leading-[32px] text-[#39302A]">
              Built with strong polypropylene and PET materials for long-lasting
              performance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex h-[244px] w-[392px] flex-col items-center gap-7 rounded-[25px] bg-white py-8 shadow-[0_0_10px_rgba(0,0,0,0.12)]">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[rgba(227,227,227,0.45)]">
              <PenTool className="h-12 w-12 text-black" strokeWidth={3} />
            </div>

            <p className="flex h-[72px] w-[373px] items-center text-center font-kanit text-[20px] font-normal leading-[32px] text-[#39302A]">
              Packaging solutions tailored to your product’s exact requirements.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex h-[244px] w-[392px] flex-col items-center gap-7 rounded-[25px] bg-white py-8 shadow-[0_0_10px_rgba(0,0,0,0.12)]">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[rgba(227,227,227,0.45)]">
              <Archive className="h-12 w-12 text-black" strokeWidth={3} />
            </div>

            <p className="flex h-[72px] w-[353px] items-center text-center font-kanit text-[20px] font-normal leading-[32px] text-[#39302A]">
              Recyclable and sustainable options to reduce environmental impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
