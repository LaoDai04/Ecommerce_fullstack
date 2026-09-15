import { NextRequest, NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

type Category = {
  categoryId: number;
  categoryName: string;
};

const CATEGORY_POOL: Category[] = Array.from({ length: 3 }, (_, i) => ({
  categoryId: i + 1,
  categoryName: faker.commerce.department(),
}));

function fakeCategories(): Category[] {
  const count = faker.number.int({ min: 1, max: 3 });
  return faker.helpers.arrayElements(CATEGORY_POOL, count);
}
export type Products = {
  id: number;
  name: string;
  slug: string;
  price: number;
  category: Category[];
  imageUrl: string;
  averageRating: number;
  reviewCount: number;
};

const products: Products[] = Array.from({ length: 10 }, (_, index) => {
  const name = faker.commerce.productName();

  return {
    id: index + 1,
    name,
    slug: faker.helpers.slugify(name).toLowerCase(),
    price: Number(faker.commerce.price()),
    category: fakeCategories(),
    imageUrl: `https://picsum.photos/seed/${index + 1}/200/350`,
    averageRating: faker.number.int({ min: 0, max: 5 }),
    reviewCount: faker.number.int({ min: 0, max: 9000 }),
  };
});

export async function GET(mockRequest: NextRequest) { //get the request
  const param = mockRequest.nextUrl.searchParams.get("categoryId");
  if (!param) {
    return NextResponse.json(products, { status: 200 });
  }
  const ids = param
    .split(",")
    .map(Number)
    .filter((n) => !Number.isNaN(n));

  const filteredItems = products.filter((item) =>
    item.category.some((c) => ids.includes(c.categoryId)),
  );
  console.log(typeof ids, "whats in here");

  return NextResponse.json(filteredItems, { status: 200 });
}
