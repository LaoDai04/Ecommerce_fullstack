"use client";
import useGetItems from "@/hooks/useGetItems";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageCarousel() {
  const { data, isPending, isError, error } = useGetItems();

  const imageArray = (data ?? []).slice(0, 5);
  const duplicateImageCarousel = [...imageArray, ...imageArray];

  if (!data) return null;

  return (
    <div className="relative overflow-hidden ">
      <div
        className="
      absolute left-0 top-0 z-10 h-full w-30
      bg-gradient-to-r from-[#fafbf8fe] to-transparent
      backdrop-blur-[2px]
      pointer-events-none
    "
      />
      <div
        className="flex gap-10 w-max"
        style={{
          animation: "carousel 10s linear infinite",
        }}
      >
        {duplicateImageCarousel.map((item, index) => (
          <Image
            className="rounded-3xl shrink-0"
            key={`${item.name}-${index}`}
            src={item.imageUrl}
            width={300}
            height={300}
            alt={item.name}
          />
        ))}
      </div>

      <div
        className="
      absolute right-0 top-0 z-10 h-full w-30
      bg-gradient-to-l from-[#fafbf8fe] to-transparent
      backdrop-blur-[2px]
      pointer-events-none
    "
      />
    </div>
  );
}
