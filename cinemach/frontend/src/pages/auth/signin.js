"use client";

import { useState } from "react";
import { getProviders, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useLazyQuery } from "@apollo/client";
import { LOGIN } from "@/app/apollo/queries";

import CustomButton from "@/app/components/customButton";

import "../../app/css/auth.css";

const SignIn = ({ providers }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorCred, setErrorCred] = useState("");

  const router = useRouter();

  const [Login, { loading, error, data }] = useLazyQuery(LOGIN);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
        {/* {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            {provider.id === "google" ? (
              <CustomButton
                onClick={() => signIn(provider.id)}
                title={`Войти через ${provider.name}`}
                style={{ minWidth: "215px" }}
              />
            ) : (
              <CustomButton
                onClick={() => signIn()}
                title={`Войти через ${provider.name}`}
                style={{ minWidth: "215px" }}
              />
            )}
          </div>
        ))} */}

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
