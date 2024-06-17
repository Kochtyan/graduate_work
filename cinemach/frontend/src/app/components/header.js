"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

import TextField from "@mui/material/TextField";
import CustomButton from "./customButton";
import SearchInput from "./searchInput";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SearchIcon from "@mui/icons-material/Search";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { getPopularMovies } from "../api/tmdb";

import Logo from "../../../src/assets/logo-cinemach.svg";
import "../css/header.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#111",
  border: "2px solid #6C29A3",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const session = useSession();
  console.log(session);

  useEffect(() => {}, []);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleOpenSearch = () => {
    setIsOpenSearch(true);

    document.documentElement.style.overflow = "hidden";
  };
  const handleCloseSearch = () => {
    setIsOpenSearch(false);

    document.documentElement.style.overflow = "auto";
  };

  return (
    <>
      <div className="header__container">
        <div style={{ flexBasis: "45%" }}>
          <Link href="/">
            <img src={Logo.src} alt="Cinemach" className="header__logo" />
          </Link>
        </div>

        <div>
          <SearchIcon
            className="header__search-logo icon"
            onClick={handleOpenSearch}
          />
        </div>

        {session?.data && <Link href="/profile">Профиль</Link>}

        <div className="header__login">
          {session?.data ? (
            <CustomButton
              title="Выйти"
              onClick={() => signOut({ callbackUrl: "/" })}
              style={{ width: "100px" }}
            />
          ) : (
            <Link href="/auth/signin">
              <CustomButton
                title="Войти"
                // onClick={() => signIn()}
                style={{ width: "100px" }}
              />
            </Link>
          )}
        </div>
      </div>

      <SearchInput
        placeholder="Поиск"
        onClickClose={handleCloseSearch}
        isOpenSearch={isOpenSearch}
      />
    </>
  );
}

export default Header;
