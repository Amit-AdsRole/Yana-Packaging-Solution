import Image from "next/image";
import HeroSection from "./components/HomePage/HeroSection";
import AboutSection from "./components/HomePage/AboutSection";
import BrowseByCategory from "./components/HomePage/BrowseByCategory";
import ExpertiseSection from "./components/HomePage/ExpertiseSection"
import BlogSection from "./components/HomePage/BlogSection"
import Cta from "./components/Cta";
import ProductDetailsFaq from "./components/ProductDetails/ProductDetailsFaq";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <BrowseByCategory />
      <ExpertiseSection />
      {/* <BlogSection /> */}
      <Cta />
      <ProductDetailsFaq />
    </div>
  );
}
