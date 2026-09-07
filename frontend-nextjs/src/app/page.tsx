"use client";

import ImageCarousel from "@/components/ImageCarousel";
import ProductCard from "@/components/ProductCard";
import useGetItems from "@/hooks/useGetItems";
import { useEffect, useMemo, useState } from "react";
import "./../components/TrendingCheapNew.css";
type NavItem = {
  name: string;
  href: string;
};

const navBar: NavItem[] = [
  { name: "Products", href: "/products" },
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Cart", href: "/cart" },
];

export default function Home() {
  const [category, setCategory] = useState<keyof typeof productLists>("new");
  const [page, setPage] = useState(0);
  const ITEM_PER_PAGE = 5;

  const { data, isPending, isError, error } = useGetItems();

  const productLists = useMemo(
    () => ({
      new: (data ?? []).slice(0, 15),
      cheap: (data ?? []).slice(0, 15),
      trending: (data ?? []).slice(10, 16),
    }),
    [data],
  );
  const products = productLists[category];

  const visibleProducts = products.slice(
    page * ITEM_PER_PAGE,
    page * ITEM_PER_PAGE + ITEM_PER_PAGE,
  );

  const totalPages = Math.ceil(products.length / ITEM_PER_PAGE);
  console.log("Home render", {
    page,
    dataLength: data?.length,
  });
  return (
    <div className="w-full h-full">
      <ImageCarousel />
      <div className="flex-0 justify-center text-6xl text-gray-500">
        <button
          className={
            "bg-transparent border-0 p-0 hover:text-black cursor-pointer " +
            (category == "trending" ? "font-semibold text-black" : "")
          }
          onClick={() => {
            setCategory("trending");
            setPage(0);
          }}
        >
          Trending
        </button>
        <span className="mr-2">, </span>
        <button
          className={
            "bg-transparent border-0 p-0 hover:text-black cursor-pointer " +
            (category == "cheap" ? "font-semibold text-black" : "")
          }
          onClick={() => {
            setCategory("cheap");
            setPage(0);
          }}
        >
          Cheap
        </button>
        <span className="mr-2">, </span>

        <button
          className={
            "bg-transparent border-0 p-0 hover:text-black cursor-pointer " +
            (category == "new" ? "font-semibold text-black" : "")
          }
          onClick={() => {
            setCategory("new");
            setPage(0);
          }}
        >
          New Arrivals
        </button>
      </div>

      <div className="flex gap-10 justify-evenly overflow-y- flex-0 ">
        {visibleProducts.map((item, index) => (
          <div
            key={item.id}
            className="animate-slide-up "
            style={{
              animationDelay: `${index * 50}ms`,
            }}
          >
            <ProductCard
              name={item.name + "Ergonomic Marble Cartset"}
              imageUrl={item.imageUrl}
              price={item.price}
              averageRating={item.averageRating}
              reviewCount={item.reviewCount}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between ">
        <button
          className="btn"
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Default
        </button>

        {Array.from({ length: totalPages }).map((_, index) => {
          return (
            <span key={index} className={index === page ? "font-semibold" : ""}>
              o
            </span>
          );
        })}

        <button
          className="btn"
          onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
        >
          Default
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
