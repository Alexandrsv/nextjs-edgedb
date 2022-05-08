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
    <div>
      <div>{user?.name}</div>
      <div>{user?.email}</div>
      <img src={user?.avatar} alt={"ava"} />
      <div>
        <button onClick={() => save(user)}>Сохранить</button>
      </div>
    </div>
  );
};

export default NewUserCard;
