import Image from "next/image";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";

type ProductCardProps = {
  name: string;
  price: number;
  imageUrl: string;
  reviewCount: number;
  averageRating: number;
};

export default function ProductCard({
  name,
  price,
  imageUrl,
  reviewCount,
  averageRating,
}: ProductCardProps) {
  return (
    <div
      className="
    relative
      flex
    flex-col
    min-h-105
    w-50
    shrink
    min-w-0
    rounded-[0.9rem]
    bg-[#aac7b5fe]
    p-1.5
    
  "
    >
      <div className="z-0 absolute inset-0 bottom-[50%] rounded-[0.7rem] bg-[#d3eedcfe]" />

      <Image
        src={imageUrl}
        alt={name}
        width={200}
        height={300}
        className="rounded-3xl relative"
      />

      <div className="relative flex w-full">
        <h2 className="min-w-0 flex-1 overflow-hidden text-ellipsis line-clamp-2 font-semibold">
          {name}
        </h2>
      </div>

      <div className="mt-auto relative flex w-full items-center justify-between">
        <div>${2112}</div>
        <div className="flex items-center">
          <Rating size="small" readOnly />
          <span>{averageRating}</span>
          <span>({reviewCount})</span>
        </div>
      </div>
      <div>
        <Button className="w-full h-[20px] bg-amber-950">test</Button>
      </div>
    </div>
  );
}
