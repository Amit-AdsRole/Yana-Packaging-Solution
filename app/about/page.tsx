"use client";
import HeroSection from "../components/AboutUs/HeroSection";
import MissionVision from "../components/AboutUs/MissionVision";
import ValueProposition from "../components/AboutUs/ValueProposition";
import Cta from "../components/Cta";
import ProductDetailsFaq from "../components/ProductDetails/ProductDetailsFaq";


export default function About() {
  return (
    <>
      <HeroSection />
      <ValueProposition />
      <MissionVision />
      <Cta />
      <ProductDetailsFaq />
    </>
  );
}
