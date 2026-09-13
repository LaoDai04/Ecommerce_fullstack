"use client";

import React from "react";
import { Box, Chip, FormControl, InputLabel, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import useGetItems from "@/hooks/useGetItems";
import ProductCard from "@/components/ProductCard";
import useGetCategory, { type Category } from "@/hooks/useGetCategory";

export default function Page() {
  const { data: allItems, isPending, isError, error } = useGetItems();
  const { data: categoryData } = useGetCategory();

  return (
    <div className="grid grid-cols-[250px_1fr] h-fit gap-4">
      <div className="bg-[#9BAC8B] flex flex-col items-center p-5 gap-y-20 ">
        <MultipleSelectCategoryDropdown
          label="Category"
          options={categoryData ?? []}
        />
      </div>
      <div className="grid grid-rows-[200px_1fr] gap-4">
        <div className="bg-[#d6e0d1]">05</div>

        <div className="bg-[#E9EBE8] grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] overflow-auto justify-items-center">
          {allItems?.map((item) => {
            return (
              <div key={item.id}>
                <ProductCard
                  name={item.name}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  reviewCount={item.reviewCount}
                  averageRating={item.averageRating}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MultipleSelectCategoryDropdown({
  label,
  options,
}: {
  label: string;
  options: Category[];
}) {
  const [filter, setFilter] = React.useState<number[]>([]);

  const handleChange = (event: SelectChangeEvent<number[]>) => {
    console.log(event);
    const {
      target: { value },
    } = event;

      const newFilter =
    typeof value === "string"
      ? value.split(",").map(Number)
      : value.map(Number);

  setFilter(newFilter);
  };

  return (
    <FormControl className="w-full">
      <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>

      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={filter}
        onChange={handleChange}
        label={label}
        fullWidth
        renderValue={(selected) => (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 0.5,
            }}
          >
            {selected.map((value) => (
              <Chip
                className="!bg-[#daf1c749] !text-white"
                key={value}
                label={
                  options.find((option) => option.categoryId === value)
                    ?.categoryName ?? value
                }
              />
            ))}
          </Box>
        )}
      >
        {options.map((category) => (
          <MenuItem key={category.categoryId} value={category.categoryId}>
            {category.categoryName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
