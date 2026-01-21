"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function CTA() {
  /* ---------- FORM STATE ---------- */
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [productType, setProductType] = useState("Polypropylene Box");
  const [dimension, setDimension] = useState(`6" × 4" × 3"`);
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const payload = {
      fullName,
      email,
      productType,
      dimension,
      message,
    };

    console.log("FORM DATA:", payload);
    // send to API here
  };

  return (
    <section className="relative w-full h-full p-20">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/cta-bg.jpg"
          alt="Warehouse background"
          fill
          className="object-cover"
        />
        {/* IMPORTANT FIX */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-400 gap-20 mx-auto h-full flex ">
        {/* LEFT CONTENT */}
        <div className="ml-44.75 max-w-184.25 text-white">
          <h2 className="font-kanit text-[56px] leading-21 font-semibold text-[#EEEEEE]">
            Let’s Build Your <br />
            Packaging Solution Together
          </h2>

          <div className="mt-10 space-y-6 w-112.75">
            <InfoCard>
              <Mail size={24} className="text-[#FFB201]" />
              <a
                href="mailto:yanapackaging@mail.com"
                className="font-kanit text-[20px] underline"
              >
                yanapackaging@mail.com
              </a>
            </InfoCard>

            <InfoCard>
              <Phone size={24} className="text-[#FFB201]" />
              <span className="font-kanit text-[20px]">
                +91-9999999999
              </span>
            </InfoCard>

            <InfoCard>
              <MapPin size={24} className="text-[#FFB201]" />
              <span className="font-kanit text-[20px]">
                Gurugram, Haryana
              </span>
            </InfoCard>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className=" bg-black/20 rounded-[30px] backdrop-blur-2xl">
          <div className="p-12 h-full flex flex-col justify-between gap-10">
            <div className="space-y-10">
              <FormInput
                label="Full Name"
                value={fullName}
                onChange={setFullName}
              />

              <FormInput
                label="Your email"
                value={email}
                onChange={setEmail}
                muted
              />

              {/* PRODUCT TYPE */}
              <OptionGroup
                label="Select Product Type"
                value={productType}
                onChange={setProductType}
                options={[
                  "Polypropylene Box",
                  "Clamshell Packaging",
                  "Plastic Storage",
                  "Custom Packaging Solution",
                  "Other",
                ]}
              />

              {/* DIMENSIONS */}
              <OptionGroup
                label="Dimensions (L × W × H in inch)*"
                value={dimension}
                onChange={setDimension}
                options={[
                  `6" × 4" × 3"`,
                  `12" × 8" × 6"`,
                  `24" × 16" × 12"`,
                  `10" × 8" × 2"`,
                  "Custom Design",
                ]}
              />

              <FormInput
                label="Your message"
                value={message}
                onChange={setMessage}
                muted
              />
            </div>

            <button
              onClick={handleSubmit}
              className="mx-auto flex items-center gap-2 bg-[#FFB201] text-white font-kanit text-[24px] px-8 py-3 rounded-full"
            >
              Get Quote
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- REUSABLE COMPONENTS ---------- */

function InfoCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 bg-[rgba(255,178,1,0.4)] p-6 rounded-2xl">
      {children}
    </div>
  );
}

function FormInput({
  label,
  value,
  onChange,
  muted = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  muted?: boolean;
}) {
  return (
    <div>
      <label
        className={`block font-kanit text-[20px] ${
          muted ? "text-white/50" : "text-white"
        }`}
      >
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-transparent border-b-[1.5px] mt-2 outline-none text-white
          ${muted ? "border-white/50" : "border-white"}`}
      />
    </div>
  );
}

function OptionGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="font-kanit text-[20px] text-white mb-4">
        {label}
      </p>
      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <Option
            key={option}
            active={value === option}
            onClick={() => onChange(option)}
          >
            {option}
          </Option>
        ))}
      </div>
    </div>
  );
}

function Option({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-6 py-4 rounded-lg font-kanit text-[20px] border-2 transition
        ${
          active
            ? "bg-white text-black border-white font-medium"
            : "border-white/50 text-white/50"
        }`}
    >
      {children}
    </button>
  );
}
