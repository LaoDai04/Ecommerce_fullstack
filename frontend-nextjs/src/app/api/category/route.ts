// src/app/api/category/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  if (process.env.USE_MOCK === "true") {
    const { mockCategories } = await import("@/mocks/category");
    return NextResponse.json(mockCategories);
  }

  const res = await fetch(`${process.env.BACKEND_URL}/category`, {
    cache: "no-store",
  });
  return NextResponse.json(await res.json(), { status: res.status });
}