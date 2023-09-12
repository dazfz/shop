import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../types/ItemTypes";

const itemSlice = createSlice({
  name: "cart",
  initialState: [] as Item[],
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.id === newItem.id);

      console.log(JSON.parse(JSON.stringify(state)));

      if (existingItem) {
        if (existingItem.quantity < newItem.quantity)
          existingItem.quantity += 1;
      } else {
        state.push({ ...newItem, quantity: 1 });
      }
    },
    reduceQuantity: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.findIndex((item) => item.id === itemId);

      if (itemIndex !== -1) {
        const currentItem = state[itemIndex];
        if (currentItem.quantity > 1) {
          currentItem.quantity -= 1;
        } else {
          state.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const { addItem, reduceQuantity } = itemSlice.actions;

export const getCart = (state: { cart: Item[] }) => state.cart;

export default itemSlice.reducer;
