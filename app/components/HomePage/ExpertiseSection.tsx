import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ExpertiseSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-350 w-full px-4 sm:px-6 lg:px-8 flex flex-col gap-12">

        {/* CARD 1 – Industry Expertise */}
        <div className="relative overflow-hidden rounded-3xl bg-[#FFB201]">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 p-4 lg:p-8">

            {/* Content */}
            <div className="flex flex-col gap-10 max-w-md">
              <div className="flex flex-col gap-4">
                <h3 className="font-kanit text-3xl lg:text-[40px] leading-tight lg:leading-14 tracking-[-0.96px] text-[#454545]">
                  Industry Expertise
                </h3>
                <p className="font-kanit text-lg lg:text-[22px] leading-7 lg:leading-8 text-[#454545]">
                  Years of experience in precision packaging.
                </p>
              </div>

              <Link
                href="#"
                className="flex w-fit items-center justify-center gap-2 rounded-full border border-[#454545] px-8 py-4 text-[#454545] transition hover:bg-[#454545] hover:text-white"
              >
                <span className="text-lg lg:text-[20px]">Learn more</span>
                <ArrowRight className="-rotate-90" size={20} />
              </Link>
            </div>

            {/* Image */}
           <div className="w-full aspect-3/2 relative rounded-2xl bg-[#E6E6E6] overflow-hidden flex items-center justify-center">
  <Image
    src="/products-img/product-8.jpeg"
    alt="Banner 1"
    width={1200}
    height={800}
    className="object-cover w-full h-full"
  />
  
</div>
          </div>
        </div>

        {/* CARD 2 – Eco-Friendly Materials */}
        <div className="relative overflow-hidden rounded-3xl bg-[rgba(12,81,112,0.1)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 p-4 lg:p-8">

            {/* Image */}
            <div className="w-full aspect-3/2 relative rounded-2xl bg-[#E6E6E6] overflow-hidden flex items-center justify-center">
              <Image
    src="/products-img/product-9.png"
    alt="Banner 1"
    width={1200}
    height={800}
    className="object-cover w-full h-full"
  />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 flex flex-col gap-10 max-w-md ">
              <div className="flex flex-col gap-4">
                <h3 className="font-kanit text-3xl lg:text-[40px] leading-tight lg:leading-14 tracking-[-0.96px] text-[#454545]">
                  Eco-Friendly Materials
                </h3>
                <p className="font-kanit text-lg lg:text-[20px] leading-7 lg:leading-8 text-[#454545]">
                  Sustainable, recyclable, and safe.
                </p>
              </div>

              <Link
                href="#"
                className="flex w-fit items-center justify-center gap-2 rounded-full border border-[#454545] px-8 py-4 text-[#454545] transition hover:bg-[#454545] hover:text-white"
              >
                <span className="text-lg lg:text-[20px]">Learn more</span>
                <ArrowRight className="-rotate-90" size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* CARD 3 – Quality Assurance */}
        <div className="relative overflow-hidden rounded-3xl bg-[#0C5170]">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 p-4 lg:p-8">

            {/* Content */}
            <div className="flex flex-col gap-10 max-w-md">
              <div className="flex flex-col gap-4">
                <h3 className="font-kanit text-3xl lg:text-[40px] leading-tight lg:leading-14 tracking-[-0.96px] text-white">
                  Quality Assurance
                </h3>
                <p className="font-kanit text-lg lg:text-[20px] leading-7 lg:leading-8 text-white">
                  Strict standards for durability & safety.
                </p>
              </div>

              <Link
                href="#"
                className="flex w-fit items-center justify-center gap-2 rounded-full border border-white px-8 py-4 text-white transition hover:bg-white hover:text-[#0C5170]"
              >
                <span className="text-lg lg:text-[20px]">Learn more</span>
                <ArrowRight className="-rotate-90" size={20} />
              </Link>
            </div>

            {/* Image */}
            <div className="w-full aspect-3/2 relative rounded-2xl bg-[#E6E6E6] overflow-hidden flex items-center justify-center">
              <Image
    src="/products-img/product-10.png"
    alt="Banner 1"
    width={1200}
    height={800}
    className="object-cover w-full h-full"
  />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
