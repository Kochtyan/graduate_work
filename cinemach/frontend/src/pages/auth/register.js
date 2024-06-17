"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "@/app/apollo/mutations";

import CustomButton from "@/app/components/customButton";
import CustomModal from "@/app/components/customModal";

import "../../app/css/auth.css";

function Register() {
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [open, setOpen] = useState(false);

  const router = useRouter();

  const [addUser] = useMutation(ADD_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !login || !password) {
      setError("Заполните все поля");
      return;
    }

    try {
      const result = await addUser({
        variables: {
          email: email,
          login: login,
          password: password,
        },
      });

      console.log("Пользователь успешно добавлен:", result);

      setEmail("");
      setLogin("");
      setPassword("");

      handleOpen();
    } catch (error) {
      console.log(error);
      setError("Ошибка регистрации");
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const goToSignin = (e) => {
    e.preventDefault();
    router.push("/auth/signin");
  };

  return (
    <>
      <div className="signin__container">
        <div className="signin__form">
          <h1>Регистрация</h1>
          <form className="register__form">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="register__input"
              type="text"
              value={email}
              placeholder="Email"
              required
            />
            <input
              onChange={(e) => setLogin(e.target.value)}
              className="register__input"
              type="text"
              value={login}
              placeholder="Логин"
              required
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="register__input"
              type="password"
              value={password}
              placeholder="Пароль"
              required
            />
            <CustomButton
              style={{ marginTop: "10px", width: "100%" }}
              title="Зарегистрироваться"
              onClick={handleSubmit}
            />
          </form>
          {error && (
            <div className="auth__error-container">
              <span className="auth__error-msg">{error}</span>
            </div>
          )}
          <div>
            <Link href="/auth/signin">Уже есть аккаунт</Link>
          </div>
        </div>
      </div>

      <CustomModal
        open={open}
        handleClose={handleClose}
        goToLink={goToSignin}
      />
    </>
  );
}

export default Register;
