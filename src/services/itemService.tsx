import axios from "axios";
import { Item, NewItem } from "../types/ItemTypes";

const baseUrl = "http://localhost:3001/items";

export const getAllItems = async () => {
  try {
    const response = await axios.get<Item[]>(baseUrl);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.status);
      console.error(error.response);
    } else {
      console.error(error);
    }
  }
};

let token: string = "";

export const setToken = (newToken: string) => {
  token = `bearer ${newToken}`;
};

export const createItemBE = async (object: NewItem) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post<Item>(baseUrl, object, config);
  return response.data;
};

export const update = async (id: number, object: NewItem) => {
  const response = await axios.put(`${baseUrl}/${id}`, object);
  return response.data;
};
