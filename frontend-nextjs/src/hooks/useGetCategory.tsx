import { useQuery } from "@tanstack/react-query";

export type Category = {
  categoryId: number;
  categoryName: string;
};

export default function useGetCategory() {
  return useQuery<Category[], Error>({
    queryKey: ["category"],
    queryFn: async (): Promise<Category[]> => {
      const response = await fetch("/api/category");

      if (!response.ok) {
        throw new Error("category not found");
      }

      return (await response.json()) as Category[];
    },
  });
}
