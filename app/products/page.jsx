import Image from "next/image";
import BrowseByCategory from "../components/HomePage/BrowseByCategory";
import ApplicationBased from "../components/Products/ApplicationBased";
import ProductsFaq from "../components/Products/ProductsFaq";

export default function ProductsPage() {
  return (
    <>
    <section className="relative bg-[rgba(255,178,1,0.05)] w-full ">
      <div className="max-w-385 mx-auto rounded-[30px] overflow-hidden">
        {/* Background image with overlay */}
      <div className="relative w-full h-[50vh] md:h-130">
        <Image
          src="/pages-img/page-banner.png"
          alt="Product Range Banner"
          fill
          className="object-cover rounded-[30px]"
        />
        <div className="absolute inset-0 bg-black/60 rounded-[30px]" />
      </div>

      {/* Text content */}
      <h1 className="relative left-6 md:left-12 bottom-12 md:bottom-38 z-20 text-white font-kanit font-normal text-5xl sm:text-6xl md:text-[120px] leading-tight sm:leading-20 md:leading-35 max-w-full md:max-w-222 tracking-[-0.02em]">
        Explore Our Wide <span className="text-black"> Product Range</span>
      </h1>
      </div>
    </section>
     <BrowseByCategory />
     <ApplicationBased />
     <ProductsFaq />

    </>
  );
}
