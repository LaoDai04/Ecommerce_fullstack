"use client";
import useGetItems from "@/hooks/useGetItems";
import Image from "next/image";

export default function ImageLoader() {
  const { data, isPending, isError, error } = useGetItems();
  if (isPending) return <p>Loading...</p>;
  if (isError) {
    return (
      <p>{error instanceof Error ? error.message : "Failed to load items"}</p>
    );
  }
  if (!data) return null;

  return (
    <div className="flex gap-2 overflow-auto scroll-auto">
      {Array.isArray(data) &&
        data.map((item, index) => (
          <Image
            key={item.id ?? index}
            src={item.imageUrl}
            width={500}
            height={500}
            alt={item.name}
          />
        ))}
    </div>
  );
}
