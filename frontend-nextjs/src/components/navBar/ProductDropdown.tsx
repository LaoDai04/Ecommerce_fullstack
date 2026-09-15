import useGetItems from "@/hooks/useGetItems";
import "./ProductDropdown.css";
import type { Item } from "@/hooks/useGetItems";
import { useMemo, useState } from "react";
import Link from "next/link";
import useGetCategory from "@/hooks/useGetCategory";

export default function ProductsDropdown() {
  const { data, isPending, isError, error } = useGetCategory();
  const [hoverValue, setHoverValue] = useState<string | null>(null);

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return null;
  }
  // TODO: fix how dropdown behave with the new category type
  return (
    <div className="productsDropdown">
      <div className=" flex-direction: column justify-center overflow-auto">
        <h1 className="font-semibold text-[1.3rem] px-3 text-[#4a544fd0]">
          Category
        </h1>
        {data.map((category) => (
          <div
            key={category.categoryId}
            className="flex  flex-col w-auto py-1 hover:bg-[#2b6148]"
          >
            <Link
              href={"products?categoryId" + category.categoryId}
              className="block w-full px-7 py-1 font-semibold text-[1rem] text-[#f2f3f2e2]"
            >
              {category.categoryName}
            </Link>
          </div>
        ))}
      </div>
      {/* 
      <div className="w-auto p-3">
        {hoverValue &&
          data.map((product) => (
            <Link
              href={"/products/" + hoverValue + "/" + product.categoryName}
              key={product.categoryId}
              className="block w-full py-1 px-1 font-semibold text-[0.9rem] text-[#f2f3f2e2] hover:underline"
            >
              {product.categoryName}
            </Link>
          ))}
      </div> */}
    </div>
  );
}
