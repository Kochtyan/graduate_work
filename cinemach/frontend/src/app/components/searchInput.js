import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import "../css/searchInput.css";

export default function SearchInput({ placeholder, onChange, onClick }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onClick();
    }
  };

  return (
    <TextField
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      className="searchInput__textField"
      sx={{ borderRadius: 5, border: "1px solid #6C29A3", color: "#fff" }}
      InputProps={{
        endAdornment: (
          <IconButton onClick={onClick} aria-label="search">
            <SearchIcon sx={{ color: "#fff" }} />
          </IconButton>
        ),
      }}
    />
  );
}
