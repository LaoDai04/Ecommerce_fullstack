"use client"
import useGetItems from "../../hooks/useGetItems";

 type Item = {
  itemId: string;
  itemName: string;
};

export function Products() {
  const { data, isPending, isError, error } = useGetItems();

  return (
    <div>
    <br />
    {isPending && <p>Loading...</p>}
    {isError && <p>{error instanceof Error ? error.message : 'An error occurred'}</p>}
    {data && (
      <ul>
        {data.map((item: Item) => (
          <li key={item.itemId}>{item.itemName}</li>
        ))}
      </ul>
    )}
      <h1>Products</h1>
    </div>
  );
}