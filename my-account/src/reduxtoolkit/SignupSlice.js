import { createSlice } from "@reduxjs/toolkit";

export const signupslice = createSlice({
  name: "adminsignup",
  initialState: {
    adminpage: JSON.parse(localStorage.getItem("admindata")) || [],
  },
  reducers: {
    adminsignup: (state, action) => {
      state.adminpage.push(action.payload);
      console.log("Updated adminpage:", state.adminpage);

      localStorage.setItem("admindata", JSON.stringify(state.adminpage));

      state.adminpage = JSON.parse(localStorage.getItem("admindata"));
    },
  },
});
export const { adminsignup } = signupslice.actions;
export default signupslice.reducer;
