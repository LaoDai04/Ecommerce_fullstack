import useGetItems from "@/hooks/useGetItems";
import "./ProductDropdown.css";
import type { Item } from "@/hooks/useGetItems";
import { useMemo, useState } from "react";
import Link from "next/link";

export default function ProductsDropdown() {
  const { data, isPending, isError, error } = useGetItems();
  const [hoverValue, setHoverValue] = useState<string | null>(null);

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return null;
  }

  const filteredProducts = useMemo(() => {
    return (data ?? []).reduce<Record<string, Item[]>>((groups, product) => {
      if (!groups[product.category]) {
        groups[product.category] = [];
      }

      groups[product.category].push(product);

      return groups;
    }, {});
  }, [data]);

  return (
    <div className="productsDropdown">
      <div className=" flex-direction: column justify-center overflow-auto">
        <h1 className="font-semibold text-[1.3rem] px-3 text-[#4a544fd0]">
          Category
        </h1>
        {Object.entries(filteredProducts).map(([category, products]) => (
          <div
            key={category}
            className="flex  flex-col w-auto py-1 hover:bg-[#2b6148]"
            onMouseEnter={() => {
              setHoverValue(category);
            }}
          >
            <Link
              href={"products/" + category}
              className="block w-full px-7 py-1 font-semibold text-[1rem] text-[#f2f3f2e2]"
            >
              {category}
            </Link>
          </div>
        ))}
      </div>

      <div className="w-auto p-3">
        {hoverValue &&
          filteredProducts[hoverValue]?.map((product) => (
            <Link
              href={"/products/" + hoverValue + "/" + product.slug}
              key={product.id}
              className="block w-full py-1 px-1 font-semibold text-[0.9rem] text-[#f2f3f2e2] hover:underline"
            >
              {product.name}
            </Link>
          ))}
      </div>
    </div>
  );
}
