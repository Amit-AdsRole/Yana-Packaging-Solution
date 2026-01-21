'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Header() {
    return (
        <header
            className="
        absolute top-12 left-1/2 -translate-x-1/2
        w-480 h-18
        bg-white shadow-[0px_2px_5px_rgba(0,0,0,0.1)]
        flex items-center justify-center z-10
      "
        >
            <div className="w-389.75 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-1.25">


                    <Link href="/" aria-label="Go to Home">
                        <Image
                            src="/logo.png"
                            alt="Yana Packaging Solutions"
                            width={300}
                            height={50}
                        />

                    </Link>


                </div>

                {/* Navigation */}
                <nav className="flex items-center gap-10">

                    {/* Active Link */}
                    <div className="flex flex-col items-center gap-0.75">
                        <Link
                            href="/"
                            className="
                font-[Kanit]
                font-semibold
                text-[20px]
                text-[#FFB201]
              "
                        >
                            Home
                        </Link>
                        <span className="w-17 border-2 border-[#FFB201]" />
                    </div>

                    <Link
                        href="/products"
                        className="font-[Kanit] font-light text-[20px] text-[#151D20]"
                    >
                        Products
                    </Link>

                    <Link
                        href="/blog"
                        className="font-[Kanit] font-light text-[20px] text-[#151D20]"
                    >
                        Blog
                    </Link>

                    <Link
                        href="/about"
                        className="font-[Kanit] font-light text-[20px] text-[#151D20]"
                    >
                        About
                    </Link>

                    <Link
                        href="/contact"
                        className="font-[Kanit] font-light text-[20px] text-[#151D20]"
                    >
                        Contact
                    </Link>
                </nav>

                {/* CTA Button */}
                <Link
                    href="/get-quote"
                    className="
            flex items-center justify-center gap-2
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

            </div>
        </header>
    );
}
