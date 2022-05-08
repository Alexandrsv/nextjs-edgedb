import type { NextPage } from "next";
import NewUserCard, { NewUser } from "../components/NewUserCard/NewUserCard";

const Home: NextPage = () => {
  const save = (args: NewUser) => {
    console.log({ args });
  };
  return (
    <>
      <h1 className="text-3xl font-bold underline">tailwindcss</h1>
      <NewUserCard save={save} />
    </>
  );
};

export default Home;
