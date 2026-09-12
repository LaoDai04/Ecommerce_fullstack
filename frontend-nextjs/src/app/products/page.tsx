"use client";

import React from "react";
import { Box, Chip, FormControl, InputLabel, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function Page() {
  return (
    <div className="grid grid-cols-[250px_1fr] h-fit gap-4">
      {/* First column */}
      <div className="bg-[#9BAC8B] flex flex-col items-center p-5 gap-y-20 ">
        <MultipleSelectChip />
        <MultipleSelectChip />
        <MultipleSelectChip />
        <MultipleSelectChip />
        <MultipleSelectChip />
        <MultipleSelectChip />
        <MultipleSelectChip />
        <MultipleSelectChip />
      </div>

      {/* Second column */}
      <div className="grid grid-rows-[200px_1fr] gap-4">
        <div className="bg-[#d6e0d1]">05</div>

        <div className="bg-[#E9EBE8]">06</div>
      </div>
    </div>
  );
}

function MultipleSelectChip() {
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;

    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl className="w-40">
      <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>

      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={personName}
        onChange={handleChange}
        label="Chip"
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
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
      >
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
