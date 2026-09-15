import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

type Category = {
  categoryId: number;
  categoryName: string;
};

export type Item = {
  id: number;
  name: string;
  slug: string;
  price: number;
  category: Category[];
  imageUrl: string;
  averageRating: number;
  reviewCount: number;
};

export default function useGetItems() {
  const queryParam = useSearchParams();
  const categoryFilter = queryParam.get("categoryId");

  return useQuery<Item[], Error>({
    queryKey: ["items", categoryFilter],
    queryFn: async (): Promise<Item[]> => {
      const url = categoryFilter
        ? `/api/products?categoryId=${categoryFilter}`
        : `/api/products`;
      console.log(url);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Items not found");
      }

      return (await response.json()) as Item[];
    },
  });
}
