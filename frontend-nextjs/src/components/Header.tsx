"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DropDownIcon from "./MainPageInformationIcon";
type navBarItem = { pageName: string; url: string };

export default function Header({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navBar: navBarItem[] = [
    { pageName: "Products", url: "/products" },
    { pageName: "Trending", url: "/trending" },
    { pageName: "Bestsellers", url: "/bestsellers" },
  ];

  return (
    <header className="relative">
      <nav className="relative z-30  flex items-center py-0 px-6 bg-[#465E28] ">
        <Link
          href="/"
          className={
            "self-stretch flex flex-row w-[12rem] items-center justify-center " +
            (pathname === "/" ? "bg-[#C1DBB4]" : " bg-[#465E28]")
          }
        >
          <h1
            className={
              "text-[3rem] font-bold  leading-[0.9] " +
              (pathname === "/" ? "text-[#465E28]" : " text-[#e3e6df]")
            }
          >
            /Mo:st/
          </h1>
          <DropDownIcon />
        </Link>

        {navBar.map((item) => (
          <Link
            key={item.url}
            href={item.url}
            className={
              "self-stretch flex items-center justify-center w-[12rem] " +
              (pathname === item.url ? "bg-[#C1DBB4] " : " bg-[#465E28]")
            }
          >
            <h1 className="text-[1.3rem] font-medium text-[#ffffff]">
              {item.pageName}
            </h1>
            <div
              className={`absolute bottom-0 h-[3px] w-16 rounded-full bg-[#465E28]
                          origin-center transition-transform duration-200 ease-out
                          ${pathname === item.url ? "scale-x-100" : "scale-x-0"}`}
            />
          </Link>
        ))}

        <div className="flex ml-auto gap-10">
          <svg
            width="60"
            height="55"
            viewBox="0 0 880 880"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100.391 522.761C74.0477 399.822 60.876 338.355 93.8961 297.51C126.916 256.664 189.78 256.664 315.508 256.664H504.566C630.296 256.664 693.158 256.664 726.18 297.51C759.198 338.355 746.028 399.822 719.683 522.761L703.971 596.095C686.114 679.42 677.186 721.084 646.932 745.541C616.678 769.997 574.072 769.997 488.851 769.997H331.222C246.004 769.997 203.395 769.997 173.142 745.541C142.889 721.084 133.961 679.42 116.106 596.095L100.391 522.761Z"
              stroke="white"
              stroke-width="25.6"
            />
            <path
              opacity="0.5"
              d="M263.369 440H556.702"
              stroke="white"
              stroke-width="30.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.5"
              d="M336.703 550H483.37"
              stroke="white"
              stroke-width="30.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.6"
              d="M630.035 330L520.035 110"
              stroke="white"
              stroke-width="30.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.6"
              d="M190.037 330L300.037 110"
              stroke="white"
              stroke-width="30.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="50"
            height="50"
            viewBox="0 0 743 718"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M371.301 321.829C469.113 321.829 548.405 252.65 548.405 167.313C548.405 81.976 469.113 12.7969 371.301 12.7969C273.489 12.7969 194.197 81.976 194.197 167.313C194.197 252.65 273.489 321.829 371.301 321.829Z"
              stroke="white"
              stroke-width="30"
            />
            <path
              d="M729.801 704.238C729.801 621.284 692.03 541.728 624.799 483.071C557.567 424.414 466.381 391.461 371.301 391.461C276.221 391.461 185.035 424.414 117.803 483.071C50.5712 541.728 12.8008 621.284 12.8008 704.238H729.801Z"
              stroke="white"
              stroke-width="30"
            />
          </svg>
        </div>
      </nav>

      {children}
    </header>
  );
}
