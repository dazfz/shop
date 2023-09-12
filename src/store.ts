import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./reducers/cartReducer";
import userReducer from "./reducers/userReducer";
import filterReducer from "./reducers/filterReducer";

// Load Redux state from localStorage
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined; // If no saved state exists, return undefined
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error loading state from localStorage:", error);
    return undefined;
  }
};

// Save Redux state to localStorage
const saveStateToLocalStorage = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (error) {
    console.error("Error saving state to localStorage:", error);
  }
};

// Load persisted state from localStorage
const persistedState = loadStateFromLocalStorage();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    filter: filterReducer,
  },
  preloadedState: persistedState, // Pass the persisted state as preloadedState
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});


