import React, { FC, SyntheticEvent, useState } from "react";
import { User } from "../../api/usersClientApi";

export const UserCard: FC<
  User & { save?: (args: User) => void; remove?: () => void }
> = ({ name, avatar, save, remove }) => {
  const [visibleRemove, setVisibleRemove] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const loadHandler = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    console.log("loadHandler", name, e);
    setLoaded(true);
  };
  return (
    <div
      className={
        "grid gap-1 p-3 shadow shadow-gray-400/50 w-52 select-none relative"
      }
      onMouseEnter={() => setVisibleRemove(true)}
      onMouseLeave={() => setVisibleRemove(false)}
    >
      {!loaded && (
        <img
          src={"https://vk.com/images/camera_200.png"}
          alt={"ava"}
          className={"w-full"}
          onLoad={() => setLoaded(true)}
        />
      )}
      <img src={avatar} alt={"ava"} className={"w-full"} onLoad={loadHandler} />
      <div>{name}</div>
      {!save && visibleRemove && (
        // top right remove button with remove icon
        <div
          className={
            "absolute -top-0 -right-0 bg-red-500 text-white py-2 px-4 rounded"
          }
          onClick={remove}
        >
          Удалить
        </div>
      )}
      {save && (
        <div>
          <button
            className={
              "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
            }
            onClick={() => {
              save({ name, avatar });
            }}
          >
            Сохранить
          </button>
        </div>
      )}
    </div>
  );
};
