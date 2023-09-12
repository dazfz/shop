import { createSlice } from "@reduxjs/toolkit";
import { setToken } from "../services/itemService";

const loggedUserJSON = window.localStorage.getItem("loggedUser");
let initialUserState = null;
if (loggedUserJSON) {
  initialUserState = JSON.parse(loggedUserJSON);
  setToken(initialUserState.token);
}

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUser: (_state, action) => {
      console.log(JSON.parse(JSON.stringify(action)));
      return action.payload;
    },
    clearUser: () => {
      return null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
