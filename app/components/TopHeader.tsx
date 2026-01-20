import { Phone, Mail } from "lucide-react";

export default function TopHeader() {
  return (
    <header className="w-full h-[48px] bg-[#0C5170] flex items-center">
      <div className="w-full max-w-[1920px] mx-auto px-[181px]">
        <div className="flex items-center gap-[9px] font-kanit text-white">

          {/* Phone */}
          <div className="flex items-center gap-[8px]">
            <Phone size={20} strokeWidth={1.5} />
            <span className="text-[20px] leading-[20px] font-normal">
                <a
                  href="tel:+919999999999"
                  className="text-[20px] font-light"
                >+91-9999999999</a>
              
            </span>
          </div>

          {/* Divider */}
          <span className="w-[17px] h-[1px] bg-white rotate-90"></span>

          {/* Email */}
          <div className="flex items-center gap-[8px]">
            <Mail size={20} strokeWidth={1.5} />
            <span className="text-[20px] leading-[20px] font-normal">
                <a
                  href="mailto:yanapackaging@mail.com"
                  className="text-[20px] font-light"
                >yanapackaging@mail.com</a>
              
            </span>
          </div>

        </div>
      </div>
    </header>
  );
}
