"use client";

import { Button } from "@mui/material";
export default function Page() {
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
        test
      </Button>
    </div>
  );
}
