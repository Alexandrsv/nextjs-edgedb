import React, { FC, useEffect, useState } from "react";
import faker from "@faker-js/faker";
import { User } from "../../api/usersClientApi";
import { UserCard } from "../UserCard/UserCard";

const NewUserCard: FC<{
  save: (args: User) => void;
}> = ({ save }) => {
  const [user, setUser] = useState<User>({});
  useEffect(() => {
    const fakeUser = {
      name: faker.name.findName(),
      avatar: faker.image.avatar(),
    };
    setUser(fakeUser);
  }, [save]);
  return <UserCard avatar={user.avatar} name={user.name} save={save} />;
};

export default NewUserCard;
