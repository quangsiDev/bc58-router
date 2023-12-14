import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [],
  user: {
    name: "",
    account:""
    password:""
  },
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserList: (state, action) => {
      state.userList = action.payload;
    },
  },
});

export const { setUserList } = userSlice.actions;

export default userSlice.reducer;
