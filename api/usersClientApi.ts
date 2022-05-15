import axios from "axios";

export type User = {
  id?: string;
  name?: string;
  avatar?: string;
  nameUpper?: string;
  nameLen?: number;
};

export const getUsers = async () => {
  const response = await axios.get<User[]>("/api/user");
  return response.data;
};

export const addUser = async (user: User) => {
  const response = await axios.post<User>("/api/user", user);
  return response.data;
};

export const removeUser = async (id: string) => {
  return await axios.delete(`/api/user?id=${id}`);
};
