import { ArrowRight } from "lucide-react";

export default function BrowseByCategory() {
  const categories = [
    { title: "Regular Slotted Container (RSC)" },
    { title: "Die-Cut Boxes" },
    { title: "Partitioned Boxes" },
    { title: "Top-Bottom Lid Boxes" },
    { title: "Tote Boxes / Nestable Bins" },
    { title: "Folding / Knock-Down Boxes" },
  ];

  return (
    <section className="flex w-full justify-center bg-[rgba(255,178,1,0.05)] py-20">
      <div className="flex w-[1560px] flex-col gap-16">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="font-kanit text-[40px] leading-[56px] tracking-[-0.96px] text-[#39302A]">
            Browse by Category
          </h2>

          <button className="flex items-center gap-2 rounded-full border border-[#0C5170] bg-[#FFFBF2] px-6 py-3 text-[#0C5170] transition hover:bg-[#0C5170] hover:text-white">
            <span className="text-[16px]">View all</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-x-12 gap-y-16">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-8"
            >
              {/* Dummy Image */}
              <div className="h-[269px] w-[489px] rounded-[25px] bg-[#E6E6E6] flex items-center justify-center">
                <span className="text-sm text-gray-500">
                  Dummy Image
                </span>
              </div>

              {/* Title */}
              <p className="font-kanit text-[24px] leading-[36px] text-[#101E28] text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Shop Now Button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-4 rounded-full bg-[#FFB201] px-8 py-3 text-white">
            <span className="font-kanit text-[24px]">Shop now</span>
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
