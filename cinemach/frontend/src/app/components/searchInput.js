import { useState } from "react";

import CustomQueryList from "./customQueryList";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import { fetchSearchMovie, fetchSearchPerson } from "../api/kinopoisk";

import "../css/searchInput.css";

import { search1, search2 } from "../query_data/queryData";

export default function SearchInput({
  placeholder,
  onClickClose,
  isOpenSearch,
}) {
  const [query, setQuery] = useState("");
  const [queryResultMovie, setQueryResultMovie] = useState([]);
  const [queryResultPerson, setQueryResultPerson] = useState([]);

  const fetchData = async () => {
    if (query) {
      // const resultMovie = await fetchSearchMovie(query);
      // const resultPerson = await fetchSearchPerson(query);
      const resultMovie = search1.docs;
      const resultPerson = search2.docs;

      setQueryResultMovie(resultMovie);
      setQueryResultPerson(resultPerson);
      console.log(resultMovie);
      console.log(resultPerson);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fetchData();
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
    console.log(value);
  };

  const handleClose = (event) => {
    onClickClose();

    setQuery("");
    setQueryResultMovie([]);
    setQueryResultPerson([]);
  };

  return (
    <div
      className="searchInput__container"
      style={isOpenSearch ? { top: "0" } : { top: "-3000px" }}
    >
      <div className="searchInput__inner-container">
        <TextField
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="searchInput__textField"
          sx={{ borderRadius: 5, border: "1px solid #6C29A3", color: "#fff" }}
          InputProps={{
            endAdornment: (
              <IconButton onClick={fetchData} aria-label="search">
                <SearchIcon sx={{ color: "#fff" }} />
              </IconButton>
            ),
          }}
        />
        <IconButton onClick={handleClose} aria-label="close">
          <CloseIcon className="search__close-icon icon" />
        </IconButton>
      </div>
      {queryResultMovie.length !== 0 && (
        <CustomQueryList list={queryResultMovie} list2={queryResultPerson} />
      )}
    </div>
  );
}
