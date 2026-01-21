import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image"
export default function BrowseByCategory() {
const categories = [
  { title: "Regular Slotted Container (RSC)", image: "/home-page/banner-1.jpg" },
  { title: "Die-Cut Boxes", image: "/home-page/banner-1.jpg" },
  { title: "Partitioned Boxes", image: "/home-page/banner-1.jpg" },
  { title: "Top-Bottom Lid Boxes", image: "/home-page/banner-1.jpg" },
  { title: "Tote Boxes / Nestable Bins", image: "/home-page/banner-1.jpg" },
  { title: "Folding / Knock-Down Boxes", image: "/home-page/banner-1.jpg" },
];

  return (
    <section className="w-full bg-[rgba(255,178,1,0.05)] py-16 sm:py-20">
      <div className="mx-auto max-w-400 w-full px-4 sm:px-6 lg:px-8 flex flex-col gap-14">

        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-kanit text-3xl sm:text-4xl lg:text-[40px] leading-tight lg:leading-14 tracking-[-0.96px] text-[#39302A]">
            Browse by Category
          </h2>

        <Link
  href="/products"
  className="flex w-fit items-center gap-2 rounded-full border border-[#0C5170] bg-[#FFFBF2] px-6 py-3 text-[#0C5170] transition hover:bg-[#0C5170] hover:text-white"
>
  <span className="text-base">View all</span>
  <ArrowRight size={18} />
</Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-12 lg:gap-y-16">
          {categories.map((item, index) => (
  <div key={index} className="flex flex-col items-center gap-6">
    <div className="w-full aspect-video max-w-130 rounded-2xl bg-[#E6E6E6] overflow-hidden flex items-center justify-center">
      <Image
        src={item.image}
        alt={item.title}
        width={520}
        height={292}
        className="object-cover w-full h-full"
      />
    </div>
    <p className="font-kanit text-lg sm:text-xl lg:text-[24px] leading-7 lg:leading-9 text-[#101E28] text-center">
      {item.title}
    </p>
  </div>
))}

        </div>

        {/* Shop Now Link */}
<div className="flex justify-center pt-4">
  <Link
    href="#"
    className="flex items-center gap-3 rounded-full bg-[#FFB201] px-8 py-3 text-white transition hover:opacity-90"
  >
    <span className="font-kanit text-lg sm:text-xl lg:text-[24px]">
      Shop now
    </span>
    <ArrowRight size={22} />
  </Link>
</div>
      </div>
    </section>
  );
}
