import { User } from "./UserTypes";

interface ItemBase {
  id: number;
  name: string;
  quantity:number;
  seller: User;
}

export interface ItemOther extends ItemBase {
  kind: Category.OTHER;
}

export interface ItemFood extends ItemBase {
  expiracy: string;
  kind: Category.FOOD;
}

export enum Category {
  FOOD = "food",
  OTHER = "other",
}

export type Item = ItemOther | ItemFood;
export type NewItem = Omit<Item, "id">; // exlude id, created on BE
