import { Phone, Mail } from "lucide-react";

export default function TopHeader() {
  return (
    <header className="w-full bg-[#0C5170]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 ">
        <div className="flex flex-wrap items-center gap-3 py-2 text-white font-kanit">

          {/* Phone */}
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
            <a
              href="tel:+919999999999"
              className="text-sm sm:text-base lg:text-lg font-light hover:underline"
            >
              +91-9999999999
            </a>
          </div>

          {/* Divider */}
          <span className="hidden sm:block w-px h-4 bg-white opacity-70"></span>

          {/* Email */}
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
            <a
              href="mailto:yanapackaging@mail.com"
              className="text-sm sm:text-base lg:text-lg font-light hover:underline break-all"
            >
              yanapackaging@mail.com
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
