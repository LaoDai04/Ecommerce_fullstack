import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

export type Products = {
  id: number;
  name: string;
  slug: string;
  price: number;
  category: string;
  imageUrl: string;
};

const products: Products[] = Array.from({ length: 20 }, (_, index) => {
  const name = faker.commerce.productName();

  return {
    id: index + 1,
    name,
    slug: faker.helpers.slugify(name).toLowerCase(),
    price: Number(faker.commerce.price()),
    category: faker.commerce.department(),
    imageUrl: `https://picsum.photos/seed/${index + 1}/300/450`,
  };
});

export async function GET() {
  return NextResponse.json(products, { status: 200 });
}
