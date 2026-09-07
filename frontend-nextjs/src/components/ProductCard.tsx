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
      my-20
    relative
      flex
    flex-col
    min-h-130
    max-w-60
    min-w-60
  sm:w-[180px]
  lg:w-[200px]
    shrink-0
    rounded-[0.9rem]
    bg-[#aac7b5fe]
    p-1.5
    
  "
    >
      <div className="z-0 absolute inset-0 bottom-[50%] rounded-[0.7rem] bg-[#d3eedcfe]" />

      <Image
        src={imageUrl}
        alt={name}
        width={300}
        height={400}
        className="rounded-3xl relative"
      />

      <div className="relative flex w-full">
        <h2 className="min-w-0 leading-5 h-10 flex-1 overflow-hidden text-ellipsis line-clamp-2 font-semibold text-[15px]">
          {name}
        </h2>
      </div>

      <div className=" my-1 relative flex w-full items-center justify-between">
        <div>${price}</div>
        <div className="flex items-center">
          <Rating size="small" readOnly />
          <span>{averageRating}</span>
          <span>({reviewCount})</span>
        </div>
      </div>
      <div className="items-center justify-center flex">
        <Button
          sx={{
            backgroundColor: "#668440",
            color: "white",
            height: "20px",
            width: "70%",
            display: "flex",
            borderRadius: "30px",
          }}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}
