import React, { FC, useEffect, useState } from "react";
import faker from "@faker-js/faker";

export type NewUser = {
  name?: string;
  email?: string;
  avatar?: string;
};

const NewUserCard: FC<{
  save: (args: NewUser) => void;
}> = ({ save }) => {
  const [user, setUser] = useState<NewUser>({});
  useEffect(() => {
    const fakeUser = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
    };
    setUser(fakeUser);
  }, []);
  return (
    <div className={"grid gap-1 p-3 shadow shadow-gray-400/50 w-52"}>
      <img src={user?.avatar} alt={"ava"} className={"w-full"} />
      <div>{user?.name}</div>
      <div className={"text-ellipsis overflow-hidden"}>{user?.email}</div>
      <div>
        <button
          className={
            "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
          }
          onClick={() => save(user)}
        >
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default NewUserCard;
