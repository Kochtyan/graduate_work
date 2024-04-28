import { useEffect, useState } from "react";
import Link from "next/link";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
// import Button from "@mui/material/Button";
import CustomButton from "./customButton";

import { getPopularMovies } from "../api/tmdb";

import Logo from "../../../src/assets/logo_cinemach.svg";
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
              <Link href="/">
                <img src={Logo.src} alt="Cinemach" className="header__logo" />
              </Link>
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
        <div className="header__login">
          <CustomButton title="Войти" />
        </div>
      </div>
    </>
  );
}

export default Header;
