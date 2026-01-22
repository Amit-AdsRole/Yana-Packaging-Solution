"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function CTA() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [productType, setProductType] = useState("Polypropylene Box");
  const [dimension, setDimension] = useState(`6" × 4" × 3"`);
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log({
      fullName,
      email,
      productType,
      dimension,
      message,
    });
  };

  return (
    <section className="relative w-full min-h-screen px-6 py-12 lg:p-20">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/cta-bg.jpg"
          alt="Warehouse background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-400 mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">

        {/* LEFT CONTENT */}
        <div className="text-white max-w-xl lg:max-w-185 lg:ml-40">
          <h2 className="font-kanit text-3xl sm:text-4xl lg:text-[56px] leading-tight font-semibold text-[#EEEEEE]">
            Let’s Build Your <br className="hidden sm:block" />
            Packaging Solution Together
          </h2>

          <div className="mt-8 space-y-4 max-w-md">
            <InfoCard>
              <Mail size={22} className="text-[#FFB201]" />
              <a
                href="mailto:yanapackaging@mail.com"
                className="font-kanit text-sm sm:text-base underline"
              >
                yanapackaging@mail.com
              </a>
            </InfoCard>

            <InfoCard>
              <Phone size={22} className="text-[#FFB201]" />
              <span className="font-kanit text-sm sm:text-base">
                <a
                  href="tel:+91-9999999999"
                  className="font-kanit text-sm sm:text-base underline"
                >
                  +91-9999999999</a>
              </span>
            </InfoCard>

            <InfoCard>
              <MapPin size={22} className="text-[#FFB201]" />
              <span className="font-kanit text-sm sm:text-base">
                <a
                  href="#"
                  className="font-kanit text-sm sm:text-base underline"
                >Gurugram, Haryana</a>
              </span>
            </InfoCard>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full lg:w-130 bg-black/20 rounded-2xl lg:rounded-[30px] backdrop-blur-2xl">
          <div className="p-6 sm:p-8 lg:p-12 flex  flex-col gap-8">

            <FormInput label="Full Name" value={fullName} onChange={setFullName} />
            <FormInput label="Your email" value={email} onChange={setEmail} muted />

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

            <button
              onClick={handleSubmit}
              className="mx-auto flex items-center gap-2 bg-[#FFB201]
              text-white font-kanit text-lg sm:text-xl lg:text-2xl
              px-6 py-3 rounded-full"
            >
              Get Quote
              <ArrowRight size={22} />
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
    <div className="flex items-center gap-3 bg-[rgba(255,178,1,0.4)] p-4 sm:p-5 rounded-xl">
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
        className={`block font-kanit text-sm sm:text-base ${muted ? "text-white/50" : "text-white"
          }`}
      >
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-transparent border-b mt-2 outline-none
        text-white text-sm sm:text-base
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
      <p className="font-kanit text-sm sm:text-base text-white mb-3">
        {label}
      </p>
      <div className="flex flex-wrap gap-3">
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
      className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-kanit
      text-sm sm:text-base border-2 transition
      ${active
          ? "bg-white text-black border-white font-medium"
          : "border-white/50 text-white/50"
        }`}
    >
      {children}
    </button>
  );
}
