import Image from "next/image"; 
import BlogSection from "../components/HomePage/BlogSection";
import Cta from "../components/Cta";
import ProductDetailsFaq from "../components/ProductDetails/ProductDetailsFaq";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function BlogDetails() {
  return (
    <>
    
      <section className="w-full bg-white py-25">
        <div className="mx-auto max-w-275 px-6">
            <p className="mb-4 text-[20px] font-kanit text-gray-500 flex items-center gap-2">
      <Link href="/" className="hover:text-[#161C2D]">
        Home
      </Link>

      <ChevronRight size={16} />

      <Link href="/blog" className="hover:text-[#161C2D]">
        Blog
      </Link>

      <ChevronRight size={16} />

      <span className="text-[#161C2D] font-medium">
       5 Benefits of Using Polypropylene Boxes in Industrial Packaging
      </span>
    </p>
          {/* Hero Image */}
          <div className="relative w-full h-90 rounded-2xl overflow-hidden mb-8">
            <Image
              src="/home-page/banner-1.jpg"
              alt="Polypropylene Boxes"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="font-kanit text-[32px] md:text-[36px] font-semibold text-[#161C2D] mb-2">
            5 Benefits of Using Polypropylene Boxes in Industrial Packaging
          </h1>

          {/* Meta */}
          <p className="font-kanit text-sm text-gray-500 mb-8">
            Monday, May 20
          </p>

          {/* Content */}
          <article className="flex flex-col gap-5 font-kanit text-[#4A4A4A]">
            <p>
              In today’s competitive market, industries are constantly looking for
              packaging solutions that are durable, affordable, and sustainable.
              Polypropylene (PP) boxes have quickly become a preferred choice for
              industrial packaging due to their unique advantages over traditional
              materials.
            </p>

            <p>
              Polypropylene (PP) boxes are rapidly gaining popularity in industrial
              packaging because they combine durability, cost-effectiveness, and
              sustainability in one solution. Designed to withstand impact,
              moisture, and harsh conditions, these boxes ensure products remain
              safe during storage and transit.
            </p>

            <p>
              Their lightweight design reduces overall shipping costs while making
              handling easier for workers in warehouses and logistics. Unlike
              disposable packaging, PP boxes are reusable and long-lasting,
              providing businesses with excellent value over time.
            </p>

            <p>
              Another major benefit is their eco-friendly nature—polypropylene is
              recyclable, making it a responsible choice for companies committed
              to reducing their environmental footprint.
            </p>

            <p>
              PP boxes are highly versatile and can be customized in size, shape,
              and color to meet specific requirements of different industries.
              Whether used in pharmaceuticals, food storage, electronics, or
              automotive components, they adapt easily to a wide range of
              applications.
            </p>

            <h2>1. Strength & Durability</h2>

            <p>
              One of the most important requirements of industrial packaging is
              strength. Products often face long shipping journeys, frequent
              handling, stacking in warehouses, and rough environmental
              conditions. Weak packaging can lead to product damage, increased
              returns, and higher costs for businesses.
            </p>

            <p>
              Polypropylene boxes are capable of withstanding heavy loads and
              protecting contents from pressure, vibrations, and rough handling.
              Unlike cardboard boxes, which can weaken when exposed to moisture or
              repeated use, PP boxes maintain their integrity over time.
            </p>

            <h2>2. Lightweight Design for Cost Efficiency</h2>

            <p>
              While strength is essential, weight is equally important in
              industrial packaging. Heavy packaging materials increase shipping
              costs and reduce efficiency in handling. Polypropylene offers the
              perfect balance—it is significantly lighter than many alternatives
              while still retaining exceptional strength.
            </p>

            <p>
              This lightweight nature helps reduce freight charges and improves
              worker safety by minimizing strain during lifting and transport.
            </p>

            <h2>3. Reusability & Long-Term Value</h2>

            <p>
              Unlike single-use packaging, polypropylene boxes are highly reusable.
              They can withstand repeated use without losing their shape or
              strength, making them ideal for supply chain operations that require
              frequent movement of goods.
            </p>

            <p>
              Over time, this reusability significantly reduces packaging costs
              while aligning with lean manufacturing and sustainability practices.
            </p>
          </article>
        </div>
      </section>

      <Cta />
      <ProductDetailsFaq />
    </>
  );
}
