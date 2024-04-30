import { useEffect, useState } from "react";
import Link from "next/link";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
// import Button from "@mui/material/Button";
import CustomButton from "./customButton";

import { getPopularMovies } from "../api/tmdb";

import Logo from "../../../src/assets/logo-cinemach.svg";
import "../css/header.css";

function Header() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {}, []);

  return (
    <>
      <div className="header__container">
        <nav>
          <ul className="header__menu">
            <li className="header__menu-item">
              <Link href="/">
                <img src={Logo.src} alt="Cinemach" className="header__logo" />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header__login">
          <CustomButton title="Войти" style={{ width: "100px" }} />
        </div>
      </div>
    </>
  );
}

export default Header;
