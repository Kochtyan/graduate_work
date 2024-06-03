import { useEffect, useState } from "react";
import Link from "next/link";

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

        <div className="header__login">
          <CustomButton
            title="Войти"
            onClick={handleOpen}
            style={{ width: "100px" }}
          />
        </div>
      </div>

      <SearchInput
        placeholder="Поиск"
        onClickClose={handleCloseSearch}
        isOpenSearch={isOpenSearch}
      />

      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Tabs>
            <TabList>
              <Tab style={{ marginRight: "20px" }}>
                <Typography variant="h6" component="h2">
                  Войти
                </Typography>
              </Tab>
              <Tab>
                <Typography variant="h6" component="h2">
                  Регистрация
                </Typography>
              </Tab>
            </TabList>

            <TabPanel>
              <Typography sx={{ mt: 2 }} style={{ textAlign: "center" }}>
                <TextField
                  id="outlined-helperText"
                  label="Логин"
                  placeholder="Ваш логин"
                  InputProps={{
                    style: {
                      color: "white",
                      background: "#1a1a1a",
                    },
                  }}
                />
              </Typography>
              <Typography sx={{ mt: 2 }} style={{ textAlign: "center" }}>
                <TextField
                  id="outlined-helperText"
                  label="Пароль"
                  placeholder="Ваш пароль"
                  InputProps={{
                    style: { color: "white", background: "#1a1a1a" },
                  }}
                />
              </Typography>
              <Typography sx={{ mt: 2 }} style={{ textAlign: "right" }}>
                <CustomButton title="Войти на сайт" />
              </Typography>
            </TabPanel>
            <TabPanel>
              <Typography sx={{ mt: 2 }} style={{ textAlign: "center" }}>
                <TextField
                  id="outlined-helperText"
                  label="Email"
                  placeholder="Ваш email"
                  InputProps={{
                    style: { color: "white", background: "#1a1a1a" },
                  }}
                />
              </Typography>
              <Typography sx={{ mt: 2 }} style={{ textAlign: "center" }}>
                <TextField
                  id="outlined-helperText"
                  label="Логин"
                  placeholder="Ваш логин"
                  InputProps={{
                    style: { color: "white", background: "#1a1a1a" },
                  }}
                />
              </Typography>
              <Typography sx={{ mt: 2 }} style={{ textAlign: "center" }}>
                <TextField
                  id="outlined-helperText"
                  label="Пароль"
                  placeholder="Ваш пароль"
                  InputProps={{
                    style: { color: "white", background: "#1a1a1a" },
                  }}
                />
              </Typography>
              <Typography sx={{ mt: 2 }} style={{ textAlign: "right" }}>
                <CustomButton title="Зарегистрироваться" />
              </Typography>
            </TabPanel>
          </Tabs>
        </Box>
      </Modal>
    </>
  );
}

export default Header;
