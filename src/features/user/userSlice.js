import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  address: "",
  position: {},
  phoneNumber: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
    updateEmail(state, action) {
      state.email = action.payload;
    },
    updatePhonenumber(state, action) {
      state.phoneNumber = action.payload;
    },
  },
});

export const { updateEmail, updateName, updatePhonenumber } = userSlice.actions;

export default userSlice.reducer;
