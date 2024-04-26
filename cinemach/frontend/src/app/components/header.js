import { useEffect, useState } from "react";
import Link from "next/link";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { getPopularMovies } from "../api/tmdb";

import "../css/header.css";

function Header() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   const popularMovies = await getPopularMovies();
    //   setMovies(popularMovies);
    // };
    // fetchData();
  }, []);

  return (
    <>
      <div className="header__container container">
        <nav>
          <ul className="header__menu">
            <li className="header__menu-item">
              <Link href="/">Главная</Link>
            </li>
          </ul>
        </nav>
        <Autocomplete
          freeSolo
          disableClearable
          sx={{ width: 300 }}
          className="header__search"
          // options={movies.map((movie) => movie.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Поиск"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </div>
    </>
  );
}

export default Header;
