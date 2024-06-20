"use client";

import { useState, useEffect } from "react";
import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { useLazyQuery } from "@apollo/client";
import { LOGIN } from "@/app/apollo/queries";

import Loader from "@/app/components/loader";
import CustomButton from "@/app/components/customButton";

import "../../app/css/auth.css";

const SignIn = ({ providers }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorCred, setErrorCred] = useState("");

  const router = useRouter();

  const [Login, { loading, error, data }] = useLazyQuery(LOGIN);

  useEffect(() => {
    if (error) {
      setErrorQuery(`Ошибка: ${error.message}`);
    }
  }, [error]);

  if (loading) return <Loader />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginData = await Login({
        variables: {
          email: email,
          password: password,
        },
      });

      if (!loginData.data.login) {
        setErrorCred("Неверные данные");

        return;
      }
      console.log(loginData.data.login.id);

      const result = await signIn("credentials", {
        id: loginData.data.login.id,
        email: loginData.data.login.email,
        name: loginData.data.login.login,
        redirect: false,
      });

      if (result.error) {
        setErrorCred("Ошибка авторизации");

        return;
      }

      router.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signin__container">
      <div className="signin__form">
        <h1>Войти</h1>
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
            onChange={(e) => setPassword(e.target.value)}
            className="register__input"
            type="password"
            value={password}
            placeholder="Пароль"
            required
          />
          <CustomButton
            style={{ marginTop: "10px", width: "100%" }}
            title="Авторизоваться"
            onClick={handleSubmit}
          />
        </form>
        {errorCred && (
          <div className="auth__error-container">
            <span className="auth__error-msg">{errorCred}</span>
          </div>
        )}
        <div>
          <Link href="/auth/register">Зарегистрироваться</Link>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default SignIn;
