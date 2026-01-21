import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-white py-16 mt-15">
      <div className="mx-auto max-w-7xl px-6">
        {/* Small label */}
        <p className="mb-2 text-xl font-medium text-gray-500">
          About Us –
        </p>

        {/* Heading */}
        <h2 className="mb-10 text-4xl font-bold text-[#FFB201] md:text-4xl">
          Crafting Reliable Packaging Solutions
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/about-us/heroabout.png"
              alt="Packaging manufacturing facility"
              width={800}
              height={500}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* Text */}
          <p className="text-base leading-relaxed text-gray-700">
            Trusted manufacturer of polypropylene boxes & PET trays,
            delivering durable, eco-friendly, and customizable packaging
            solutions for industries worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
