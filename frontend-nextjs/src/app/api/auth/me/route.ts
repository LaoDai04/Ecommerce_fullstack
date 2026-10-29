import { NextResponse } from "next/server";
import { backendFetch } from "@/lib/backend";

export async function GET() {
  try {
    const res = await backendFetch("/auth/me");
    const text = await res.text();

    return new NextResponse(text || null, {
      status: res.status,
      headers: {
        "Content-Type": res.headers.get("Content-Type") ?? "application/json",
      },
    });
  } catch {
    return NextResponse.json(
      { status: 502, detail: "Account service is unavailable" },
      { status: 502, headers: { "Content-Type": "application/problem+json" } },
    );
  }
}
