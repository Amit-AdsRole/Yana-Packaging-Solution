import Image from "next/image";
import HeroSection from "./components/HomePage/HeroSection";
import AboutSection from "./components/HomePage/AboutSection";
import BrowseByCategory from "./components/HomePage/BrowseByCategory";
import ExpertiseSection from "./components/HomePage/ExpertiseSection"
import BlogSection from "./components/HomePage/BlogSection"

export default function Home() {
  return (
    <div className="">
    <HeroSection />
    <AboutSection />
    <BrowseByCategory />
    <ExpertiseSection />
    <BlogSection />
    </div>
  );
}
