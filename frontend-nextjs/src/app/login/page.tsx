"use client";

import { Button } from "@mui/material";
import { useState } from "react";
export default function Page() {
  const [me, setMe] = useState("");
  return (
    <div>
      <Button
        onClick={async () => {
          await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: "john.doe@example.com",
              password: "devpass123",
            }),
          });
        }}
      >
        login
      </Button>
      <Button
        onClick={async () => {
          const res = await fetch("/api/auth/me");
          const test = await res.text();
          setMe(test);
        }}
      >
        who am i
      </Button>
      {me}
    </div>
  );
}
