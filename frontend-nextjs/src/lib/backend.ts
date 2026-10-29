import "server-only";
import { cookies } from "next/headers"; 

export async function backendFetch(path: string, init: RequestInit = {}) { //this function is to attach the header and call api
  const token = (await cookies()).get("token")?.value; // the cookies is poppulated and saved in login route.ts

  const headers = new Headers(init.headers);
  if (token) headers.set("Authorization", `Bearer ${token}`);

  return fetch(`${process.env.BACKEND_URL}${path}`, { ...init, headers });
}
