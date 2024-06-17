import { useState, useEffect } from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";

import { useQuery } from "@apollo/client";
import { GET_USERS } from "@/app/apollo/queries";

import Header from "@/app/components/header";
import Loader from "@/app/components/loader";

const Profile = ({ session }) => {
  const [errorQuery, setErrorQuery] = useState("");

  const { loading, error, data } = useQuery(GET_USERS);

  useEffect(() => {
    if (error) {
      setErrorQuery(`Ошибка: ${error.message}`);
    }
  }, [error]);

  if (loading) return <Loader />;

  return (
    <>
      <Header />
      <h1>Профиль {session?.user?.name}</h1>
      {errorQuery && <span>{errorQuery}</span>}
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      session,
    },
  };
}

export default Profile;
