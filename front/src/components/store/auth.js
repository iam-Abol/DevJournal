import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authMode: "signup",
  username: "",
  userId: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.authMode = "authenticated";
      state.username = action.payload.username;
      state.userId = action.payload.id;
    },
    signup(state) {
      state.authMode = "login";
    },
    logout(state) {
      state.authMode = "login";
      state.username = "";
      state.userId = "";
    },
  },
});
export default authSlice.reducer;
export const authActions = authSlice.actions;
