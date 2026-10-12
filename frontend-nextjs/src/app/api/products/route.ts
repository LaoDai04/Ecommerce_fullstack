import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  if (process.env.USE_MOCK === "true") {
    const { filterMockProducts } = await import("@/mocks/products");
    const param = req.nextUrl.searchParams.get("categoryId");
    return NextResponse.json(filterMockProducts(param));
  }

  const res = await fetch(
    `${process.env.BACKEND_URL}/products${req.nextUrl.search}`,
    { cache: "no-store" },
  );
  console.log(`test ${process.env.BACKEND_URL}/products${req.nextUrl.search}`);
  if (!res.ok) {
    return NextResponse.json(
      { error: "Backend error" },
      { status: res.status },
    );
  }

  type BackendProduct = {
    itemId: number;
    itemName: string;
    price: number;
    description: string;
    imageUrl: string;
    category: { categoryId: number; categoryName: string }[];
  };

  const data: BackendProduct[] = await res.json();

  const products = data.map((p) => ({
    id: p.itemId,
    name: p.itemName,
    slug: p.itemName.toLowerCase().replace(/\s+/g, "-"),
    price: p.price,
    category: p.category,
    imageUrl: p.imageUrl,
    averageRating: 0, //TODO: ADD TABLE FOR REVIEW COUNT, AND QUERY TO CALCULATE AVERAGE. A WHOLE SEPARATE FEATURE
    reviewCount: 0,
  }));

  return NextResponse.json(products);
}
