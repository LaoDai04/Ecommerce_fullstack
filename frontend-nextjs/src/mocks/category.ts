import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

export type Category = {
  categoryId: number;
  categoryName: string;
};

export const mockCategories: Category[] = Array.from({ length: 10 }, (_, index) => {
  const name = faker.commerce.department();

  return {
    categoryId: index + 1,
    categoryName: name,
  };
});
