import { useQuery } from "@tanstack/react-query";

export type Item = {
  id: number;
  name: string;
  slug: string;
  price: number;
  category: string;
  imageUrl: string;
};

export default function useGetItems() {
  return useQuery<Item[], Error>({
    queryKey: ["items"],
    queryFn: async (): Promise<Item[]> => {
      const response = await fetch("/api/products");

      if (!response.ok) {
        throw new Error("Items not found");
      }

      return (await response.json()) as Item[];
    },
  });
}
