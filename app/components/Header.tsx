'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  // { label: 'Blog', href: '/blogs' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header
        className="
          absolute md:top-11 top-9 left-1/2 -translate-x-1/2
          w-full max-w-480 px-4 h-18
          bg-white shadow-[0px_2px_5px_rgba(0,0,0,0.1)]
          flex items-center justify-center z-30
        "
      >
        <div className="w-389.75 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" aria-label="Go to Home">
            <Image
              src="/logo.png"
              alt="Yana Packaging Solutions"
              width={300}
              height={50}
            />
          </Link>

          {/* Desktop Navigation (UNCHANGED UI) */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <div key={item.href} className="flex flex-col items-center gap-0.75">
                  <Link
                    href={item.href}
                    className={`
                      font-[Kanit] text-[20px]
                      ${isActive
                        ? 'font-semibold text-[#FFB201]'
                        : 'font-light text-[#151D20]'
                      }
                    `}
                  >
                    {item.label}
                  </Link>

                  {isActive && (
                    <span className="w-17 border-2 border-[#FFB201]" />
                  )}
                </div>
              );
            })}
          </nav> 

          {/* CTA Button (Desktop only) */}
          <Link
            href="/contact"
            className="
              hidden md:flex items-center justify-center gap-2
              w-47.25 h-12
              bg-[#FFB201]
              rounded-[30px]
              font-[Kanit]
              font-normal
              text-[24px]
              text-white
            "
          >
            Get Quote
            <ArrowRight className="rotate-90" size={24} />
          </Link>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#151D20]"
            onClick={() => setOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity
          ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] bg-white z-50
          transform transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Close */}
        <div className="flex justify-end p-5">
          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Mobile Nav */}
        <nav className="flex flex-col gap-6 px-6 mt-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  font-[Kanit] text-[20px]
                  ${isActive
                    ? 'font-semibold text-[#FFB201]'
                    : 'font-light text-[#151D20]'
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Mobile CTA */}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="
              mt-6 flex items-center justify-center gap-2
              h-12 bg-[#FFB201] rounded-[30px]
              font-[Kanit] text-white text-[20px]
            "
          >
            Get Quote
            <ArrowRight className="rotate-90" size={20} />
          </Link>
        </nav>
      </div>
    </>
  );
}
