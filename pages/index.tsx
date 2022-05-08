import type { NextPage } from "next";
import NewUserCard, { NewUser } from "../components/NewUserCard/NewUserCard";

const Home: NextPage = () => {
  const save = (args: NewUser) => {
    console.log({ args });
  };
  return (
    <>
      <h1 className="text-3xl font-bold ml-10 mt-5">Тест NextJS + EdgeDB</h1>
      <div className={"grid grid-flow-col justify-start mt-5 ml-10 gap-5"}>
        <NewUserCard save={save} />
        <NewUserCard save={save} />
        <NewUserCard save={save} />
        <NewUserCard save={save} />
        <NewUserCard save={save} />
        <NewUserCard save={save} />
      </div>
    </>
  );
};

export default Home;
