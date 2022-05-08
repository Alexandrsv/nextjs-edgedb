import type { NextPage } from "next";
import NewUserCard from "../components/NewUserCard/NewUserCard";
import { useEffect, useState } from "react";
import { addUser, getUsers, User } from "../api/usersClientApi";
import { UserCard } from "../components/UserCard/UserCard";

const Home: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getUsers();
      console.log({ response });
      setUsers(response);
    }
    fetchData().then();
  }, []);

  const save = async (args: User) => {
    const response = await addUser(args);
    console.log({ args, response });
    setUsers((users) => [...users, { id: response.id, ...args }]);
  };
  return (
    <>
      <h1 className="text-3xl font-bold ml-10 mt-5">Тест NextJS + EdgeDB</h1>
      <div className={"flex flex-wrap justify-start mt-5 ml-10 gap-5"}>
        <NewUserCard save={save} />
        {users
          .slice(0)
          .reverse()
          .map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
      </div>
    </>
  );
};

export default Home;
