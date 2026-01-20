import { ArrowRight } from "lucide-react";

export default function ExpertiseSection() {
  return (
    <section className="flex justify-center px-[100px] pb-[80px]">
      <div className="flex w-[1286px] flex-col gap-10">

        {/* CARD 1 – Industry Expertise */}
        <div className="relative h-[436px] rounded-[30px] bg-[#FFB201]">
          {/* Content */}
          <div className="absolute left-[64px] top-1/2 -translate-y-1/2 flex w-[400px] flex-col gap-[52px]">
            <div className="flex flex-col gap-4">
              <h3 className="font-kanit text-[40px] font-medium leading-[56px] tracking-[-0.96px] text-[#454545]">
                Industry Expertise
              </h3>
              <p className="font-kanit text-[22px] leading-[32px] text-[#454545]">
                Years of experience in precision packaging.
              </p>
            </div>

            <button className="flex w-[250px] items-center justify-center gap-2 rounded-full border border-[#454545] px-8 py-4 text-[#454545]">
              <span className="text-[20px]">Learn more</span>
              <ArrowRight className="-rotate-90" size={20} />
            </button>
          </div>

          {/* Dummy Image */}
          <div className="absolute right-[24px] top-1/2 h-[388px] w-[605px] -translate-y-1/2 rounded-[25px] bg-[#E6E6E6] flex items-center justify-center">
            Dummy Image
          </div>
        </div>

        {/* CARD 2 – Eco-Friendly Materials */}
        <div className="relative h-[436px] rounded-[30px] bg-[rgba(12,81,112,0.1)]">
          {/* Image */}
          <div className="absolute left-[24px] top-[24px] h-[388px] w-[605px] rounded-[25px] bg-[#E6E6E6] flex items-center justify-center">
            Dummy Image
          </div>

          {/* Content */}
          <div className="absolute right-[64px] top-1/2 -translate-y-1/2 flex w-[400px] flex-col gap-[52px]">
            <div className="flex flex-col gap-4">
              <h3 className="font-kanit text-[40px] font-medium leading-[56px] tracking-[-0.96px] text-[#454545]">
                Eco-Friendly Materials
              </h3>
              <p className="font-kanit text-[20px] leading-[32px] text-[#454545]">
                Sustainable, recyclable, and safe.
              </p>
            </div>

            <button className="flex w-[250px] items-center justify-center gap-2 rounded-full border border-[#454545] px-8 py-4 text-[#454545]">
              <span className="text-[20px]">Learn more</span>
              <ArrowRight className="-rotate-90" size={20} />
            </button>
          </div>
        </div>

        {/* CARD 3 – Quality Assurance */}
        <div className="relative h-[436px] rounded-[30px] bg-[#0C5170]">
          {/* Content */}
          <div className="absolute left-[64px] top-1/2 -translate-y-1/2 flex w-[400px] flex-col gap-[52px]">
            <div className="flex flex-col gap-4">
              <h3 className="font-kanit text-[40px] font-medium leading-[56px] tracking-[-0.96px] text-white">
                Quality Assurance
              </h3>
              <p className="font-kanit text-[20px] leading-[32px] text-white">
                Strict standards for durability & safety.
              </p>
            </div>

            <button className="flex w-[250px] items-center justify-center gap-2 rounded-full border border-white px-8 py-4 text-white">
              <span className="text-[20px]">Learn more</span>
              <ArrowRight className="-rotate-90" size={20} />
            </button>
          </div>

          {/* Dummy Image */}
          <div className="absolute right-[24px] top-1/2 h-[388px] w-[605px] -translate-y-1/2 rounded-[25px] bg-[#E6E6E6] flex items-center justify-center text-white">
            Dummy Image
          </div>
        </div>

      </div>
    </section>
  );
}
