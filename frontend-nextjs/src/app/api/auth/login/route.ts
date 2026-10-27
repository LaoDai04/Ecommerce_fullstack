import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { status: 400, detail: "Invalid request body." },
      { status: 400, headers: { "Content-Type": "application/problem+json" } },
    );
  }
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const error = await res.text();

      return new NextResponse(error || null, {
        status: res.status,
        headers: { "Content-Type": "application/problem+json" },
      });
    }

    const { token } = await res.json();
    const response = NextResponse.json({ ok: true });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60,
    });

    return response;
  } catch {
    return NextResponse.json(
      { status: 502, detail: "Login is unavailable. Try again." },
      { status: 502, headers: { "Content-Type": "application/problem+json" } },
    );
  }
}
