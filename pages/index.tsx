import type { NextPage } from "next";
import NewUserCard, { NewUser } from "../components/NewUserCard/NewUserCard";

const Home: NextPage = () => {
  const save = (args: NewUser) => {
    console.log({ args });
  };
  return <NewUserCard save={save} />;
};

export default Home;
