import { Info } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import "./MainPageInformationIcon.css";
import { usePathname } from "next/navigation";
export default function DropDownIcon() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="absolute right-[-5] top-[20] z-50 h-9 w-8"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className=" h-full w-full flex items-center justify-center">
        <Info
          className={
            "min-w-0 shrink " +
            (pathname === "/" ? "text-[#465E28]" : " text-[#e3e6df]")
          }
          strokeWidth={2.5}
          size="1rem"
        />
      </div>

      {isOpen && (
        <div className="absolute top-9">
          <div className="info-dropdown flex flex-col gap-y-1 whitespace-nowrap">
            <Link
              href="/About-us"
              className="hover:bg-[#66A9A4] text-[#e0f1d8]"
            >
              About Us
            </Link>
            <Link
              href="/information"
              className="hover:bg-[#66A9A4] text-[#e0f1d8]"
            >
              About Company
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
