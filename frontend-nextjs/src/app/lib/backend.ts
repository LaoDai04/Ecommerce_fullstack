// src/lib/backend.ts
import "server-only"; // build error if a browser component ever imports this
import { cookies } from "next/headers";

export async function backendFetch(path: string, init: RequestInit = {}) {
  const token = (await cookies()).get("token")?.value;

  const headers = new Headers(init.headers);
  if (token) headers.set("Authorization", `Bearer ${token}`);

  return fetch(`${process.env.BACKEND_URL}${path}`, { ...init, headers });
}
