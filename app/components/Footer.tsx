import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FFB2010D] rounded-[30px] px-[34px] py-[48px] max-w-[1686px] mx-auto">
      {/* Main Container */}
      <div className="flex justify-between gap-[120px]">
        {/* LEFT SECTION */}
        <div className="flex flex-col gap-[50px] max-w-[634px]">
          {/* Logo + Description */}
          <div className="flex flex-col gap-[27px]">
            <div className="flex items-center gap-[5px]">
              <Link href="/" aria-label="Go to Home">
    <Image
      src="/logo.png"
      alt="YANA Packaging Solutions"
      width={300}
      height={64}
      className="cursor-pointer"
      priority
    />
  </Link>
              
            </div>

            <p className="text-base leading-[140%] text-black max-w-[566px]">
              Leading manufacturer of polypropylene boxes and PET blister trays,
              delivering durable, customizable, and eco-friendly packaging
              solutions for industries worldwide.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-[10px]">
            {[Facebook, Linkedin, Instagram].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="w-[40px] h-[40px] bg-black rounded-full flex items-center justify-center"
              >
                <Icon size={18} className="text-white" />
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-base text-black">
  © {new Date().getFullYear()} YANA PACKAGING SOLUTIONS. All Rights Reserved.
  Powered by AdsRole.
</p>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col gap-[62px]">
          {/* Navigation Links */}
          <nav className="flex gap-[39px] text-[20px] text-black">
            <Link href="#">About Us</Link>
            <Link href="#">Blogs</Link>
            <Link href="#">Product Range</Link>
            <Link href="#">Contacts</Link>
          </nav>

          {/* Contact + Location */}
          <div className="flex gap-[80px]">
            {/* Contact */}
            <div className="flex flex-col gap-[24px]">
              <h4 className="text-[20px] font-medium">Contact Us</h4>
              <div className="flex flex-col gap-[8px]">
                <a
                  href="tel:+919999999999"
                  className="underline text-[20px] font-light"
                >
                  +91-9999999999
                </a>
                <a
                  href="mailto:yanapackaging@mail.com"
                  className="underline text-[20px] font-light"
                >
                  yanapackaging@mail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-[16px]">
              <h4 className="text-[20px] font-medium">Location</h4>
              <p className="text-[20px] font-light leading-[160%]">
                Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
