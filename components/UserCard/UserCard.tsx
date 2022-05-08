import React, { FC } from "react";
import { User } from "../../api/usersClientApi";

export const UserCard: FC<User & { save?: (args: User) => void }> = ({
  name,
  avatar,
  save,
}) => {
  return (
    <div
      className={"grid gap-1 p-3 shadow shadow-gray-400/50 w-52 select-none"}
    >
      <img src={avatar} alt={"ava"} className={"w-full"} />
      <div>{name}</div>
      {save && (
        <div>
          <button
            className={
              "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
            }
            onClick={() => save({ name, avatar })}
          >
            Сохранить
          </button>
        </div>
      )}
    </div>
  );
};
