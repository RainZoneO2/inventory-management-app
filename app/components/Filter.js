import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";

const Filter = ({ setRegex }) => {
  const [filter, setFilter] = useState("");

  const escapeRegex = (string) => {
    return string.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
  };

  useEffect(() => {
    const regex = new RegExp(`^(${escapeRegex(filter)})`, "i");
    setRegex(regex);
  }, [filter]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
      <TextField
        label="Search"
        variant="outlined"
        value={filter}
        onChange={handleFilterChange}
      />
    </Box>
  );
};

export default Filter;
