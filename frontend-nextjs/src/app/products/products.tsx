"use client";
import { Skeleton } from "@mui/material";
import useGetItems, { type Item } from "../../hooks/useGetItems";

export function Products() {
  const { data, isLoading, isPending, isError, error } = useGetItems();
  if (isLoading) {
    return <Skeleton variant="rectangular" height={200} width={300} />;
  }

  return (
    <div>
      <br />
      {isPending && <p>Loading...</p>}
      {isError && (
        <p>{error instanceof Error ? error.message : "An error occurred"}</p>
      )}
      {data && (
        <ul>
          {data.map((item: Item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
      <h1>Products</h1>
    </div>
  );
}
