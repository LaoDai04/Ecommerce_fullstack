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

export const mockProducts: Products[] = Array.from(
  { length: 10 },
  (_, index) => {
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
  },
);

export function filterMockProducts(categoryParam: string | null): Products[] {
  if (!categoryParam) return mockProducts;

  const ids = categoryParam
    .split(",")
    .map(Number)
    .filter((n) => !Number.isNaN(n));

  return mockProducts.filter((item) =>
    item.category.some((c) => ids.includes(c.categoryId)),
  );
}
