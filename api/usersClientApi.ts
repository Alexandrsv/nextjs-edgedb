import axios from "axios";

export type User = {
  id?: string;
  name?: string;
  avatar?: string;
};

export const getUsers = async () => {
  const response = await axios.get<User[]>("http://localhost:3000/api/user");
  return response.data;
};

export const addUser = async (user: User) => {
  const response = await axios.post<User>(
    "http://localhost:3000/api/user",
    user
  );
  return response.data;
};
