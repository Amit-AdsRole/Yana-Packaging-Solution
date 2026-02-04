import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FFB2010D] rounded-3xl py-12 px-4 sm:px-8 lg:px-12 max-w-[1686px] mx-auto">
      
      {/* Main Container */}
      <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-28 justify-between">

        {/* LEFT SECTION */}
        <div className="flex flex-col gap-10 max-w-xl">
          
          {/* Logo + Description */}
          <div className="flex flex-col gap-6">
            <Link href="/" aria-label="Go to Home" className="w-fit">
              <Image
                src="/logo.png"
                alt="YANA Packaging Solutions"
                width={360}
                height={56}
                className="cursor-pointer"
                priority
              />
            </Link>

            <p className="text-base leading-relaxed text-black max-w-lg">
              Leading manufacturer of polypropylene boxes and PET blister trays,
              delivering durable, customizable, and eco-friendly packaging
              solutions for industries worldwide.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[Facebook, Linkedin, Instagram].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                aria-label="Social link"
                className="h-10 w-10 rounded-full bg-black flex items-center justify-center transition hover:opacity-80"
              >
                <Icon size={18} className="text-white" />
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm sm:text-base text-black">
            © {new Date().getFullYear()} <a
                  href="/"
                  className="font-kanit text-sm sm:text-base underline" rel="follow"
                >YANA PACKAGING SOLUTIONS.</a> All Rights Reserved.
            <br className="sm:hidden" /> Powered by <a
                  href="https://adsrole.com/"
                  className="font-kanit text-sm sm:text-base underline" rel="nofollow" target="_blank"
                >AdsRole.</a>
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col gap-12">

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-4 text-lg text-black">
            <Link href="/about">About Us</Link>
            {/* <Link href="/blogs">Blogs</Link> */}
            <Link href="/products">Product Range</Link>
            <Link href="/contact">Contacts</Link>
          </nav>

          {/* Contact + Location */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-medium">Contact Us</h4>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+919999999999"
                  className="underline text-lg font-light"
                >
                  +91-9999999999
                </a>
                <a
                  href="mailto:yanapackaging@mail.com"
                  className="underline text-lg font-light"
                >
                  yanapackaging@mail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-medium">Location</h4>
              <p className="text-lg font-light leading-relaxed">
                Gurugram, Haryana
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
