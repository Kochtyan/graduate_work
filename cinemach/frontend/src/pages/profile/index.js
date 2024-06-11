import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import Header from "@/app/components/header";

const Profile = ({ session }) => {
  return (
    <>
      <Header />
      <h1>Profile {session?.user?.name}</h1>
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
