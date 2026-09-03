import { Info } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./InformationalIconDropdown.css";
export default function DropDownIcon() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="infocontainer  mt-auto "
      onMouseLeave={() => setIsOpen(false)}
      onMouseEnter={() => setIsOpen(true)}
    >
      <Info
        size={"0.7rem"}
        className={pathname === "/" ? "text-[#3a5b12]" : "text-[#e3e6df]"}
      ></Info>
      {isOpen && (
        <div className="info-dropdown ">
          <h4>Feature Details</h4>
          <a href="#learn-more">Learn more →</a>
        </div>
      )}
    </div>
  );
}
