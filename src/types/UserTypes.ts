import { Item } from "./ItemTypes";

interface UserBase {
  id: number;
  username: string;
  password: string;
  token?: string;
  items?: Item[];
}

export type User = UserBase;
export type NewUser = Omit<User, "id">;
