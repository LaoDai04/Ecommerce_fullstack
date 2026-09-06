import Image from "next/image";
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
    <div className="relative w-[200px] mb-[2%] mt-[20%]">
      <Image
        src={imageUrl}
        alt={name}
        width={200}
        height={300}
        className="
          absolute
         left-[5%]
         bottom-[35%]
          rounded-3xl 
        "
      />

      <div
        className=" 
            p-1.5
          flex
          flex-col
          justify-end
          h-44
          w-[110%]
          rounded-[0.4rem]
          bg-[#dcf9e7fe]
          border-[0.4]
        "
      >
        <div className="flex w-full items-center justify-between">
          <h2 className="font-semibold">{name}</h2>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-base text-sm px-7 py-[0.3] text-center leading-5"
          >
            Green
          </button>
        </div>
        <div className="flex w-full items-center justify-between">
          ${price}
          <div className="flex">
            <span>★★★★★</span>
            <span>{averageRating}</span>
            <span>({reviewCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
}
