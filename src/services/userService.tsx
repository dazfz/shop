import axios from "axios";
import { NewUser } from "../types/UserTypes";
const baseUrl = "http://localhost:3001/users";

export const login = async (user: NewUser) => {
  // change to post with real backend
  // const response = await axios.get(baseUrl, user);
  const response = await axios.get(
    `${baseUrl}?username=${user.username}&password=${user.password}`
  );
  return response.data[0];
};

export const signup = async (user: NewUser) => {
  const response = await axios.post(baseUrl, user);
  return response.data;
};

export const deleteUser = async (userId: number) => {
  const response = await axios.delete(`${baseUrl}/${userId}`);
  return response.data;
};
