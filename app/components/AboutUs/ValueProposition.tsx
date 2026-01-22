export default function ValueProposition() {
  return (
    <section className="w-full bg-white md:py-20 py-05 relative">
        <p className="w-px h-37.5 absolute bg-[#FFB201] right-[50%] md:top-28.75 hidden md:block"></p>
        <p className="absolute left-[22%] w-[50%] md:top-11.25 -top-8 h-px bg-[#FFB201]"> </p>
      <div className="mx-auto max-w-7xl px-6 ">
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
          {/* Left Heading */}
          <h2 className="font-kanit max-w-md text-3xl font-bold leading-tight text-black md:text-4xl">
            Packaging that protects,
            <br />
            performs, and lasts.
          </h2>

          {/* Right Content */}
          <div className="space-y-8 text-gray-700  md:pl-10 pl-0">
            <p className="font-kanit font-light  text-[20px] leading-relaxed">
              Trusted manufacturer of polypropylene boxes & PET trays,
              delivering durable, eco-friendly, and customizable packaging
              solutions for industries worldwide.
            </p>

            <div>
              <h3 className="font-kanit text-[24px] mb-2 font-semibold text-black">
                Eco-Friendly & Durable
              </h3>
              <p className="font-kanit font-light  text-[20px] leading-relaxed">
                Sustainable materials designed to last and reduce
                environmental impact.
              </p>
            </div>

            <div>
              <h3 className="font-kanit text-[24px] mb-2 font-semibold text-black">
                Custom-Fit Solutions
              </h3>
              <p className="font-kanit font-light  text-[20px] leading-relaxed">
                Tailored packaging sizes and designs to meet every
                industry’s unique needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
