import { useEffect, useState } from "react";
import Link from "next/link";

import TextField from "@mui/material/TextField";
import CustomButton from "./customButton";
import SearchInput from "./searchInput";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SearchIcon from "@mui/icons-material/Search";

import { getPopularMovies } from "../api/tmdb";

import Logo from "../../../src/assets/logo-cinemach.svg";
import "../css/header.css";

import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#5a5a5a",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#6F7E8C",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },

      MuiInput: {
        styleOverrides: {
          root: {
            "&::before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

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

  const outerTheme = useTheme();

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
          <Typography variant="h6" component="h2">
            Войти
          </Typography>
          <Typography sx={{ mt: 2 }} style={{ textAlign: "center" }}>
            <TextField
              id="outlined-helperText"
              label="Логин"
              placeholder="Ваш логин"
            />
          </Typography>
          <Typography sx={{ mt: 2 }} style={{ textAlign: "center" }}>
            <ThemeProvider theme={customTheme(outerTheme)}>
              <TextField
                id="outlined-helperText"
                label="Пароль"
                placeholder="Ваш пароль"
                InputProps={{
                  style: { color: "white", borderColor: "white" },
                }}
              />
            </ThemeProvider>
          </Typography>
          <Typography sx={{ mt: 2 }} style={{ textAlign: "right" }}>
            <CustomButton title="Войти на сайт" />
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default Header;
