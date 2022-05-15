import React, { FC, useEffect, useRef, useState } from "react";
import { User } from "../../api/usersClientApi";

export const UserCard: FC<
  User & { save?: (args: User) => void; remove?: () => void }
> = ({ name, nameLen, nameUpper, avatar, save, remove }) => {
  const [visibleRemove, setVisibleRemove] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const img = useRef<HTMLImageElement>(null);

  const placeholderUrl = "https://vk.com/images/camera_200.png";

  console.log({ name, img });
  useEffect(() => {
    if (img.current) {
      setLoaded(img.current.complete);
    }
  }, [img.current]);

  return (
    <div
      className={
        "grid gap-1 p-3 shadow shadow-gray-400/50 w-52 select-none relative"
      }
      onMouseEnter={() => setVisibleRemove(true)}
      onMouseLeave={() => setVisibleRemove(false)}
    >
      {!loaded && (
        <img src={placeholderUrl} alt={"placeholder"} className={"w-full"} />
      )}
      <img
        src={avatar}
        ref={img}
        alt={"ava"}
        className={loaded ? "w-full" : "h-0"}
      />
      <div>{name}</div>
      <div>{nameLen}</div>
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

export const UserCardMemo = React.memo(UserCard);
